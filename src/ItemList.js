import React from 'react'
import LinesItem from './LinesItem'

const ItemList = ({items,handleChange,del}) => {
  return (
    <ul>
          {items.map((item) => (
            <LinesItem
            item = {item}
            key = {item.id}
            handleChange = {handleChange}
            del = {del}
            />
          ))}
    </ul>
  )
}

export default ItemList