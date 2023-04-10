import React,{useState}from 'react'
import Navbar from '../component/Navbar'
const Hypotenuse = () => {
  const[value1,setValue1] = useState("");
  const[value2,setValue2] = useState("");
  const[hypotenuse,setHypotenuse] = useState("");
  const handleInput1=(event)=>{
     setValue1(event.target.value)
  }
  const handleInput2=(event)=>{
    setValue2(event.target.value)
 }
 const handleOnClick=()=>{
  const base = Number(value1);
  const height= Number(value2);
  const hypotenuse = Math.sqrt(Math.pow(base,2)+Math.pow(height,2)).toFixed(3);
  setHypotenuse(hypotenuse);

 }
  return (
    <div>
      <Navbar />
      <h1>Calculate Hypotenuse of a triangle</h1>
      <h3>Enter base value (a) =</h3>
      <input type="number" onChange={handleInput1} />
      <h3>Enter base value (b) =</h3>
      <input type="number" onChange={handleInput2} />
      <br />
      <button onClick={handleOnClick}>Calculate Hypotenuse</button>
      <h3>The length of Hypotenuse is {hypotenuse}</h3>
      <h1>Hypotenuse formula</h1>
      <h3>√(base² + height²)</h3>
    </div>
  )
}

export default Hypotenuse
