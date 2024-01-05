import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import { useState } from "react";
// import { useLogin } from "../hooks/uesLogin";
const LogIn = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState("");
    
//   const { login, error, setError, isLoading } = useLogin("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // if (!email || !password) {
    //   setError("Please fill in all fields.");
    //   return;
    // }
    // await login({ email, password });
  };
//   console.log("error", error);
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("./imgs/home0.jpg")',
          height: "100vh",
          width: "100%",
          zIndex: -1,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        className="blur-lg bg-no-repeat bg-cover bg-center "
      ></div>

      <center>
        <div
          className="bg-opacity-80 bg-white rounded-xl max-w-5xl m-12 md:flex shadow-2xl"
          style={{
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.9)", // Add your shadow values here
          }}
        >
          <div className="w-400 max-h-[600px]  overflow-hidden rounded-tl-lg rounded-bl-lg">
            <img src="./imgs/home0.jpg" alt="" className="w-full h-auto" />
          </div>
          <div className=" flex flex-col justify-center justify-items-center items-center m-auto">
            <h1 className="text-lg">
              <b>
                {" "}
                W E L C O M E <br /> B A C K{" "}
              </b>
            </h1>
            <form onSubmit={handleSubmit}>
              <Box>
                <div className="m-8">
                  <div>
                    <TextField
                      id="standard-basic"
                      label="E M A I L "
                      defaultValue=""
                      variant="standard"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>{" "}
                  <br />
                  <div>
                    <TextField
                      id="standard-basic"
                      label="P A S S W O R D"
                      defaultValue=""
                      variant="standard"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </Box>

              <Button
                type="submit"
                disabled={isLoading}
                variant="contained"
                color="primary"
              >
                {isLoading ? "LOADING ..." : "Sign Up"}
              </Button>
              {error && (
                <Alert severity="error" sx={{ marginTop: "16px" }}>
                  {error}
                </Alert>
              )}
              {error === "Invalid password" ? (
                <a href="resetpassword">forgit password?</a>
              ) : (
                ""
              )}
            </form>
            <p className="pt-6 pb-3">
              Don't Have Account Yet ? <a href="/signup">Join Us</a>
            </p>
          </div>
        </div>
      </center>
    </>
  );
};

export default LogIn;
