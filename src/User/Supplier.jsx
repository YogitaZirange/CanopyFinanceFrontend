import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../components/Header'
import { NavigationBar } from '../components/NavigationBar'
import { RedirectIfLoggedIn } from '../components/RedirectIfLoggedIn'

function Supplier() {
  return (
    <>

    <NavigationBar/>
    <Container>
        <Header text="Welcome to Supplier DashBoard">
        </Header>
    </Container>
   
    </>
  )
}

export default Supplier
