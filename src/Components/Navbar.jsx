import React from 'react'
import image from './Images/01.jpg';
import './Navbar.css';


const Navbar = () => {

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <div className='image'>
                        <img src={image} />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">To-do-App</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Calculator</a>
                            </li>


                        </ul>

                        <form className="d-flex" role="search">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>

                        <button type="button" className="btn btn-secondary mx-3">
                            <a href='/Login'>Login</a>
                        </button>
                        <button type="button" className="btn btn-secondary mr-3">
                            <a href='/Signup'>Sign Up</a>
                        </button>
                    </div>

                </div>

            </nav>

        </div>

    )
}

export default Navbar