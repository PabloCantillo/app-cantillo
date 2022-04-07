import React from 'react'
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({productosInicial}) => {

  return (
      
          <Card className="cardList" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={productosInicial.productos.img} />
              <Card.Body>
                <Card.Title>{productosInicial.productos.name}</Card.Title>
                <Card.Text>
                  ${productosInicial.productos.precio}
                </Card.Text>
                <Link to={`/item/${productosInicial.id}`}><Button variant="success">Ver mas</Button></Link>{' '}
              </Card.Body>
          </Card>
      
  )
}

export default Item;
