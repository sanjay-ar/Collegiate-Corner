import React from "react";
import Button from "@material-ui/core/Button";
import { FcGoogle } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import loginImg from "../Assets/login.png";
import Topography from "@material-ui/core/Typography";
import { auth, provider } from "../Firebase/Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 15px rgb(7 15 63 / 33%)",
    backgroundColor: "#0c0d0d",
    color: "grey",
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "70px",
    paddingTop: "85px",
  },
  mainImg: {
    width: "100%",
    height: "auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#d9d",
  },
}));

function SignUp() {
  const classes = useStyles();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="div" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <img src={loginImg} className={classes.mainImg} alt="signup img" />
        <Topography variant="h4" style={{ paddingTop: "15px" }}>
          Sign In To Venues BIT
        </Topography>
        <Button
          variant="outlined"
          color="primary"
          className={classes.submit}
          startIcon={<FcGoogle />}
          onClick={login}
        >
          Sign In With Google
        </Button>
      </div>
    </Container>
  );
}

export default SignUp;
