import React, { useState }from 'react'
import './TakeNoteThree.css';
import { grey } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from '../ColorPopper/ColorPopper';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { archiveNotes } from '../../services/dataService';
import { deleteNotes } from '../../services/dataService';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { updateNotes } from '../../services/dataService';
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

    const takingTitle = (event) => {
        setUserInfo(prevState => ({...prevState, title: event.target.value}))
    }

    const takingDescription = (event) => {
        setUserInfo(prevState => ({...prevState, description: event.target.value}))
    }

    const saveUpdates = () => {
        updateNotes(userInfo).then((response) => {
            console.log(response)
            props.autoRefreshing()
        }).catch((error) => { console.log(error) })
        setOpen(false);
        //props.autoRefreshing()
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
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Box className="MainContainerTwo" style={{backgroundColor: props.note.color, top: 200}}>
                        <Box className="TitleRowTwo">
                            <Box className="TitleTextTwo">
                                <InputBase id="filled-search" 
                                //placeholder="Title" 
                                onChange={takingTitle} 
                                defaultValue={userInfo.title}
                                />
                            </Box>
                            <Box className="PinIconTwo">
                                <PushPinOutlinedIcon fontSize='medium' sx={{ color: grey[600] }} />
                            </Box>
                        </Box>
                        <Box className="TakeNoteTextTwo">
                            <InputBase id="filled-search" 
                            //placeholder="Take a note..." 
                            onChange={takingDescription} 
                            defaultValue={userInfo.description}
                            />
                        </Box>
                        <Box className="TakeNoteIconsTwo">
                            <Box className="IconsTwo">
                                <AddAlertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                                <PersonAddAltOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                                <PaletteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                                <ImageOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                                <ArchiveOutlinedIcon fontSize='small' sx={{ color: grey[800] }}/>
                                <MoreVertOutlinedIcon fontSize='small' sx={{ color: grey[800] }} />
                                <UndoOutlinedIcon fontSize='small' sx={{ color: grey[600] }} />
                                <RedoOutlinedIcon fontSize='small' sx={{ color: grey[600] }} />
                            </Box>
                            <Box className="CloseText">
                                <Button variant="text" 
                                onClick={saveUpdates}
                                >close</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default TakeNoteThree
