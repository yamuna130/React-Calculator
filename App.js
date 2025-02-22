import Keypad from './keypad'
import './App.css'
import {useState} from 'react'

function App(){
  let [input, setInput] = useState("")
  
  const handleClick = (value) => {
    setInput(input + value)
  }
  
  const calculate = () => {
    try {
      let iptVal = eval(input)
      setInput(String(iptVal))
    } catch (error) {
      setInput("Error")
    }
  }

  const handleClear = () => {
    setInput("")
  }
  
  return(
    <div className='container'>
      <h1>Calculator App React</h1>
      <div className='calculator'>
        <input type='text' value={input} className='ipt'></input>
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate} />
      </div>
    </div>
  )
}

export default App