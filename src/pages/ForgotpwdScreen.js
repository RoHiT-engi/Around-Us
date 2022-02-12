import { sendPasswordResetinEmail } from "../Firebase/Auth";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


const Forgotpwd = ()=>{
    const [email, setemail] = useState('')
    let history = useNavigate()
    const submit = async ()=>{
        try{
            await sendPasswordResetinEmail(email);
            alert("Check your email for reset link")
            history('/login')
        }catch(e){
            alert(e)
        }
    }
    return(
        <>
        <div><Link to="/"><button size="lg" className="btn btn-outline-dark back-btn"><i className="fa fa-angle-double-left"></i>  Back </button></Link></div>  
        <div className="signup-form">
         <div className="form-box">
                <h2>Forgot Password</h2>
                <p className="hint-text">Enter the email address below</p>
                <div className="form-group">
                    <input type="text" class="form-control input-lg" name="Login ID" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email ID" required="required"/>
                </div>  
                
                <div className="form-group">
                    <button type="submit" onClick={submit} className="btn btn-lg btn-block sign-btn">Done</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forgotpwd