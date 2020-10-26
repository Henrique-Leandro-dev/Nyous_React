import React from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import {Carousel, Jumbotron, Button, Container, Row, Col, Card} from 'react-bootstrap'

const Home = () => {
    return(
        <div>
            <Menu />
            <Carousel>
                <Carousel.Item>
                <img
      className="d-block w-100"
      src="https://www.ilhabela.com.br/wp-content/uploads/2016/01/eventos-em-ilhabela.jpg"
      alt="First slide"
    />  
                </Carousel.Item> 
                <Carousel.Item>
                <img
      className="d-block w-100"
      src="https://www.ilhabela.com.br/wp-content/uploads/2020/09/capa-casamento-em-ilhabela.jpg"
      alt="First slide"
    />  
                </Carousel.Item>
            </Carousel>

            <Jumbotron className="text-center">
                <h1>Diversos eventos em um único local</h1>
                <p>
                    Encontre eventos nos mais diversos segmentos de forma rápida
                </p>
                <p>
                    <Button style={{marginRight : '70px'}} variant="primary" href='/login'>Login</Button> 
                    <Button variant="success" href='/cadastrar'>Cadastrar</Button>
                    
                </p>
           </Jumbotron>

            <Container>
                <Row>
         <Col>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://s2.glbimg.com/kWVtt_LEm4Mmeitrt5mh19fgjx8=/0x105:625x457/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/j/9/t95cQVRBymUnON1awGLw/home-office-5-unsplash-zakaria-zayane.jpeg " />
        <Card.Body>
            <Card.Title>Tecnologia</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>         
         </Col>
        
         <Col>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://s2.glbimg.com/hvPYEH9Y2zeegDPijhXWdl1W0kE=/0x0:2055x1156/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/P/P/vzNupqRc67QXPXEm7ADw/elg3a-yxgaa1y-e.jpg " />
        <Card.Body>
            <Card.Title>Esporte</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>        
         </Col>

         <Col>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://s2.glbimg.com/EWFKyO9bweO5ZQrjKRlrvDFEa6c=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/2/A/GtDgzxTVSjs39BiW9LaQ/bbc-2310-8.jpg " />
        <Card.Body>
            <Card.Title>Viagem</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>         
         </Col>
                </Row>
            </Container>

            <Rodape />
        </div>
    )
}

export default Home;
