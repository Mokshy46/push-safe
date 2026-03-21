import React from 'react'

const Button = ({className,href, children}) => {
  

    const btn = ()=>(

        <div className={`text-center text-3xl font-semibold text-red-900 ${className}`}>
            {children}

        </div>
    )
  return btn();
}

export default Button