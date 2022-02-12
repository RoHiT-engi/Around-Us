import { GoogleOutlined } from "@ant-design/icons";
import { auth ,app  } from "../Firebase/Auth";
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>Welcome to talkey!</h1>
        <br />
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new app.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          Sign In with Google
        </div>
      </div>
    </div>
  );
};
export default Login;