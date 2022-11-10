import React, { Fragment, useState } from 'react'
import { Courses } from './components/Courses'
import Tabla from './components/Tabla';
import { Login } from './components/Login'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

export const App = () => {

    const auth = true


    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Login />} />
                    {
                        auth &&
                        <Fragment>
                            <Route path='/Courses' element={<Courses />} />
                            <Route path='/Table' element={<Tabla />} />
                        </Fragment>

                    }
                    <Route path="*" element={<Navigate to={"/"}></Navigate>} />
                </Routes>
            </div >
        </Router>

    )
}
