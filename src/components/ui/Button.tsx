import React, { ButtonHTMLAttributes } from 'react'

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary' | 'ghost'
// }
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
    variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'icon' | 'default'; // Add 'size' here
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}


export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

