import React from 'react';
import "./yt.css";
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
const ytm = () =>
{
    return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
       
      >
       
        
        
        <Nav.Link href="#" disabled>
         
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     <iframe className="yyt"
       src="https://www.youtube.com/embed/73oYi6r_KdU?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA"
        title="YouTube video player" 
     
       frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >

         </iframe>
         <h5>Sia - Unstoppable (Lyrics)</h5>
         <p className="si">1 415 918 vues20 nov. 2021</p>
         <tr>Sia, Unstoppable, lyrics, sia Unstoppable, Unstoppable sia, Unstoppable lyrics</tr>
         <tr>sia lyrics Unstoppable, Unstoppable lyrics sia, Unstoppable sia lyrics, lyrics sia Unstoppable</tr>
         <tr> lyrics Unstoppable sia.</tr>
         <div>
         <iframe className="justin" src="https://www.youtube.com/embed/0eDJ0Tla0ac?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA" 
         title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
         </div>
         <div>
         <iframe className="criminal" src="https://www.youtube.com/embed/g8DsRj-2SmU?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA" 
         title="YouTube video player" 
         frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
          <div>
          <iframe className="cheb" src="https://www.youtube.com/embed/va4GQM-BKMU?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA"
           title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <div>
            <iframe className="hiya" src="https://www.youtube.com/embed/rAYdqUqQz_k"
             title="YouTube video player"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
            </div>
          </div>
         </div>
    </div>
    
    
    )
}
export default ytm;