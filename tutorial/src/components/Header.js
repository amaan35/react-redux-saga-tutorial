import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'

const Header = () => {
    const result = useSelector((state)=>state.cartData);
    console.log("Redux all data", result);
  return (
    <div className='header'>
      <div className='cart'>
        <span>{result.length}</span>
      </div>
    </div>
  )
}

export default Header
