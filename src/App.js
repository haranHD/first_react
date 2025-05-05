import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect} from 'react'
import AddItem from './AddItem';
import Serach from './Serach';
import apiReq from './apiReq';

function App() {

  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState( []);
        
  const [newItem , setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [Ferror , setFerror] = useState(null)
  const [isLoad, setLoad] = useState(true)
  useEffect(() => {
      const fetchItems = async () => {
        try{
            const response = await fetch(API_URL);
            if(!response.ok) throw Error("Data Not found")
            // console.log(response)
            const listItems = await response.json();
            // console.log(listItems)
            setItems(listItems)
            setFerror(null)
        }
        catch (err){
          setFerror(err.message)
        }
        finally{
          setLoad(false)
        }
      }
      setTimeout(() => {
        (async () => await fetchItems()) ()
      }, 2000)
      
    }, [] ) 



        const addItem = async (item) => {
          const id = items.length ? items[items.length - 1].id + 1 : 1
          const addNewItem = {id, checked:false,item}
          const listItems = [...items, addNewItem]
          setItems(listItems)
          // localStorage.setItem("tod-List",JSON.stringify(listItems))
          const postOptions = {
            method : 'POST',
            header : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(addNewItem)
          }
          const result = await apiReq(API_URL,postOptions)
          if(result) setFerror(result)
        }
  
          const handleChange = async (id) => {
              const listItems = items.map((item) => 
              item.id === id ? {...item,checked : !item.checked} : item)
              setItems(listItems)

              const myItem = listItems.filter(item => item.id === id)
              const UpdateOptions = {
                method : 'PATCH',
                header : {
                  'Content-Type' : 'application/json'
                },
                body : JSON.stringify({checked : myItem[0].checked})
              }
              const reqUrl = `${API_URL}/${id}`
              const result = await apiReq(reqUrl,UpdateOptions)
              if(result) setFerror(result)
    


              // localStorage.setItem("tod-List",JSON.stringify(listItems))
          }
          const del = async (id) => {
              const delList = items.filter((item) => 
              item.id !== id)
              setItems(delList)
              // localStorage.setItem("tod-List",JSON.stringify(delList))
              // const delItem = delList.filter(item => item.id === id)
              const delOptions = {
                method : 'DELETE'
              }
              const reqUrl = `${API_URL}/${id}`
              const result = await apiReq(reqUrl,delOptions)
              if(result) setFerror(result)
          
            }


          const submit = (e) => {
            e.preventDefault()
            if(!newItem) return;
            addItem(newItem)
            setNewItem('')
          }
  
  return (
    <div className='App'>
      <Header title= "Course List"/>
      <AddItem 
        newItem = {newItem}
        setItem = {setNewItem}
        submit ={submit}
      />
      <Serach
        search = {search}
        setSearch = {setSearch}
      />
      <main>
        {isLoad && <p>{`Loading Items`}</p>}
        {Ferror && <p>{`Error : ${Ferror}`}</p>}
        {!isLoad &&  !Ferror && <Content
          items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
          handleChange = {handleChange}
          del = {del}
        />}
      </main>
      
       
      <Footer
      len = {items.length}
      />    
    </div>
  );
}

export default App;
