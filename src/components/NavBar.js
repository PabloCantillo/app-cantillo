import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import {Nav,Navbar,NavDropdown,Container} from "react-bootstrap";

export const NavBar= () => {
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
                    <NavDropdown.Item as={Link} to="/categoria/sol">Sol</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/categoria/receta">Receta</NavDropdown.Item>
                   </NavDropdown>
                 </Nav>
                    <CartWidget/>
               </Navbar.Collapse>
             </Container>
         </Navbar>
      </header>
    )
}

export default NavBar;


