import { GoogleOutlined } from "@ant-design/icons";

import { signInWithGoogle } from "../Firebase/Auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import Navbar from "./Navbar";

import "../css/Forums.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a
        color="inherit"
        href="https://github.com/RoHiT-engi/Around-Us/blob/main/LICENSE"
      >
        Around-Us
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const history = useNavigate();
  const Auth = getAuth();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      history("/ChatForum");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <>
      {console.log(Auth.currentUser + "Auth")}
      <div>
        <div>
          <Navbar />

          <Grid
            container
            component="main"
            sx={{ height: "100vh", width: "100%", margin: "auto" }}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage:
                  "url(https://c.tenor.com/1tK39Tm8QNkAAAAC/you-may-continue-proceed.gif)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Link>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Welcome to the Discussion Forum
                </Typography>
                {""}
                <br />
                <Typography component="h3" variant="h5" sx={{textAlign: "center" }}>
                  Make way for the Discussion Forum!
                </Typography>
                <Box noValidate sx={{ mt: 1 }}>
                  <Typography component="p" variant="p">
                    Talk, Relate, and Vibe with people like us.{" "}
                  </Typography>
                  <br />
                  <Button
                    className="login-button google"
                    onClick={handleGoogleSignIn}
                    sx={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Sign In with <GoogleOutlined />
                  </Button>

                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Login;
