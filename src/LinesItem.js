import React from 'react'
import { FaTrash } from "react-icons/fa";

const LinesItem = ({item,handleChange,del}) => {
  return (
    <li className='item' key = {item.id}>
              <input type="checkbox" onChange={() => handleChange(item.id)}
              checked = {item.checked} />
              <label
              style={(item.checked) ? {textDecoration:'line-through'} : null}
              onDoubleClick={()=> handleChange(item.id)}>{item.item}</label>
              <FaTrash 
              role='button'
              tabIndex='0'
               onClick={()=>del(item.id)}
               aria-label={`Delete ${item.item}`}/>
            </li>
  )
}

export default LinesItem