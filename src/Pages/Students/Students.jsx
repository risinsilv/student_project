import { Backdrop, Box, Button, CircularProgress } from "@mui/material";
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
import StudentPopUp from "../../Common/StudentPopUp/StudentPopUp";
import Swal from 'sweetalert2'
import { HandymanSharp } from "@mui/icons-material";


export default function Students() {

    const [students, setStudents] = useState(null)
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const getAllStudent = () => {
        handleOpen()
        instance.get('/student/getAll', {})
            .then(function (response) {
                setStudents(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                handleClose()
            });

    }
    useEffect(() => {
        getAllStudent()
    }, []);
    const logOut = () => {
        localStorage.clear('token')
        navigate('/Login')

    }
    const [open1, setOpen1] = React.useState(false);

    const Open = () => {
        setOpen1(true);
    };
    const Close = () => {
        setOpen1(false);
    };

    const saveStudent = () => {
        handleOpen()
        instance.post('/student/save', {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then(function (response) {
                console.log(response);
                Close()
                sucess()
                getAllStudent()
            })
            .catch(function (error) {
                console.log(error);
                fail()
            })
            .finally(function () {
                handleClose()
            });
    }

    const deleteStudent = (id) =>{
        handleOpen()
        instance.delete(`/student/delete/${id}`, {
            
        })
            .then(function (response) {
                console.log(response);
                sucess()
                getAllStudent()
            })
            .catch(function (error) {
                console.log(error);
                fail()
            })
            .finally(function () {
                handleClose()
            });
    }
    const sucess = ()=> {

        Swal.fire({
            title: "Successfull",
            icon: "success",
            customClass: {
                title: 'swal-title', 
            },
        });

    }

    const fail = ()=> {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            customClass: {
                title: 'swal-title', 
            },
          });
    }


    return (
        <>
            <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '40px', fontWeight: '400', display: 'flex', justifyContent: 'left', marginLeft: '40px', marginTop: '30px' }}>MY STUDENT</Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '80vw', display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{ backgroundColor: '#F2BA1D', color: 'black', paddingX: '15px', height: '50px', fontSize: '30px', fontWeight: '600', fontFamily: 'bebas neue', border: '2px solid #F2BA1D', borderRadius: '30px' }} onClick={Open}><PersonAddIcon sx={{ fontSize: '35px', marginRight: '10px', marginBottom: '3px' }} /> ADD STUDENT</Button>
                    <StudentPopUp handleClickOpen={Open} handleClose={Close} open={open1} sname={setName} sage={setAge} saddress={setAddress} scontact={setContact} function1={saveStudent}/>
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.modal + 1 })}
                        open={open}
            
                    >
                        <CircularProgress sx={{ backgroundColor: '#F2BA1D', scale: '2', color: 'transparent' }} />
                    </Backdrop>

                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                {students != null ? (
                    <Box sx={{ width: '80vw', border: '5px solid black', borderRadius: '20px' }}>
                        <Box sx={{ padding: '30px' }}>

                            <Table data={students} sdelete={deleteStudent}/>


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
