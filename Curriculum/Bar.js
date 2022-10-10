import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
const Bar = () => {
    return ( <
        div className = 'bar-container' >
        <
        div className = 'my-name' >
        <
        h1 style = {
            { fontWeight: 'bolder' } } >
        <
        Link className = 'link'
        to = '/' >
        Vincent Chibuzor Ajudua <
        /Link> <
        /h1> <
        /div> <
        div className = 'div-list-container' >
        <
        ul >
        <
        li >
        <
        Link className = 'link'
        to = '/' >
        Profile <
        /Link> <
        /li> <
        li >
        <
        Link className = 'link'
        to = '/about' >
        About <
        /Link> <
        /li> <
        li >
        <
        Link className = 'link'
        to = '/contact' >
        Contact <
        /Link> <
        /li> <
        li >
        <
        SocialIcon url = "https://github.com/042shakashaka" / >
        <
        /li> <
        /ul> <
        /div> <
        /div>
    )
}

export default Bar