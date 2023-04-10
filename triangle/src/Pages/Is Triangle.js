import React from "react";
import Navbar from "../component/Navbar";
import { useState } from "react";

const IsTriangle = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [output, setOutput] = useState("");

  const handleInput1 = (event) => {
    setInput1(event.target.value);
  };
  const handleInput2 = (event) => {
    setInput2(event.target.value);
  };
  const handleInput3 = (event) => {
    setInput3(event.target.value);
  };

  const handleOnClick = () => {
    const user_value1 = Number(input1);
    const user_value2 = Number(input2);
    const user_value3 = Number(input3);
    const sum = user_value1 + user_value2 + user_value3;
    if (sum === 180) {
      setOutput("Hey,It is a Triangle");
    } else setOutput("Hey,It is not a Triangle!!");
  };

  return (
    <div>
      <Navbar />
      <h1>Angles of Triangle</h1>
      <h3>Angle 1</h3>
      <input
        onChange={handleInput1}
        placeholder="enter value for angle1"
        type="number"
      ></input>
      {/*the input value will be string even for inputs with type="number" so you may need to convert them to their respective types with Number(e.target.value). */}
      <h3>Angle 2</h3>
      <input
        onChange={handleInput2}
        placeholder="enter value for angle2"
        type="number"
      ></input>
      <h3>Angle 3</h3>
      <input
        onChange={handleInput3}
        placeholder="enter value for angle3"
        type="number"
      ></input>
      <br />
      <button onClick={handleOnClick}>Is Triangle ?</button>
      <h2>{output}</h2>
    </div>
  );
};

export default IsTriangle;
