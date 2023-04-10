import React from "react";
import Navbar from "../component/Navbar";
import Questions from "../component/Questions";

const Quiz = () => {
  const answers = ["90°","right angled","one right angle","12, 16, 20","Equilateral triangle","85°","40°","a + b + c","two","45°"];
 
  return (
    <div>

      <Navbar />
      <h1>Quiz on triangles</h1>
      <h3>For each correct answer you will get 1 point</h3>
       <Questions />
       

     <button >Submit</button>
    </div>
  );
};

export default Quiz;
