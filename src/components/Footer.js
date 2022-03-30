import React from 'react'
import './Footer.css';
import { Button, ListGroup } from 'react-bootstrap';
import {AiOutlineFacebook} from "react-icons/ai";
import {ImWhatsapp} from "react-icons/im";
import {FiMail} from "react-icons/fi";
import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
import {SiAmericanexpress} from "react-icons/si";
import {FaCcPaypal} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return(
        <footer>
           <div className='color1'>
               <div className='redSocial'>
                  <h2><GrInstagram/> optica_cantillo</h2>
                  <p>Visitanos en Instagram</p>
                  <Button variant="secondary" size="lg" active>Seguinos</Button>
               </div>
            </div>
            <div className='list'>
                <h3><b>Nuestras redes</b></h3>
               <ListGroup horizontal>
                 <ListGroup.Item><a href=''><AiOutlineFacebook/></a></ListGroup.Item>
                 <ListGroup.Item><a href=''><ImWhatsapp/></a></ListGroup.Item>
                 <ListGroup.Item><a href=''><FiMail/></a></ListGroup.Item>
               </ListGroup>
            </div>
            <div className='pago'>
                <h3><b>Metodos de pago:</b></h3>
                <ListGroup horizontal>
                 <ListGroup.Item><a href=''><FaCcVisa/></a></ListGroup.Item>
                 <ListGroup.Item><a href=''><FaCcMastercard/></a></ListGroup.Item>
                 <ListGroup.Item><a href=''><SiAmericanexpress/></a></ListGroup.Item>
                 <ListGroup.Item><a href=''><FaCcPaypal/></a></ListGroup.Item>
               </ListGroup>
            </div>
        </footer>
    )
}

export default Footer