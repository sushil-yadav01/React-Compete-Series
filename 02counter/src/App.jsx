import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let[counter,setCounter]=useState(15)
 //let counter=15
 const AddValue=() =>{
  setCounter(counter+1);
  console.log("clicked",counter);
 }
  const RemoveValue =() =>{
  console.log("clicked",counter);
  setCounter(counter-1);
 }
 return (
<>
<h1>chai aur React</h1>
<h2> Counter value:{counter}</h2>
<button onClick={AddValue}>Add value {counter}</button>
<br />

<button onClick={RemoveValue}> remove value {counter}</button>
<p>footer:{counter}</p>
</>
) 
}

export default App
