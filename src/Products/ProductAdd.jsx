import React from 'react'
import { Card, Col, Container } from 'react-bootstrap';
import { Header } from './../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import TataNexon from "./images/TataNexon.webp";
import { Row } from 'react-bootstrap';

const ProductAdd = () => {
  const fixedImageStyle = {
    height: '150px', // Adjust this value as needed
    objectFit: 'contain',
  };
  return (
    <>
    <NavigationBar/>
    <Container>
        <Header text="Welcome to Add Product Here "></Header>
        <Row>
          <Col>
          <Card>
            <Card.Img src={TataNexon} alt="Goutam Hukeri" style={fixedImageStyle} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>

    </Container>
    </>
  )
}

export default ProductAdd

