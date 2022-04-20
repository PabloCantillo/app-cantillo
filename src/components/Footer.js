import React from 'react'
import './Footer.css';
import { Button, ListGroup } from 'react-bootstrap';
import {AiOutlineFacebook} from "react-icons/ai";
import {ImWhatsapp} from "react-icons/im";
import {FiMail} from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return(
        <footer>
           <div className='color1'>
               <div className='redSocial'>
                  <h2><GrInstagram/> optica_cantillo</h2>
                  <p>Visitanos en nuestras redes</p>
                  <Button variant="light" size="lg" active><a href='https://www.instagram.com/' rel="noopener noreferrer" target="_blank">Siguenos</a></Button>
               </div>
                <div>
                    <h3><b>Nuestras redes</b></h3>
                    <ListGroup horizontal>
                        <ListGroup.Item><a href=''><AiOutlineFacebook/></a></ListGroup.Item>
                        <ListGroup.Item><a href=''><ImWhatsapp/></a></ListGroup.Item>
                        <ListGroup.Item><a href=''><FiMail/></a></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </footer>
    )
}

export default Footer