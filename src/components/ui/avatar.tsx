import * as React from 'react';

export function Avatar({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-champagne text-sm font-medium text-espresso ${className}`} {...props} />;
}

export function AvatarFallback({ className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={className} {...props} />;
}
