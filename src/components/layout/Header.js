import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header style = {headerStyle} >
                <h1>List-To-Do</h1>
                <Link style = {headerStyle} to = '/' >Home</Link> |
                <Link style = {headerStyle} to = '/about'>About</Link>
            </header>
        </div>
    )
}
const headerStyle = {
    background : '#212F3C',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    border: 'none',
    fontSize: '20px',
    fontFamily: 'cursive'
    
}
// export default Header;
