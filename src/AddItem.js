import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem , setItem, submit}) => {

  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={submit}>
        <label htmlFor="addItem"> Add Item</label>
        <input 
            autoFocus
            ref = {inputRef}
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
                onClick={()=>{
                  inputRef.current.focus()
                }}
            >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem