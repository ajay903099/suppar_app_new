import styles from '../components/movie.module.css';
export default function Moviechip({data,selected,Setselected}){
    const handleclick=()=>{
        Setselected((prev)=>prev.filter((item)=>item!==data))
    }
    return(
        <div className={styles.gneresid} style={{background:" #148A08",padding:"8px 10px",borderRadius:"24px"}}>
            {data} &nbsp; &nbsp; <span style={{background:"#148A08",color:" #085C00"}} onClick={handleclick}>X</span>
        </div>
    )
}