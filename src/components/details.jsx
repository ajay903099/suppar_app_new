import profile from '../assets/profile.png'

export default function Details() {
    const info = JSON.parse(localStorage.getItem("info"))
    const movies = JSON.parse(localStorage.getItem("movies"))
    return (
        <div style={{ background: "#5746EA", display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: "7px",height:"50vh",width:"31vw"}}>
            <div>
                <img style={{ padding: "15px" }} src={profile} alt="profile" />
            </div>
            <div style={{ display: "flex",justifyContent:"space-evenly", flexDirection: "column", background: "#5746EA", width: "25vw", padding: "10px", color: "white" }}>
                <div style={{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:"10px",marginBottom:"20px"}}>
                    <p style={{ fontFamily: "Roboto", fontSize: "21px", fontWeight: "400" }}>{info.name}</p>
                    <p style={{fontFamily: "Roboto", fontSize: "21px", fontWeight: "400" }}>{info.email}</p>
                    <p style={{fontFamily: "Roboto", fontSize: "35px", fontWeight: "700" }}>{info.username}</p>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
                    {
                        movies.map((item) => {
                            return <div key={item} style={{ background: "#9F94FF", padding: "5px", textAlign: "center", marginBottom: "5px", borderRadius: "12px", width:"135px"}}>{item}</div>
                        })
                    }
                </div>

            </div>

        </div>

    )
}