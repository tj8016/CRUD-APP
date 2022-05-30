import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand mx-auto" to="/">CRUD APP</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
