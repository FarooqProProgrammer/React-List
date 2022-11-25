import {useEffect, useState} from 'react'
import './App.css';
import { add ,get,DeleteItem,UpdateDoc} from './cinfig/db';
import { Input , Space } from 'antd';

function App() {

  const [text,setText] = useState()
  const [list,setList] = useState([])
  const [value,setValue] = useState('')
  const [val,setVal] = useState(false)
  
  const item =(e)=>{

      setText(e.target.value)
  }

  const addItem = async()=>{
    // const data = [...list]
    // data.push(text)
    // setList(data)

    await add(text)
    setText('')
  }


  const Delete=async (index)=>{
      await DeleteItem(index)
  }

    const UpdateItem= (index)=>{
      setVal(true)
      const data = [...list]
      let value = data[index]
      console.log(value);
      
      setValue(value.name)
      
      
    localStorage.setItem("id",JSON.stringify(value.id))

    }
    const EditItem = async ()=>{
      let id =JSON.parse( localStorage.getItem("id"))
      // alert(text);
      await UpdateDoc(text,id)
      setText('')
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
        <div className='input_tag'>
          {val === true?
          (<Input placeholder={value} onChange={item}/>):(<Input  placeholder='Enter Todo' onChange={item}/>) }
          
        </div>

        <Space wrap>
            <button type="primary" onClick={val === true? EditItem: addItem
            }><i class="fa-solid fa-plus"></i></button>
        </Space>

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
