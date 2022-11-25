import React, { useState }from 'react'
import './TakeNoteThree.css';
import { grey } from '@mui/material/colors';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from '../ColorPopper/ColorPopper';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { archiveNotes } from '../../services/dataService';
import { deleteNotes } from '../../services/dataService';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
// import { Paper } from '@mui/material';

function TakeNoteThree(props) {
    //console.log(props, 'Props printed')

    const [userInfo, setUserInfo] = useState({ noteId: "", title: "", description: "" })

    const [open, setOpen] = useState(false);
    const handleOpen = (userInfo) => { setOpen(true); 
        setUserInfo({ noteId: userInfo.id, 
            title: userInfo.title, 
            description: userInfo.description }) };
    const handleClose = () => setOpen(false);

    const listenToColorUpdate = () => {
        props.autoRefreshing()
    }

    const updateArchive = (id) => {
        let archiveObj = { noteIdList: [id], isArchived: true }
        archiveNotes(archiveObj).then((response) => {
            console.log(response);
            props.autoRefreshing()
        }).catch((error) => console.log(error))
    }

    const updateDelete = (id) => {
        let deletedObj = { noteIdList: [id], isDeleted: true }
        deleteNotes(deletedObj).then((response) => {
            console.log(response);
            props.autoRefreshing()
        }).catch((error) => console.log(error))
    }

    return (
        <Box className='mainBox'>
            <Box className="MainContainerThree" style={{ backgroundColor: props.note.color }}>
                <Box onClick={() => handleOpen(props.note)}>
                    <Box className="TitleRowThree">
                        <Box className="TitleTextThree">
                            {/* <InputBase id="TitleInput" 
                            // placeholder={props.note.title} 
                            defaultValue={props.note.title}
                            /> */}
                            {props.note.title}
                        </Box>
                        <Box className="PinIconThree">
                            <PushPinOutlinedIcon fontSize='medium' sx={{ color: grey[600] }} />
                        </Box>
                    </Box>
                    <Box className="TakeNoteTextThree">
                        {/* <InputBase id="DescriptionInput" 
                        //placeholder={props.note.description} 
                        defaultValue={props.note.description}
                        /> */}
                        {props.note.description}
                    </Box>
                </Box>

                <Box className="IconsThree">
                    <AddAlertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                    <PersonAddAltOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                    {/* <PaletteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} /> */}
                    <ColorPopper id={props.note.id} action="update" listenToColorUpdate={listenToColorUpdate}
                    // autoRefreshing = {props.autoRefreshing()}
                    />
                    {/* <ImageOutlinedIcon fontSize='small' sx={{ color: grey[800] }} /> */}
                    <DeleteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} onClick={() => updateDelete(props.note.id)} />
                    <ArchiveOutlinedIcon fontSize='small' sx={{ color: grey[800] }} onClick={() => updateArchive(props.note.id)} />
                    <MoreVertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                </Box>
            </Box>
            
        </Box>
    )
}

export default TakeNoteThree
