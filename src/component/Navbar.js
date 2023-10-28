import {
  AppBar,Toolbar,Typography,Button,makeStyles,} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };


  return (
    <AppBar position="fixed" background= "transparent" style={{ backgroundColor : '#225f7e' }}>
      <Toolbar style={{minHeight: "80px"}}>
        <Typography variant="h6" className={classes.title} style={{fontSize: "32px",fontWeight: "800", fontFamily: 'Titan One, sans-serif'}}>
        <img src="logo1.ico" width="30px" height="auto"></img> JOB HARBOR 
        </Typography>
        <div style={{marginTop:"20px"}}>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              
              <Button
                color="inherit"
                onClick={() => handleClick("/home")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Home
              </Button>

              <Button
                color="inherit"
                onClick={() => handleClick("/addjob")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Add Jobs
              </Button>

              <Button
                color="inherit"
                onClick={() => handleClick("/myjobs")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Posted
              </Button>

              <Button
                color="inherit"
                onClick={() => handleClick("/employees")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Employees
              </Button>

              <Button
                color="inherit"
                onClick={() => handleClick("/profile")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Profile
              </Button>

              {/* <Button
                color="inherit"
                onClick={() => handleClick("/logout")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Logout
              </Button> */}
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={() => handleClick("/home")}
                style={{
                  fontSize: "16px",
                  fontFamily: "Lato, sans-serif",
                  textDecoration: "none", // Hindari underline default
                  borderBottom: "2px solid transparent", // Garis bawah awalnya transparan
                  transition: "border-bottom 0.3s ease-in-out", // Efek transisi
                }}
                onMouseOver={(e) => {
                  e.target.style.borderBottom = "2px solid #7bc5d9"; // Ubah warna dan ketebalan garis bawah saat dihover
                }}
                onMouseOut={(e) => {
                  e.target.style.borderBottom = "2px solid transparent"; // Kembalikan ke transparan saat tidak dihover
                }}>
                Home
              </Button>

              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                <Typography style={{fontSize:"18px, fontFamily: 'Oswald, sans-serif'"}}>Applied</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
              <Typography style={{fontSize:"18px, fontFamily: 'Oswald, sans-serif'"}}>Profile</Typography>
              </Button>
              {/* <Button color="inherit" onClick={() => handleClick("/logout")}>
              <Typography style={{fontSize:"18px, fontFamily: 'Oswald, sans-serif'"}}>Logout</Typography>
              </Button> */}
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              <Typography style={{fontSize:"18px, fontFamily: 'Oswald, sans-serif'"}}>Login</Typography>
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
            <Typography style={{fontSize:"18px", fontFamily: 'Oswald, sans-serif'}}>SignUp</Typography>
            </Button>
          </>
        )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
