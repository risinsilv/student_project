import { TextField } from "@mui/material"

export default function Textfiled(props){

    return(
        <TextField id="outlined-basic" label={props.label} variant="outlined" sx={{
            width: `${props.width}`,
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
            onChange={(e) => {props.function(e.target.value)}}
        />

    )
 }
 