import React from 'react'
import { Header } from '../components/Header'
import { Container } from 'react-bootstrap'
import { NavigationBar } from '../components/NavigationBar'

const ProductEdit = () => {
  return (
    <>
  <NavigationBar/>
   <Container>
    <Header text="Welcome To Edit Page"></Header>
   </Container>
   </> 
  )
}

export default ProductEdit
