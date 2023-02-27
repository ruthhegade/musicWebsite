import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            {/* <Navbar bg="dark" variant="dark" className='py-3'>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2 hover:text-xl">User Registration</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2 hover:text-xl">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light hover:text-xl">Features</NavLink>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    )
}

export default Header