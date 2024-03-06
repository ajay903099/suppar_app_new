import { useState } from "react";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import Moviebox from "../components/Moviebox";
import Moviechip from "../components/Moviechip";
import styles from '../components/movie.module.css';
import danger from "../assets/danger.png";

import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{  width: "140px", height: "100px",background:"transparent" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "140px", height: "100px",background:"transparent"}} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "140px", height: "100px",background:"transparent" }} src={western} />,
  },
];
export default function Movies() {
  const [selected, Setselected] = useState([]);
  console.log(selected)
  const navigate = useNavigate()
  const handleclick = () => {
    if (selected.length < 3) {
      return
    }
    else {
      localStorage.setItem("movies",JSON.stringify(selected))
      navigate("/display")
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.maincomponent} style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p className={styles.name} style={{ color: "#72DB73" }}>Super app</p>
          <p className={styles.para} >Choose your entertainment category</p>
        </div>
        <div style={{ display: "flex",justifyContent:"flexstart",alignItems:"center", gap: "13px", marginTop: "40px",width:"400px",flexWrap:"wrap"}}>
          {
            selected.map((item) => {
              return (
                <Moviechip key={item} data={item} selected={selected} Setselected={Setselected} />
              )

            })
          }
        </div>
        <div className={styles.reqmsg} style={{color:"red"}}>
          
            {selected.length <= 3 ? <><img src={danger} alt="danger-mark" style={{height:"14px",width:"17px",marginTop:"40px"}} /> <span>"Minimum 3 category required"</span></> : ""}
        </div>
        

      </div>
      <div className={styles.scomponent} style={{ display: "flex",justifyContent:"center",alignItems:"center", flexDirection: "column" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {
            genres.map((genres) => {
              return (
                <Moviebox key={genres.id} data={genres} selected={selected} Setselected={Setselected} />
              )
            })
          }
        </div>

        <button className={styles.next} onClick={handleclick}>Next Page</button>

      </div>


    </div>)
}