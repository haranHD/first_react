import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem , setItem, submit}) => {
  return (
    <form className='addForm' onSubmit={submit}>
        <label htmlFor="addItem"> Add Item</label>
        <input 
            autoFocus
            id='addItem'
            type="text" 
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setItem(e.target.value)}
        />
            <button
                type = 'Submit'
                aria-label=' Add Item'
            >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem