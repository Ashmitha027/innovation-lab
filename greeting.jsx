import React, { useEffect,useState } from "react";
 function Greetings(){
    const[Greetings,setGreetings]=useState("")
    useEffect(()=>{
        const hours=new Date().getHours().toString().padStart(2,'0')
        const minutes=new Date().getMinutes().toString().padStart(2,'0')
        const seconds=new Date().getSeconds().toString().padStart(2,'0')
    if(hours<12){
        setGreetings(`good morning ${hours}:${minutes}:${seconds}`)
    }
    else if(hours>=12 && hours<=17){
         setGreetings(`good afternoon ${hours}:${minutes}:${seconds}`) 
    }
    else if(hours>=17 && hours<=19){
         setGreetings(`good Evening ${hours}:${minutes}:${seconds}`) 
    }
       })
    return(
        <div>
            {Greetings}
        </div>
    )

 }


 export default Greetings