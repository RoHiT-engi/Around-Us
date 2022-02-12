import { ControlOutlined, GoogleOutlined } from "@ant-design/icons";
import {app} from "../Firebase/Auth";
import { signInWithGoogle } from "../Firebase/Auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const history = useNavigate();
    const Auth = getAuth()
    const handleGoogleSignIn = async() => {
        try{
            await signInWithGoogle()
            history("/ChatForum")
        }catch(e){
            alert(e.message)
        }
    }
  return (
      <>
      {console.log(Auth.currentUser+"Auth")}
    <div id="login-page">
      <div id="login-card">
        <h1>Welcome to Around Us Discussion Forum!</h1>
        <br />
        <div
          className="login-button google"
          onClick={handleGoogleSignIn}
        >
          <GoogleOutlined />
           Sign In with Google
        </div>
      </div>
    </div>
    </>
  );
};
export default Login;