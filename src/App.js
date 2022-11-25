import {useEffect, useState} from 'react'
import './App.css';
import { add ,get,DeleteItem} from './cinfig/db';

function App() {

  const [text,setText] = useState()
  const [list,setList] = useState([])
  const [value,setValue] = useState()
  const [val,setVal] = useState(false)
  
  const item =(e)=>{

      setText(e.target.value)
  }

  const addItem = async()=>{
    // const data = [...list]
    // data.push(text)
    // setList(data)

    await add(text)
  }


  const Delete=async (index)=>{
      await DeleteItem(index)
  }

    const UpdateItem= (index)=>{
      setVal(true)
      const data = [...list]
      let value = data[index]
      setValue(value)
    }
    

    const render1 = async()=>{

        let data = await get()
        console.log(data);
        setList(data)
      
    }
    
    render1()

    useEffect(()=>{
      render1()
    },[list])

   
  return (
    <div className="main_div" >
      <div className="center_div">
        <h1>Todu List</h1>
        {val === true?<input value={value} placeholder='Enter Todo' onChange={item}/>:<input  placeholder='Enter Todo' onChange={item}/> }
        <button onClick={val === true? UpdateItem: addItem
        }><i class="fa-solid fa-plus"></i></button>


        <div className='List'>
        <ul>
          {
            list.map((item,index)=>{
              return (
                <li>
                  <i onClick={()=> Delete(item.id)} class="fa-regular fa-circle-xmark"></i>
                  {item.name}                  
                  <i  onClick={()=> UpdateItem(index)} class="fa-solid fa-pen-to-square"></i>
            </li>
              )
              
            })
          }
        </ul>

        
        </div>
      </div>
    </div>
  );
}

export default App;
