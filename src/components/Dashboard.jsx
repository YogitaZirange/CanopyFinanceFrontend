import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";
import { Carousel } from "react-bootstrap";
import ExampleCarouselImage from './ExampleCarouselImage/ExampleCarouselImage/ExampleCarouselImage.png'
import ExampleCarouselImage2 from './ExampleCarouselImage/ExampleCarouselImage/ExampleCarouselImage2.jpg'
import ExampleCarouselImage3 from './ExampleCarouselImage/ExampleCarouselImage/ExampleCarouselImage3.jpg'
import Investment from './images/Investment.jpg'
import Supply from './images/Supply.jpg'
import Buying from './images/Buying.jpg';
import { Button } from "bootstrap";

export function Dashboard() {
    return (
        <>
            <NavigationBar />

           <Container>
                <Header  text="Welcome to our Website "></Header>

                <h4 style={{textAlign: 'center'}}>We are developing a website for Role-based login,  CRUD operations, JWT authorization, and Payment Authentication </h4>
                
        {/* <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>"It's not orgatnications that are competing. It's the Supply Chains that are competing."</p>
                                                                               <p>-Woel Safwat,SCMAO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>"Supply chain is like nature it is all around us."</p>
          <p>-Dave Waters</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
            "Supply chain finance is not just a function, it's a competitive advantage"
          </p>
          <p>-John Galt</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <br></br>
   <h4 style={{textAlign: 'center'}}>Our Services</h4>
   <br></br>
   <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Buying} />
        <Card.Body>
          <Card.Title>Buying</Card.Title>
          <Card.Text>
          Buyers in supply chain finance purchase goods/services, negotiate terms, and use finance solutions to optimize cash flow and strengthen supplier ties. Engaging in finance initiatives streamlines transactions, enhances capital management, and fosters collaboration.
          </Card.Text>
          <Link to="/SignIn">
          <Button variant="primary">Buy</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Supply} />
        <Card.Body>
          <Card.Title>Supply</Card.Title>
          <Card.Text>
          Suppliers manage orders, inventory, and extend credit terms to buyers. Through finance tools, they optimize cash flow, reduce costs, and enhance liquidity. Engaging in supply chain finance strengthens buyer relationships and boosts overall efficiency and resilience.
          </Card.Text>
          <Link to="/SignIn">
          <Button variant="primary">Supply</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Investment} />
        <Card.Body>
          <Card.Title>Investment</Card.Title>
          <Card.Text>
          Investors provide capital to fund transactions within the supply chain network, aiming to earn returns while facilitating smoother operations, optimizing working capital, and mitigating risks.
          </Card.Text>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/SignIn">
          <Button variant="primary">Invest</Button>
          </Link>
        </Card.Body>
      </Card>
       {/* <Carousel id="carouselExample" fade>
        <Carousel.Item>
          <img src="images/img1.jpg" className="d-block w-100" style={{ height: '700px' }} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/img1.jpg" className="d-block w-100" style={{ height: '700px' }} alt="Second slide" />
        </Carousel.Item>
        
        {/* <Carousel.Item>
          <img src="images/offer3.jpeg" className="d-block w-100" style={{ height: '700px' }} alt="Third slide" />
        </Carousel.Item> */}
      {/* </Carousel> */}

      
  
    </Container>
        </>

    );
}