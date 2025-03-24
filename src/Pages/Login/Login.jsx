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


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Login() {
    const [emailT, setEmail] = useState('');
    const [passwordT, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    const getdata = () => {
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
                <Box sx={{ width: '50%',marginTop:'50px' }}>
                    <Box display={{ display: 'flex', justifyContent: 'center' }}>
                        <ToggleButtonGroup
                            color=""
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"

                        >
                            <ToggleButton value="web" sx={{
                                width: '150px', marginRight: '5px', borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', border: '2px solid #F2BA1D', fontFamily: 'bebas neue', color: 'black', fontSize: '35px', height: '50px' ,
                                '&.Mui-selected': {
                                    backgroundColor: '#F2BA1D', // Background when selected
                                    color: 'white' // Change text color if needed
                                }
                            }}>Login</ToggleButton>
                            <ToggleButton value="ios" sx={{
                                width: '150px', '&:not(:first-of-type)': { borderLeft: '2px solid #F2BA1D' }, marginLeft: '5px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', border: '2px solid #F2BA1D', fontFamily: 'bebas neue', color: 'black', fontSize: '35px', height: '50px' ,
                                '&.Mui-selected': {
                                    backgroundColor: '#F2BA1D', // Background when selected
                                    color: 'white' // Change text color if needed
                                }
                            }}>Register</ToggleButton>
                        </ToggleButtonGroup>

                    </Box>
                    <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '64px', fontWeight: '400', display: 'flex', justifyContent: 'left', marginTop: '50px', marginLeft: '50px' }}>WELCOME BACK</Box>
                    <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '30px', fontWeight: '400', display: 'flex', justifyContent: 'left', marginLeft: '50px', marginTop: "-20px" }}>ACPT Institute</Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
                            width: '80%',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'black',
                                    borderRadius: '10px',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black',
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                            },
                        }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <FormControl sx={{
                            m: 1, width: '80%',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'black',
                                    borderRadius: '10px',
                                    backgroundColor: 'transparent',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                },
                                '& .MuiInputLabel-root': {
                                color: 'black',
                            },
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                            },
                        }} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '60px' }}>
                        <Button sx={{ backgroundColor: 'transparent', color: 'black', height: '50px', fontSize: '20px', width: '100px', fontWeight: '700', fontFamily: 'bebas neue', border: '2px solid #F2BA1D', marginRight: '10%', borderRadius: '30px' }} onClick={getdata}>Log in</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}