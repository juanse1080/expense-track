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
  'text-blue-500': variant === 'text',
  'bg-blue-500 text-white': variant === 'contained',
  'border-2 border-blue-500 text-blue-500': variant === 'outlined',
  'hover:bg-blue-50': variant === 'text' && !disabled,
  'hover:bg-blue-700': variant === 'contained' && !disabled,
  'hover:border-blue-700 hover:text-blue-700':
    variant === 'outlined' && !disabled,
});
