import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'instagram'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    // Using CSS variables for consistent color rendering across devices
    primary: 'bg-[rgb(var(--color-orange))] text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-primary-700))] hover:scale-105 focus:ring-[rgb(var(--color-orange))] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[rgb(var(--color-text-primary))] text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-orange))] hover:text-[rgb(var(--color-text-primary))] focus:ring-[rgb(var(--color-text-primary))]',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
    instagram: 'bg-white text-[rgb(var(--color-text-black))] hover:bg-[#F0F0F0] hover:scale-105 focus:ring-white shadow-sm hover:shadow-md',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button
