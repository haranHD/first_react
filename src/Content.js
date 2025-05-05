import React from 'react'

import ItemList from './ItemList';
const Content = ({items,handleChange,del}) => {
  return (
    <> 
      {(items.length) ? (
        <ItemList 
        items = {items}
        handleChange = {handleChange}
        del = {del}
        />
      ) : (
      <p style={{
        display:'flex',
        marginTop:'2rem'
      }}> Your To Do is Empty </p>
      )
      }
    </>
    
  )
}

export default Content