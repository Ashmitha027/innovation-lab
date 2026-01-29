import React, { useState } from 'react'

function App() {
  const [num1,setnum1]=useState("")
  const [num2,setnum2]=useState("")
  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1 style={{textdecoration:"underline"}}>Calculator</h1>
      <input type="number"placeholder='enter the first value' 
      onChange={(e)=>setnum1(e.target.value)} />
      <input type="number"placeholder='enter the second value'
      onChange={(e)=>setnum2(e.target.value)} />
      <div style={{height:"200px",
        width:"300px",
        border:"5px insert black",
        marginLeft:"360px",
        marginTop:"20px",
        backgroundColor:"lemonchiffon",textAlign:"left"
      }}>
        <h3>Result</h3>
        <p><strong>addition</strong> {a+b}</p>
        <p><strong>subtraction</strong> {a-b}</p>
        <p><strong>division</strong> {a/b}</p>
        <p><strong>multiplication</strong> {a*b}</p>
      </div>
    </div>
  )
}

export default App