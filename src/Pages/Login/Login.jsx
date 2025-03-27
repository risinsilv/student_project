import { Box, colors, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import loginback from '../../assets/loginback.png'
import "@fontsource/bebas-neue"; // Defaults to weight 400
import "@fontsource/bebas-neue/400.css"; // Specify weight
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import instance from '../../Service/AxiosOrder';
import Textfield from "../../Common/Textfield";
import Passwordfield from "../../Common/Passwordfield";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Login() {
    const [emailT, setEmail] = useState('');
    const [passwordT, setPassword] = useState('');


    const [nameT,setNameT] = useState('')
    const [repassword,setRepassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const [register, setRegister] = useState(false);

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        if (newAlignment === '1') {
            setRegister(false);
        } else if (newAlignment === '0') {
            setRegister(true);
        }
    };


    const login = () => {
        instance.post('/login', {
            email: emailT,
            password: passwordT
        })
            .then(function (response) {
                localStorage.setItem('token', response.data.token)
                console.log(response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });

    }
    const reg = () => {
        instance.post('/login', {
            name: nameT,
            email: emailT,
            password: passwordT
        })
            .then(function (response) {
                console.log(response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        
    }

    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', backgroundImage: `url(${loginback})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#818589', '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darkens the background
                zIndex: 1
            }, '& > *': { zIndex: 2 }
        }}>
            <Box sx={{ backgroundColor: 'white', width: '60%', height: '740px', borderRadius: '30px', display: 'flex', border: '5px solid white' }}>
                <Box sx={{ width: '50%', height: '100%', backgroundColor: 'white', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', backgroundImage: `url(${loginback})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                </Box>
                <Box sx={{ width: '50%', marginTop: '50px' }}>
                    <Box display={{ display: 'flex', justifyContent: 'center' }}>
                        <ToggleButtonGroup
                            color=""
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="1" sx={{
                                width: '150px', marginRight: '5px', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', border: '2px solid #F2BA1D', fontFamily: 'bebas neue', color: 'black', fontSize: '35px', height: '50px',
                                '&.Mui-selected': {
                                    backgroundColor: '#F2BA1D', // Background when selected
                                    color: 'white' // Change text color if needed
                                }

                            }}

                            >Login</ToggleButton>
                            <ToggleButton value="0" sx={{
                                width: '150px', '&:not(:first-of-type)': { borderLeft: '2px solid #F2BA1D' }, marginLeft: '5px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', border: '2px solid #F2BA1D', fontFamily: 'bebas neue', color: 'black', fontSize: '35px', height: '50px',
                                '&.Mui-selected': {
                                    backgroundColor: '#F2BA1D', // Background when selected
                                    color: 'white' // Change text color if needed
                                }
                            }}

                            >Register</ToggleButton>
                        </ToggleButtonGroup>



                    </Box>
                    <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '64px', fontWeight: '400', display: 'flex', justifyContent: 'left', marginTop: '50px', marginLeft: '50px' }}>WELCOME BACK</Box>
                    <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '30px', fontWeight: '400', display: 'flex', justifyContent: 'left', marginLeft: '50px', marginTop: "-20px" }}>ACPT Institute</Box>
                    {!register && (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                                <Textfield label='Email' function={setEmail} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                                <Passwordfield function={setPassword} label='Password' />
                            </Box>
                        </>
                    )}
                    {register && (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                <Textfield label='Name' function={setNameT} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Textfield label='Email' function={setEmail} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Passwordfield function={setPassword} label='Password' />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                                <Passwordfield function={setRepassword} label='Re enter password' />
                            </Box>


                        </>
                    )}
                    {!register && (
                        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '110px' }}>
                            <Button sx={{ backgroundColor: 'transparent', color: 'black', height: '50px', fontSize: '20px', width: '100px', fontWeight: '700', fontFamily: 'bebas neue', border: '2px solid #F2BA1D', marginRight: '10%', borderRadius: '30px' }} onClick={login}>Log in</Button>
                        </Box>
                    )}
                    {register && (
                        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '30px' }}>
                            <Button sx={{ backgroundColor: 'transparent', color: 'black', height: '50px', fontSize: '20px', width: '100px', fontWeight: '700', fontFamily: 'bebas neue', border: '2px solid #F2BA1D', marginRight: '10%', borderRadius: '30px' }} onClick={reg}>Register</Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )

}