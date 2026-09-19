import React from 'react';

export interface TechBadgeProps {
  name: string;
  variant?: 'cyan' | 'slate' | 'violet';
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = 'slate',
  size = 'sm',
}) => {
  const variantStyles = {
    slate: 'bg-navy-800 text-slate-300 border border-navy-700/80 hover:border-slate-500/50',
    cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30',
    violet: 'bg-violet-500/10 text-violet-300 border border-violet-500/30 hover:shadow-violet-glow',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center font-mono rounded font-medium tracking-tight transition-all duration-150 ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {name}
    </span>
  );
};
