import React from "react"

export function Select({ children, className = "" }) {
  return <div className={`relative ${className}`}>{children}</div>
}

export function SelectTrigger({ id, children, ...props }) {
  return (
    <button
      id={id}
      className="w-full px-3 py-2 border rounded-md bg-white text-left"
      {...props}
    >
      {children}
    </button>
  )
}

export function SelectValue({ placeholder }) {
  return (
    <span className="text-gray-500">{placeholder}</span>
  )
}

export function SelectContent({ children }) {
  return (
    <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
      {children}
    </div>
  )
}

export function SelectItem({ value, children }) {
  return (
    <div
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      data-value={value}
    >
      {children}
    </div>
  )
}
