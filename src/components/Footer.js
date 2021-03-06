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
                  <Button variant="light" size="lg" active><a href='https://www.instagram.com/' rel="noopener noreferrer" target="_blank">Instagram</a></Button>
                  <Button variant="light" size="lg" active><a href='https://www.facebook.com/' rel="noopener noreferrer" target="_blank">Facebook</a></Button>
                  <Button variant="light" size="lg" active><a href='https://www.whatsapp.com/' rel="noopener noreferrer" target="_blank">Whatsapp</a></Button>
                  <Button variant="light" size="lg" active><a href='https://www.gmail.com/' rel="noopener noreferrer" target="_blank">Gmail</a></Button>
               </div>
            </div>
        </footer>
    )
}

export default Footer