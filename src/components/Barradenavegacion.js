import React from 'react'
import CartWidget from './CartWidget';
import {Nav,Navbar,NavDropdown,Container} from "react-bootstrap";
import { Link } from "react-router-dom"

export const Barradenavegacion = () => {
  return (

    <header>
       <Navbar bg="primary" expand="lg" variant='light' >
           <Container fluid>
            <Link to="/"><Navbar.Brand>Óptica Cantillo</Navbar.Brand></Link>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
               <Nav
                 className="me-auto my-2 my-lg-0"
                 style={{ maxHeight: '100px' }}
                 navbarScroll>
                 <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/categoria/receta">Anteojos de receta</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/sol">Anteojos de sol</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/contacto">Lentes de Contacto</NavDropdown.Item>
                   </NavDropdown>
               </Nav>
                  <CartWidget/>
             </Navbar.Collapse>
           </Container>
       </Navbar>
    </header>
  )
}

export default Barradenavegacion ;
