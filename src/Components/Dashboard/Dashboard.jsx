import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne';
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo';
import TakeNoteThree from '../TakeNoteThree/TakeNoteThree';
import { getNotesList } from '../../services/dataService';
// import { Drawer, Grid } from '@mui/material';
import Drawer1 from '../Drawer/drawer';
import Box from '@mui/material/Box';

function Dashboard() {

    const [toggle, setToggle] = useState(false)
    const [notesList, setNotesList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [currentNoteOption, setCurrentNoteOption] = useState('Notes')

    const listenToDrawer = (noteOptionListener) => {
        setCurrentNoteOption(noteOptionListener)
    }

    const listenToTakeNoteOne = () => {
        setToggle(true)
    }

    const listenToTakeNoteTwo = () => {
        setToggle(false)
    }

    const getNote = () => {
        getNotesList().then((response) => {
            let filterNotes = []
            if (currentNoteOption === 'Notes') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (currentNoteOption === 'Archive') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === true && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (currentNoteOption === 'Trash') {
                filterNotes = response.data.data.data.filter((notes) => {
                    if (notes.isArchived === false && notes.isDeleted === true) {
                        return notes
                    }
                })
            }
            console.log(response);
            setNotesList(filterNotes)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getNote()
    }, [currentNoteOption])

    // console.log(notesList, 'printed')

    const autoRefreshing = () => {
        getNote()
    }

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    return (
        <Box className='DashboardMainContainer'>
            <Header listenToHeader={listenToHeader} />
            <Drawer1 drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} />
            <Box className='TakeNoteTwoContainer'>
                {
                    toggle ? <TakeNoteTwo listenToTakeNoteTwo={listenToTakeNoteTwo} autoRefreshing={autoRefreshing} /> : <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} />
                }
            </Box>
            <Box className='NotesContainer' container >
                {
                    notesList.map((note) => (<TakeNoteThree note={note}
                        autoRefreshing={autoRefreshing} />))
                }
            </Box>
        </Box>
    )
}

export default Dashboard