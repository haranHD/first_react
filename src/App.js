import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
import Serach from './Serach';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('tod-List')));
        
  const [newItem , setNewItem] = useState('')
  const [search, setSearch] = useState('')



        const addItem = (item) => {
          const id = items.length ? items[items.length - 1].id + 1 : 1
          const addNewItem = {id, checked:false,item}
          const listItems = [...items, addNewItem]
          setItems(listItems)
          localStorage.setItem("tod-List",JSON.stringify(listItems))

        }
  
          const handleChange = (id) => {
              const listItems = items.map((item) => 
                item.id === id ? {...item,checked : !item.checked} : item)
              setItems(listItems)
              localStorage.setItem("tod-List",JSON.stringify(listItems))
          }
          const del = (id) => {
              const delList = items.filter((item) => 
              item.id !== id)
              setItems(delList)
              localStorage.setItem("tod-List",JSON.stringify(delList))
          }
          const submit = (e) => {
            e.preventDefault()
            if(!newItem) return;
            addItem(newItem)
            setNewItem('')
          }
  
  return (
    <div className='App'>
      <Header title= "To Do List"/>
      <AddItem 
        newItem = {newItem}
        setItem = {setNewItem}
        submit ={submit}
      />
      <Serach
        search = {search}
        setSearch = {setSearch}
      />
      <Content
        items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleChange = {handleChange}
        del = {del}
      />
       
      <Footer
      len = {items.length}
      />    
    </div>
  );
}

export default App;
