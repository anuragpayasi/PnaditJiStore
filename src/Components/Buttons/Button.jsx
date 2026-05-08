import React from 'react'

const Button = ({ buttonName, className = "" }) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-xl
        bg-gradient-to-r from-amber-600 to-amber-900
        px-5 py-2.5
        sm:px-6 sm:py-3
        text-sm sm:text-base
        font-semibold text-white
        shadow-md
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:from-amber-500
        hover:to-orange-700
        active:scale-95
        cursor-pointer
        ${className}
      `}
    >
      {buttonName}
    </button>
  )
}

export default Button