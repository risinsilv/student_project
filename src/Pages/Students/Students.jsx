import { Box, Button } from "@mui/material";
import "@fontsource/bebas-neue";
import Table from '../../Common/Table/Table'
import { useEffect, useState } from "react";
import instance from '../../Service/AxiosOrder';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


export default function Students() {

    const [students, setStudents] = useState(null)
    const navigate = useNavigate()
    const getAllStudent = () => {
        instance.get('/student/getAll', {})
            .then(function (response) {
                setStudents(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });

    }
    useEffect(() => {
        getAllStudent()
    }, []);
    const logOut = () => {
        localStorage.clear('token')
        navigate('/Login')

    }

    return (
        <>
            <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '40px', fontWeight: '400', display: 'flex', justifyContent: 'left', marginLeft: '40px', marginTop: '30px' }}>MY STUDENT</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '80vw', display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{ backgroundColor: '#F2BA1D', color: 'black', paddingX: '15px', height: '50px', fontSize: '30px', fontWeight: '600', fontFamily: 'bebas neue', border: '2px solid #F2BA1D', borderRadius: '30px' }} ><PersonAddIcon sx={{ fontSize: '35px', marginRight: '10px', marginBottom: '3px' }} /> ADD STUDENT</Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                {students != null ? (
                    <Box sx={{ width: '80vw', border: '5px solid black', borderRadius: '20px' }}>
                        <Box sx={{ padding: '30px' }}>

                            <Table data={students} />


                        </Box>


                    </Box>
                ) :
                    (
                        <Stack spacing={1}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '8rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width='13vw' height='13vw' />
                            <Skeleton variant="rectangular" width='80vw' height='15vh' />
                            <Skeleton variant="rounded" width='80vw' height='15vh' />
                        </Stack>
                    )}

            </Box>
            <Button
                sx={{
                    backgroundColor: '#F2BA1D',
                    color: 'black', height: '50px',
                    fontSize: '30px',
                    paddingX: '20px',
                    fontWeight: '700',
                    fontFamily: 'bebas neue',
                    border: '2px solid #F2BA1D',
                    borderRadius: '30px', position: 'fixed', bottom: '20px', left: '20px'
                }} onClick={logOut}><LogoutIcon
                    sx={{
                        fontSize: '35px',
                        marginRight: '10px',
                        marginBottom: '3px'
                    }} />LOG OUT
            </Button>
        </>


    )

}
