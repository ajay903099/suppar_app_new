import MovieList from "../components/MovieList"
import Moviehistory from "../components/moviehistory"
import profilephoto from '../assets/profilephoto.png'


export default function Browse(){
    return<>
    <div style={{background:"black"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"10vh"}}>
            <p style={{fontFamily:"Single Day",color:"#72DB73",fontSize:"3rem",marginLeft:"20px"}}>suppar</p>
            <img style={{height:"50px",marginRight:"20px"}} src={profilephoto} alt="profile photo" />

        </div>
        <h2 style={{color:"white",letterSpacing:"0.8px",marginLeft:"40px"}}>Entertainment according to your choice</h2>
        <MovieList/>
        <Moviehistory/>
    </div>
        
    </>
}