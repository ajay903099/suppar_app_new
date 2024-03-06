import { useState } from "react"

export default function Notes(){
    const [notes,Setnotes]=useState(localStorage.getItem("notes")??"");
    const handlechange=(e)=>{
        Setnotes(e.target.value);
        localStorage.setItem("notes",e.target.value)
    }
    return(
        <div style={{background:"#F1C75B",width:"25vw",height:"78vh",color:"white",padding:"10px",borderRadius:"7px"}}>
            <h1>notes</h1>
            <textarea value={notes} onChange={handlechange} style={{background:"#F1C75B",border:"None",color:"black",width:"25vw",height:"40vh",maxHeight:"60vh",minHeight:"40vh",maxWidth:"23vw"}} ></textarea>
        </div>
    )
}