import styles from '../components/movie.module.css';
export default function Moviebox({data,selected,Setselected}){
    const isselected=selected.includes(data.id);
    const handleclick=()=>{
        if(selected.includes(data.id)){
            Setselected((prev)=> prev.filter((item)=>item!==data.id))
        }
        else{
            Setselected((prev)=> { return [...prev,data.id] })
        }
        
    }
    return(
        <div onClick={handleclick} style={{borderRadius:"10px",height:"160px",width:"190px",padding:"10px",background:data.color,textAlign:"center",border:isselected?"6px solid #11B800":""}}>
            <p className={styles.category} style={{background:"transparent",textAlign:"left"}}>{data.id}</p>
            <div style={{background:"transparent"}}>{data.image}</div>
        </div>
    )
}