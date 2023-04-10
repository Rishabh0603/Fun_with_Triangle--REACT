import React,{useState} from 'react'
import Navbar from '../component/Navbar'


const Area = () => {
  const[input1,setInput1] = useState("");
const[input2,setInput2] = useState("");
const[area,setArea] = useState("");
 const handleOnChange1=(event)=>{
  setInput1(event.target.value);
 }
 const handleOnChange2=(event)=>{
  setInput2(event.target.value);
 }
 const handleOnClick = () => {
   const base = Number(input1);
   const height = Number(input2);
   const area = 0.5*(base*height);
   setArea(area) 
 }

  return (
    
    <div>
      <Navbar />
      <h1>Calculate Area of a triangle</h1>
      <h3>Enter first side of a triangle</h3>
      <input type="number" onChange={handleOnChange1}/>
      <h3>Enter second side of a triangle</h3>
      <input type="number" onChange={handleOnChange2}/>
      
      <br/>
      <button onClick={handleOnClick}>Calculate</button >
      <h3>Area of triangle is {area} units</h3>

    </div>
  )
}

export default Area
