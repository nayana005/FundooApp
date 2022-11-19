import React from 'react'
import './TakeNoteOne.css';
import InputBase from '@mui/material/InputBase';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';

function TakeNoteOne(props) {

    const openTakeNoteTwo = () =>{
        props.listenToTakeNoteOne()
    }

    return (
        <Box onClick={openTakeNoteTwo}>
            <Box className="MainContainerOne" >
                <Box className="TakeNoteTextOne">
                    <InputBase id="filled-search1" placeholder="Take a note..." />
                </Box>
                
                <Box className="TakeNoteIconsOne">
                    <CheckBoxOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <BrushOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <ImageOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                </Box>
            </Box>

        </Box>
    )
}

export default TakeNoteOne