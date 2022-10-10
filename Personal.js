import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Bar from './Curriculum/Bar'
import About from './Curriculum/About'
import Default from './Curriculum/Default'
import Profile from './Curriculum/Profile'
import Skills from './Curriculum/Skills'
const Personal = () => {
    return (

        <
        Router >
        <
        div >
        <
        Bar / >
        <
        /div> <
        Routes >
        <
        Route path = "/"
        exact element = { < Profile / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/skills"
        element = { < Skills / > }
        /> {
            /* <Route path=':bullmastiff'
                                        element={< Bullmastiff />} />
                                </Route > */
        } <
        Route path = '*'
        element = { < Default / > }
        /> <
        /Routes> <
        /Router>
    )
}

export default Personal