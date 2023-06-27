import React, { useState } from "react";
import { Set } from "../App";
import { Questions } from "../question/Question";

const Quiz = () => {
  const { setState,score,setScore } = Set();
  const [number, setNumber] = useState(0);
  const [option,setOption]= useState('')
  const handleScore=()=>{
    if(option === Questions[number].answer){
        setScore(score+1)
    }
    setNumber(number+1)
  }
  const finish=()=>{
    if(option === Questions[number].answer){
        setScore(score+1)
    }
    setState('final')
  }
  return (
    <div className="w-full h-screen flex  pt-6 justify-center">
      <div className=" w-80 h-96 bg-[#8adc4f]  ">
        <h1 className="font-bold text-3xl pt-4">
          {Questions[number].question}
        </h1>
        <div className="flex flex-col pt-4 gap-3">
          <button onClick={()=>setOption('option1')} className="bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold mx-2">
            {Questions[number].option1}
          </button>
          <button onClick={()=>setOption('option2')} className="bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold mx-2">
            {Questions[number].option2}
          </button>
          <button onClick={()=>setOption('option3')} className="bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold mx-2">
            {Questions[number].option3}
          </button>

          {number === Questions.length - 1 ? (
            <button
              onClick={finish}
              className="bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold mx-2"
            >
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={handleScore}
              className="bg-blue-500 shadow-lg rounded-md px-4 py-2 hover:bg-blue-700 text-xl font-semibold mx-2"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
