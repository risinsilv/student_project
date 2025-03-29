import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Textfiled from '../Textfield';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs(props) {



    return (
        <React.Fragment >
            <BootstrapDialog
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '60vw',
                        height:'450px',
                        maxWidth: '90%',
                        minWidth: '500px'
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '30px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '88%' }}>
                        <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontSize: '40px', fontWeight: '400', display: 'flex' }}>ADD Student</Box>
                        <IconButton
                            aria-label="close"
                            onClick={props.handleClose}
                            sx={{
                                color: 'white',
                                backgroundColor: 'black',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <Box sx={{ marginTop: '50px', width: '40%' }}>
                        <Textfiled label='Name' width='100%' function={props.sname} />
                    </Box>
                    <Box sx={{ marginTop: '50px', width: '40%' }}>
                        <Textfiled label='Adderss' width='100%' function={props.saddress}/>
                    </Box>
                    <Box sx={{ marginTop: '50px', width: '40%' }}>
                        <Textfiled label='Age' width='100%' function={props.sage}/>
                    </Box>
                    <Box sx={{ marginTop: '50px', width: '40%' }}>
                        <Textfiled label='Contact' width='100%' function={props.scontact}/>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '60vw', marginTop: '30px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'end', width: '88%' }}>
                        <Button
                            sx={{
                                backgroundColor: '#F2BA1D',
                                color: 'black', height: '50px',
                                fontSize: '30px',
                                paddingX: '20px',
                                fontWeight: '700',
                                fontFamily: 'bebas neue',
                                border: '2px solid #F2BA1D',
                                borderRadius: '30px'
                            }} onClick={props.function1}>SAVE
                        </Button>

                    </Box>
                </Box>


            </BootstrapDialog>
        </React.Fragment>
    );
}
