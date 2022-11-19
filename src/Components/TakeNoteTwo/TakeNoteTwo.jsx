import React, { useState } from 'react'
import './TakeNoteTwo.css';
import { grey } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { postNote } from '../../services/dataService';
import ColorPopper from '../ColorPopper/ColorPopper';
import Box from '@mui/material/Box';

function TakeNoteTwo(props) {

    const [userInput, setUserInput] = useState({ title: '', description: '' , color: '', isArchived: false})

    const openTakeNoteOne = () => {
        props.listenToTakeNoteTwo()
        // console.log(userInput)
        postNote(userInput).then((response) => {
            console.log(response)
            props.autoRefreshing()
        }).catch((error) => console.log(error))
    }

    const takingTitle = (event) => {
        setUserInput(previousState => ({ ...previousState, title: event.target.value }))
    }

    const takingDescription = (event) => {
        setUserInput(previousState => ({ ...previousState, description: event.target.value }))
    }

    const listenToColorPopper = (color) => {
        setUserInput(previousState => ({ ...previousState, color: color }))
    }

    const archiveNote = () => {
        setUserInput(previousState => ({ ...previousState, isArchived: true }))
        console.log('Note Archived')
    }

    return (
        <Box>
            <Box className="MainContainerTwo" style={{backgroundColor: userInput.color}}>
                <Box className="TitleRowTwo">
                    <Box className="TitleTextTwo">
                        <InputBase id="TakeNoteTwoTitle" placeholder="Title" onChange={takingTitle} />
                    </Box>
                    <Box className="PinIconTwo">
                        <PushPinOutlinedIcon fontSize='medium' sx={{ color: grey[600] }} />
                    </Box>
                </Box>
                <Box className="TakeNoteTextTwo">
                    <InputBase id="TakeNoteTwoText" placeholder="Take a note..." onChange={takingDescription} />
                </Box>
                <Box className="TakeNoteIconsTwo">
                    <Box className="IconsTwo">
                        <AddAlertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        <PersonAddAltOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        {/* <PaletteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} /> */}
                        <ColorPopper listenToColorPopper = {listenToColorPopper} action = "create"/>
                        <ImageOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        <ArchiveOutlinedIcon fontSize='small' sx={{ color: grey[800] }}  onClick = {archiveNote}/>
                        <MoreVertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                        <UndoOutlinedIcon fontSize='small' sx={{ color: grey[600] }} />
                        <RedoOutlinedIcon fontSize='small' sx={{ color: grey[600] }} />
                    </Box>
                    <Box className="CloseText">
                        <Button variant="text" onClick={openTakeNoteOne}>close</Button>
                        {/* <span id='close'>Close</span> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TakeNoteTwo