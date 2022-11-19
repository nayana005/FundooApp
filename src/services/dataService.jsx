import axios from "axios";

const headerConfig = {
    headers: {Authorization: localStorage.getItem('token')}
}

export const getNotesList = () => {
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)

    return response;
}

export const postNote = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', noteObj, headerConfig)

    return response;
}

export const changeColorNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', noteObj, headerConfig)

    return response;
}

export const archiveNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', noteObj, headerConfig)

    return response;
}

export const deleteNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', noteObj, headerConfig)

    return response;
}

export const updateNotes = (noteObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', noteObj, headerConfig)

    return response;
}