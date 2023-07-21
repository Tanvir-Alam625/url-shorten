import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const classMap = {
  base: 'inline-flex w-full items-center overflow-hidden rounded border border-dark-200 bg-transparent placeholder-dark-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed disabled:bg-dark-100 disabled:text-dark-500',

  valid: 'border-success-500 focus:border-success-500 focus:ring-success-500',

  invalid: 'border-danger-500 focus:border-danger-500 focus:ring-danger-500',

  size: {
    sm: 'px-4 py-1 text-xs placeholder:text-xs leading-5',
    md: 'px-4 py-2 text-sm placeholder:text-sm',
    lg: 'px-4 py-2 text-base placeholder:text-base',
  },
};

export type InputProps = {
  name?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  inputSize?: 'sm' | 'md' | 'lg';
  className?: string;
  isValid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', inputSize = 'md', className, isValid, ...rest }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={twMerge(
          classMap.base,
          classMap.size[inputSize],
          (isValid !== undefined || isValid === true) && classMap.valid,
          isValid === false && classMap.invalid,
          className
        )}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
