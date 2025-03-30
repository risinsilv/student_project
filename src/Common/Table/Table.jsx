import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Define column headers
const columns = [
    { id: 'student_name', label: 'name' },
    { id: 'student_age', label: 'age' },
    { id: 'student_address', label: 'address' },
    { id: 'student_contact', label: 'contact' },
    { id: 'action', label: 'action' }
];

// 


export default function StickyHeadTable(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Paper sx={{ width: '80vw', overflow: 'hidden', boxShadow: 'none' }}>
                <TableContainer sx={{ height: '60vh' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow sx={{ backgroundColor: 'black' }}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align="center"
                                        sx={{
                                            backgroundColor: 'black',
                                            width: '20%',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            fontSize: '30px',
                                            borderTopLeftRadius: column.label === 'name' ? '10px' : '0px',
                                            borderBottomLeftRadius: column.label === 'name' ? '10px' : '0px',
                                            borderBottomRightRadius: column.label === 'action' ? '10px' : '0px',
                                            borderTopRightRadius: column.label === 'action' ? '10px' : '0px',
                                        }}

                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.mId} sx={{ backgroundColor: 'white' }} >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align="center"
                                                    sx={{
                                                        width: '20%',
                                                        height: '76px',
                                                        fontSize: '25px',
                                                        borderColor: '#F2BA1D', // Change the border color for each cell
                                                    }}
                                                >
                                                    {column.id === 'action' ? (
                                                        <>
                                                            <IconButton aria-label="delete" > 
                                                                <EditIcon sx={{ color: 'black' }} />
                                                            </IconButton>
                                                            <IconButton aria-label="delete" onClick={()=> props.sdelete(row.id)} >
                                                                <DeleteIcon sx={{ color: 'black' }} />
                                                            </IconButton>

                                                        </>


                                                    ) : (
                                                        value
                                                    )}
                                                    
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}

                />
            </Paper>
        </Box>
    );
}
