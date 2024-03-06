import { useNavigate } from "react-router-dom"
import Timer from "../components/clock"

import Details from "../components/details"
import News from "../components/news"
import Notes from "../components/notes"
import Weather from "../components/weather"






export default function Display() {
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/browse")
    }
    return <>
    <div style={{background:"black",height:"120vh",padding:"30px"}}>
        <div style={{background:"black", display: "flex", gap: "50px",padding:"10px"}}>
            <div style={{ display: "flex",flexDirection:"column",marginBottom:"20px" }}>
                <div style={{ display: "flex", gap: "20px",marginBottom:"10px" }}>
                    <div style={{ display: "flex",flexDirection:"column",marginBottom:"20px" }}>
                        <div style={{marginBottom:"20px"}}><Details /></div>
                        <Weather/>

                    </div>
                    
                    <Notes />
                    

                </div>
                <div>
                    <Timer />
                </div>

            </div>
            <div>
                <News />
                
            </div>
        </div>
        
        
    </div>
    <div style={{background:"black",height:"10vh",position:"relative"}}>
        <div style={{position:"absolute",right:"80px",top:"20px"}}>
        <button style={{background:"#148A08",
                        padding:"10px 20px",
                        border:"none",
                        borderRadius:"40px",
                        fontFamily:"DM Sans,san-serif",
                        fontWeight:"400",
                        fontSize:"20px"
    
    
    
    }} onClick={handleclick}>Browse</button>
        </div>
        
    </div>
    


        
        



    </>
}