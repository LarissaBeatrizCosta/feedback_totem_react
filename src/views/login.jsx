import * as React from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  InputLabel,
  Input,
  FormControl,
} from "@mui/material";
import logo from "../assets/images/favicon.jpg";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonSend from "./components/buttonSend";
import { useNavigate } from "react-router-dom";
import validator from "email-validator";
import { useState } from "react";
import AlertDialog from "./components/dialogs";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (validator.validate(email) && password !== "") {
      navigate("/");
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: "#f8f8f8",
        height: "60vh",
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: "20px",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          height: "10vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 2px -4px gray",
        }}
      >
        <img
          style={{ height: "70%", marginTop: "2vh", marginBottom: "2vh" }}
          src={logo}
          alt="logo"
        />
      </Box>

      <Typography variant="h5" sx={{ marginLeft: "2vh", fontWeight: "bold" }}>
        Autenticação
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-mail"
          variant="standard"
          fullWidth
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <HttpsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          display: "flex",
        }}
      >
        {showAlert && <AlertDialog text={"Insira um e-mail e senha válidos"}></AlertDialog>}

        <ButtonSend
          color={"#cca926"}
          text={"Entrar"}
          onClick={() => {
            handleClick();
          }}
          fontSize={"20px"}
        ></ButtonSend>
      </Container>
    </Container>
  );
}
