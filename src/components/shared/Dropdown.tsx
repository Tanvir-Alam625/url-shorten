import { useDisclosure } from '@/hooks/use-disclosure';
import { CSSUnit } from '@/types';
import React, { createContext, useContext } from 'react';
import { LayerProps, TriggerProps, useLayer } from 'react-laag';
import { PlacementType } from 'react-laag/dist/PlacementType';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type DropdownContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  renderLayer: (children: React.ReactNode) => React.ReactNode;
  triggerProps: TriggerProps;
  layerProps: LayerProps;
};

const DropDownContext = createContext<DropdownContextType | undefined>(undefined);

type DropdownProps = {
  placement?: PlacementType;
  children: React.ReactNode;
};

const Dropdown = ({ placement = 'bottom-end', children }: DropdownProps) => {
  const { isOpen, open, toggle, close } = useDisclosure();

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: true, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: placement, // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
    arrowOffset: 16, // let the arrow have some room to breath also
  });

  return (
    <DropDownContext.Provider value={{ isOpen, open, toggle, close, renderLayer, triggerProps, layerProps }}>
      <div className={'relative'}>{children}</div>
    </DropDownContext.Provider>
  );
};

// Dropdown context
const useDropdownContext = () => {
  const context = useContext(DropDownContext);
  if (context === undefined) {
    throw new Error('Must be used in a Dropdown component');
  }
  return context;
};

// Dropdown Trigger
type DropdownTriggerProps = {
  children: React.ReactNode;
  className?: string;
};
const Trigger = ({ children, className }: DropdownTriggerProps) => {
  const { toggle, triggerProps } = useDropdownContext();

  return (
    <>
      <div role={'button'} {...triggerProps} className={className} onClick={toggle}>
        {children}
      </div>
    </>
  );
};

// Dropdown Content
type DropdownContentProps = {
  children: React.ReactNode;
  width?: CSSUnit;
  className?: string;
};

const Content = ({ width = '180px', className, children }: DropdownContentProps) => {
  const { isOpen, renderLayer, layerProps } = useDropdownContext();

  return (
    <>
      {renderLayer(
        isOpen && (
          <div
            {...layerProps}
            style={{ ...layerProps.style, width }}
            className={twMerge(
              'animate-fade-in-up overflow-hidden rounded-primary border bg-white shadow-lg ',
              className
            )}
          >
            {children}
          </div>
        )
      )}
    </>
  );
};

// Dropdown Link
type DropdownLinkProps = {
  children: React.ReactNode;
  href: string;
  method?: string;
  className?: string;
  target?: string;
};

const DropdownLink = ({ href, children, className, target }: DropdownLinkProps) => {
  return (
    <Link
      to={href}
      target={target}
      className={twMerge(
        'flex w-full items-center px-4 py-2 text-left text-sm leading-5 text-slate-800 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none',
        className
      )}
    >
      {children}
    </Link>
  );
};

type DropdownItemProps = {
  children: React.ReactNode;
  className?: string;
};

const DropdownItem = ({ children, className }: DropdownItemProps) => {
  const { close } = useDropdownContext();
  return (
    <div
      className={twMerge(
        'flex w-full items-center px-4 py-2 text-left text-sm leading-5 text-slate-800 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none',
        className
      )}
      onClick={() => close()}
    >
      {children}
    </div>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
Dropdown.Item = DropdownItem;

export default Dropdown;
