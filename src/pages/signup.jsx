import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { pink, blue } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import { useState } from "react";
// import { useSignUp } from "../hooks/useSignUp";
const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState("");
//   const { signUp, error, setError, isLoading } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Basic form validation
    // if (!username || !email || !password || !password2 || !gender) {
    //   setError("Please fill in all fields.");
    //   return;
    // }

    // // Check if passwords match
    // if (password !== password2) {
    //   setError("Passwords do not match.");
    //   return;
    // }

    // // Sign up logic
    // await signUp({ username, email, password, gender });
    // console.log(username, email, password, gender);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("./imgs/bathroom0.jpg")',
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
            <img src="./imgs/bathroom0.jpg" alt="" className="w-full h-auto" />
          </div>
          <div className=" flex flex-col justify-center justify-items-center items-center m-auto">
            <p className="font-mono tracking-wider text-xl px-4 pt-4 ">
              <b>BEGIN YOUR JOURNEY WITH US !</b>
            </p>
            <form onSubmit={handleSubmit}>
              <Box>
                <div className="m-8">
                  <div>
                    <TextField
                      id="standard-basic"
                      label="F U L L   N A M E"
                      defaultValue=""
                      variant="standard"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <TextField
                      id="standard-basic"
                      label="E M A I L E"
                      defaultValue=""
                      variant="standard"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>{" "}
                  <br />
                  <div>
                    <TextField
                      id="standard-basic"
                      label="P A S S W O R D "
                      defaultValue=""
                      variant="standard"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <TextField
                      id="standard-basic"
                      label="C O N F I R M  P A S S W O R D"
                      defaultValue=""
                      variant="standard"
                      type="password"
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <FormControlLabel
                          value="female"
                          control={
                            <Radio
                              sx={{
                                color: pink[800],
                                "&.Mui-checked": {
                                  color: pink[600],
                                },
                              }}
                            />
                          }
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={
                            <Radio
                              sx={{
                                color: blue[800],
                                "&.Mui-checked": {
                                  color: blue[600],
                                },
                              }}
                            />
                          }
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
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
            </form>
            <p className="pt-6 pb-3">
              Arady Have An Account ? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </center>
    </>
  );
};

export default SignUp;
