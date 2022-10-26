import React, { useState } from 'react'
import { Courses } from './components/Courses'
import { Login } from './components/Login'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";


export const App = () => {


    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Courses' element={<Courses />} />
                    <Route path="*" element={<Navigate to={"/"}></Navigate>} />
                </Routes>
            </div >
        </Router>

    )
}
