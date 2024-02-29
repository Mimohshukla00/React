import React from 'react'
import "./Item.css"

function Item(prop) {
  return (
    <div className='item'>{prop.name}</div>
  )
}

export default Item