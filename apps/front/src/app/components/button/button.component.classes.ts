export type buttonSize = 'lg' | 'md' | 'sm';
export type buttonVariant = 'text' | 'contained' | 'outlined';

export interface ButtonInputs {
  variant: buttonVariant;
  size: buttonSize;
  fullWidth: boolean;
  disabled: boolean;
}

export const classes = ({
  variant,
  size,
  fullWidth,
  disabled,
}: ButtonInputs) => ({
  'leading-8 text-nowrap font-semibold transition-all duration-200 rounded-full':
    true,
  'opacity-50 cursor-not-allowed': disabled,
  'w-full': fullWidth,
  'text-sm py-2 px-4': size === 'sm',
  'text-md py-4 px-6': size === 'md',
  'text-lg py-6 px-8': size === 'lg',
  'text-primary bg-blue-50': variant === 'text',
  'bg-primary text-white': variant === 'contained',
  'border border-primary text-primary': variant === 'outlined',
  'hover:bg-blue-100': variant === 'text' && !disabled,
  'hover:bg-primary-dark': variant === 'contained' && !disabled,
  'hover:border-primary-dark hover:text-primary-dark':
    variant === 'outlined' && !disabled,
});
