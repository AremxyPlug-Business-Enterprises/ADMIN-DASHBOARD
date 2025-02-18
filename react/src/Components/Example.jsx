import React from 'react'
import { Link } from 'react-router-dom'
export const Example = () => {
  return (
    <div>
        <p>Example</p>
        <Link to="/" className="px-[16px] py-[24px] bg-blue-400 text-white font-[600]">
        Login Page
        </Link>
        </div>
  )
}
