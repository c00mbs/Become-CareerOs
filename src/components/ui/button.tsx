import * as React from 'react';

const buttonBase =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variants = {
  default: 'bg-espresso text-cream hover:bg-brown',
  outline: 'border border-espresso/20 bg-transparent text-espresso hover:bg-espresso/5',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
}

export function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  return (
    <button className={`${buttonBase} ${variants[variant]} ${className}`} {...props} />
  );
}
