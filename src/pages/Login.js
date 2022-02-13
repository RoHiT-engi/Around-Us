import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailnPassword, signInWithGoogle } from "../Firebase/Auth";
import { Alert, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

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
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      await signInWithEmailnPassword(data.get("email"), data.get("password"));
      history("/");
    } catch (error) {
      alert("Error Occured " + error);
    }
    // eslint-disable-next-line no-console
  };
  

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Link to="/">
          <button
            size="lg"
            className="btn btn-outline-dark back-btn"
            style={{ position: "absolute" }}
          >
            <i className="fa fa-angle-double-left"></i> Back{" "}
          </button>
        </Link>
      </div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://c.tenor.com/x45c996Fj4UAAAAC/imposter-the-simpsons.gif)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Typography variant="p" mt="2">
                Login with{" "}
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={async () => {
                  try {
                    await signInWithGoogle();
                    history("/");
                  } catch (e) {
                    Alert("Error Occured " + e);
                  }
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                <GoogleIcon />
              </Button>
              <Grid container>
                <Grid item xs>
                  <a href="/forgotpwd" variant="body2">
                    Forgot password?
                  </a>
                </Grid>
                <Grid item>
                  <a href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </a>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
