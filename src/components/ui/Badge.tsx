import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline' | 'neutral' | 'emerald';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = ''
}) => {
  const variantStyles = {
    primary: 'bg-neutral-900 text-white border-neutral-800',
    accent: 'bg-indigo-50 text-indigo-800 border-indigo-200 font-semibold',
    outline: 'bg-white text-neutral-700 border-neutral-200/80',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200/60 font-medium',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 font-semibold'
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1 rounded-md',
    md: 'text-xs px-3.5 py-1.5 rounded-md'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
