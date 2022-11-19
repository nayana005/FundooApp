import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css';
import { login } from "../../services/userService";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


const emailRegex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
    const navigate = useNavigate()
    const [userInput, setUserInput] = React.useState({ email: "", password: "" })
    const [rejexObj, setRejexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takeUsername = (event) => {
        // setUserInput({
        //     email: event.target.value
        // }) 

        setUserInput(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        //console.log(event.target.value)
    }

    const takePassword = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        //console.log(event.target.value)
    }

    const submit = () => {
        let emailTest = emailRegex.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)

        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter correct email"
            }))
        }
        else if (emailTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter correct Password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        console.log(userInput)

        if(emailTest === true && passwordTest === true){
            login(userInput).then((response) => {
                console.log(response); 
                localStorage.setItem("token",response.data.id)
                navigate('/dashboard')
            }).catch((error) => {console.log(error)})

            console.log("login successful")
        }
    }

    const newAccount = () => {
       navigate('/signup')
    }

    return (
        <Box className="MainContainer1">
            <Paper className="Box1">
                <Box className="Logo1">
                    <img id="Logo1" src="/googleLogo.png" alt="Logo" />
                </Box>

                <Box className="Heading1">
                    <span id="SignIn">Sign in</span>
                    <span id="Use">Use your Google Account</span>
                </Box>

                <Box className="UsernameContainer">
                    <Box className="UserBox">
                        <TextField fullWidth id="fullWidth" label="Email or Phone" variant="outlined" onChange={takeUsername} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} />
                    </Box>
                </Box>

                <Box className="ForgotUsername">
                    <Button variant="text" id='BlueText'>Forgot email?</Button>
                </Box>

                <Box className="PasswordContainer">
                    <Box className="UserBox">
                        <TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                    </Box>
                </Box>

                <Box className="ForgotUsername">
                    <Button variant="text" id='BlueText'>Forgot Password?</Button>
                </Box>

                <Box className="Text">
                    <span id="NotText">Not your computer? Use Guest mode to sign in privately.</span>
                </Box>

                <Box className="LearnMoreText">
                    <Button variant="text" id='BlueText'>Learn More</Button>
                </Box>

                <Box className="BoxBottom1">
                    <Box className="AddAccount">
                        <Button variant="text" id='BlueText' onClick={newAccount}>Create Account</Button>
                    </Box>
                    <Box className="Next">
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </Box>
                </Box>
            </Paper>
            <Box className="BottomText1">
                <Box className="Languages">
                    <span id="BottomText">English (United States)</span>
                </Box>
                <Box className="Menu1">
                    <span id="BottomText">Help</span>
                    <span id="BottomText">Privacy</span>
                    <span id="BottomText">Terms</span>
                </Box>
            </Box>
        </Box>
    )
}
export default Signin
