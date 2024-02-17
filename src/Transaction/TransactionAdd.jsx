import React from 'react'
import { NavigationBar } from './../components/NavigationBar';
import { Container, Row } from 'react-bootstrap';
import { Header } from '../components/Header';

const TransactionAdd = () => {
  return (
    <>
    <NavigationBar/>
    <Container>
       <Header text="Welcome to Transaction Page"></Header>
       
    </Container>
    </>
  )
}

export default TransactionAdd
