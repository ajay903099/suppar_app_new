import { useState } from "react";
import styles from './register.module.css';
import Image from '../assets/image.png';
import { useNavigate } from "react-router-dom";


function Registercomp() {

    const [formvalues, setFormValues] = useState({

        name: "",
        username: "",
        email: "",
        phoneno: "",
        checkbox: false

    });
    const [error,setError]=useState({
        name: null,
        username: null,
        email: null,
        phoneno: null,
        checkbox: null
    })
    const handlechange = (e) => {
        setFormValues({ ...formvalues, [e.target.name]: e.target.value });
    }
    const Navigate=useNavigate();
    const handlesignup=()=>{
        let iserror=false;
        if(formvalues.name.trim().length===0){
            setError((prev)=>({...prev,"name":"Field is required"}));
            iserror=true;
        }else{
            setError((prev)=>({...prev,"name":null}));
        }
        if(formvalues.username.trim().length===0){
            setError((prev)=>({...prev,"username":"Field is required"}));
            iserror=true;
        }else{
            setError((prev)=>({...prev,"username":null}));
        }
        if(formvalues.email.trim().length===0){
            setError((prev)=>({...prev,"email":"Field is required"}));
            iserror=true;
        }else{
            setError((prev)=>({...prev,"email":null}));
        }
        if(formvalues.phoneno.trim().length===0){
            setError((prev)=>({...prev,"phoneno":"Field is required"}));
            iserror=true;
        }else{
            setError((prev)=>({...prev,"phoneno":null}));
        }
        if(formvalues.checkbox === false){
            setError((prev)=>({...prev,"checkbox":"Check this box if you want to proceed"}));
            iserror=true;
        }else{
            setError((prev)=>({...prev,"checkbox":null}));
        }
        if(!iserror){
            Navigate("/movies")
            localStorage.setItem("info",JSON.stringify(formvalues))
        }
        
    }

    return (
        <div className={styles.maincompo}>

            <div className={styles.imgcompo}>
                <img src={Image} alt="suppar image" />
                <h1 style={{background:"transparent"}}>
                    Discover new things on Superapp
                </h1>
            </div>

            <div className={styles.registerpart}>
                <p className={styles.appname} style={{color:"#72DB73"}}>Super app</p>
                <p className={styles.account} style={{color:"white"}}>Create your new account</p>
                <input type="text" placeholder="Name" value={formvalues.name} onChange={handlechange} name="name" />
                {error.name ? <p className="error" style={{color:"red"}}>{error.name}</p>:<></>}
                <input type="text" placeholder="UserName" value={formvalues.username} onChange={handlechange} name="username" />
                {error.username ? <p style={{color:"red"}}>{error.username}</p>:<></>}
                <input type="email" placeholder="email" value={formvalues.email} onChange={handlechange} name="email" />
                {error.email ? <p style={{color:"red"}}>{error.email}</p>:<></>}
                <input type="text" placeholder="Phone no" value={formvalues.phoneno} onChange={handlechange} name="phoneno" />
                {error.phoneno ? <p style={{color:"red"}}>{error.phoneno}</p>:<></>}
                <div className={styles.checkbox}>
                    <input type="checkbox" name="checkbox" id="checkbox" value={formvalues.checkbox} onChange={handlechange} />
                    <label htmlFor="checkbox">Share my registration data with Superapp</label>
                    {error.checkbox ? <p style={{color:"red"}}>{error.checkbox}</p>:<></>}

                    
                </div>
                
                <button onClick={handlesignup} className={styles.button}>SIGN UP</button>
                <p className={styles.upperp} style={{color:"#7C7C7C"}}>By clicking on Sign up. you agree to Superapp <span style={{color:"#72DB73"}}>Terms and Conditions of Use</span> </p>
                <p className={styles.lowerp} style={{color:"#7C7C7C"}}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{color:"#72DB73"}}>Privacy Policy</span></p>
            </div>
        </div>
    );
}

export default Registercomp