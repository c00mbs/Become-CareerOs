import * as React from 'react';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`flex h-10 w-full rounded-md border border-espresso/15 bg-white px-3 py-2 text-sm text-espresso placeholder:text-brown/70 focus:outline-none focus:ring-2 focus:ring-gold/40 ${className}`}
      {...props}
    />
  )
);

Input.displayName = 'Input';
