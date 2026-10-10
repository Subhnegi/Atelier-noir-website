import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from './Container';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', to, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] min-h-[48px] min-w-[48px]';
    
    const variants = {
      primary: 'bg-charcoal text-ivory hover:bg-black',
      secondary: 'bg-stone text-ivory hover:bg-[#9d8f79]',
      outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory',
      ghost: 'text-charcoal hover:bg-charcoal/5',
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
