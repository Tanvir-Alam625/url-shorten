import menu from '@/navigation';
import { MenuType } from '@/types/menu';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-between gap-y-4 px-2 py-4">
      <h2 className="text-xl font-medium tracking-wide">
        <span className="text-primary-500">URL</span> Shorten
      </h2>
      <ul className="flex flex-1 items-center justify-end gap-x-6">
        {menu.length
          ? menu.map((link: MenuType, index: number) => (
              <li className="text-sm font-medium" key={index}>
                <Link
                  className={twMerge(
                    link.href === pathname
                      ? 'text-primary-500'
                      : 'animate-fade-in-up text-dark-700 hover:text-primary-500'
                  )}
                  to={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Header;
