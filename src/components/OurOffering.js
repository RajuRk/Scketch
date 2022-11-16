import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import InnovationImg from '../img/Digital_build_01.png';

const OurOffering = () => {
  return (
    <section className="offering">
      <Container>
         <Row style={{margin: "30px 0px"}}>
           <div className="title text-center">
              <h4>Our Offerings</h4>
           </div>
           <Col md={8} lg={8}>
              <div className="offer-row-col">
                <div className="offer-img">
                   <img src={InnovationImg} alt=""/>
                </div>
                <div className="offer-desc">
                    <h3>Digital Build: <strong>Innovation</strong></h3>
                    <p>Through the Digital Build process, we build your digital assets from scratch and develop your embryonic ideas into a robust brand.</p>
                </div>
              </div>
           </Col>
           <Col md={4} lg={4}></Col>
           <Col md={4} lg={4}></Col>
           <Col md={8} lg={8}></Col>
         </Row> 
      </Container>
    </section>
  )
}

export default OurOffering
