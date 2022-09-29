import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary border border-dark">

                <div class="container">
                    <h2 class="mycl1 ">Wellcome You All In React Session</h2>
                    <Link to="/Buttons" class="btn btn-primary btn-sm border border-dark rounded">Buttons</Link>
                    <Link to="/Cards" class="btn btn-primary btn-sm border border-dark rounded">Cards</Link>
                    <Link to="/InputData" class="btn btn-primary btn-sm border border-dark rounded">InputData</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar
