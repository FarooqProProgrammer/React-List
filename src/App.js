import {useState} from 'react'
import './App.css';

function App() {

  const [text,setText] = useState()
  const [list,setList] = useState([])
  
  const item =(e)=>{

      setText(e.target.value)
  }

  const add = ()=>{
    const data = [...list]
    data.push(text)
    setList(data)
  }


  const Delete=(index)=>{
    const data = [...list]
    data.splice(index,1)
    setList(data)
  }


  return (
    <div className="main_div">
      <div className="center_div">
        <h1>Todu List</h1>
        <input  placeholder='Enter Todo' onChange={item}/>
        <button onClick={add}><i class="fa-solid fa-plus"></i></button>

        <div className='List'>
        <ul>
          {
            list.map((item,index)=>{
              return (
                <li>
              <i onClick={()=> Delete(index)} class="fa-regular fa-circle-xmark"></i>
               {item}
            <i class="fa-solid fa-pen-to-square"></i>
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
