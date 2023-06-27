import { createContext, useContext, useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Final from "./components/Final";
import { Context } from "./context/Context";

function App() {
 
  const [state, setState]= useState('menu')
  const [score, setScore]= useState(0)
  return (
    <div className="App text-center pt-4 bg-slate-400">
  
      <h1 className="text-3xl font-bold">Quiz app</h1>
      <Context.Provider value={{state,setState, score,setScore}}>
     {state === 'menu' && <Menu></Menu>}
     {state === 'quiz' && <Quiz></Quiz>}
     {state === 'final' && <Final></Final>}
      </Context.Provider>
    </div>
  );
}
export const Set=()=>{
  return useContext(Context)
}
export default App;
