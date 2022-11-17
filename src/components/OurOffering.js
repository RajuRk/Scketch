import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import InnovationImg from '../img/Digital_build_01.png';
import OptimizationImg from '../img/Digital_refresh_02.png';
import Desgin from '../img/Design.png';
import Development from '../img/Developments.png';
import Marketing from '../img/marketing.png'; 
import Consulting from '../img/Consulting.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const OurOffering = () => {
  return (
    <section className="offering">
      <Container>
         <Row style={{margin: "30px 0px"}}>
           <div className="title text-center">
              <h4>Our Offerings</h4>
           </div>
           <Col md={7} lg={7} style={{padding: "30px 0px"}}>
              <div className="offer-row-col">
                <div className="offer-img">
                  <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    <img src={InnovationImg} alt=""/>
                  </AnimationOnScroll>
                </div>
                <div className="offer-desc text-center">
                    <h3>Digital Build: <strong>Innovation</strong></h3>
                    <p>Through the Digital Build process, we build your digital assets from scratch and develop your embryonic ideas into a robust brand.</p>
                </div>
              </div>
           </Col>
           <Col md={5} lg={5}></Col>
           <Col md={5} lg={5}></Col>
           <Col md={7} lg={7}>
              <div className="offer-row-col">
                <div className="offer-desc text-center">
                    <h3>Digital Refresh: <strong>Optimization</strong></h3>
                    <p>We equip you to always be at the top of your game by building your digital presence across newer platforms like IoT, wearables, voice and gesture based interactions.</p>
                </div>
                <div className="offer-img">
                  <AnimationOnScroll animateIn="animate__fadeInRightBig">
                    <img src={OptimizationImg} alt=""/>
                  </AnimationOnScroll>
                </div>
              </div>
           </Col>
         </Row>
         <Row>
           <div className="services" style={{margin: '30px 0px'}}>
              <div className="serviceImg text-center">
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <img src={Desgin} alt=""/>
                </AnimationOnScroll> 
                 <p>Design</p>
              </div>
              <div className="serviceImg text-center">
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <img src={Development} alt=""/> 
                </AnimationOnScroll>
                <p>Development</p>
              </div>
              <div className="serviceImg text-center">
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <img src={Marketing} alt=""/>
                </AnimationOnScroll>
                <p>Digital Marketing</p>
              </div>
              <div className="serviceImg text-center">
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <img src={Consulting} alt=""/> 
                </AnimationOnScroll> 
                <p>Digital Consulting</p>
              </div>
           </div>
         </Row>
      </Container>
    </section>
  )
}

export default OurOffering
