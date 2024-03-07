import React, { useEffect, useState } from 'react'

function Moviehistory({ genreid, genrename }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreid}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmE0MTU2ZmQ2MTQ3NWEyZDNiZDdkNThkNjMwMWRkOSIsInN1YiI6IjY0MDhmMmQ1MDNmMGI2MDBlOWIwMGU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fynkjlrA3ndCcSC-gukTQs78CTQtKFqpFgrzHnSXQTw",
          },
        };
    
        fetch(url, options)
          .then((res) => res.json())
          .then((json) => setMovies(json.results))
          .catch((err) => console.error("error:" + err));
      }, []);
    
    console.log(movies)
    return (
        <div key={genreid}>
            <p style={{marginTop:"20px",marginLeft:"40px",marginBottom:"20px",fontSize:"1.5rem",letterSpacing:"0.8px",fontWeight:"700",color:"#878787"}}>{genrename}</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {
                    movies.map((movies, index) => {
                        return (
                            index >= 4 ? (<></>) : <div style={{display:"flex"}}>
                                <img style={{objectFit:"initial",height:"192px",width:"341px",borderRadius:"9px"}}
                                    src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                                    alt={movies.title}
                                />
                            </div>
                        )


                    })
                }

            </div>
        </div>
    )
}

export default Moviehistory