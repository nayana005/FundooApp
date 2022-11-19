import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from '../signin/signin'
import Signup from '../signup/signup'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo'



function Router1() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Signin/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route  path='/dashboard' element={<Dashboard/>}/>
                    <Route  path='/takeNoteOne' element={<TakeNoteOne/>}/>
                    <Route  path='/takeNoteTwo' element={<TakeNoteTwo/>}/>
                    <Route  path='/header' element={<Header/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Router1