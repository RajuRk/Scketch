import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Landscape from '../img/testimonials/Landscape.png';
import Ravi from '../img/testimonials/Ravi.png';
import Gautham from '../img/testimonials/Gautham.png';
import FP from '../img/testimonials/FP.png';
import UF from '../img/testimonials/UF.png';
import Eganesha from '../img/testimonials/eganesha.png';
import {FaQuoteRight} from "react-icons/fa";

const testimonials = () => {
  return (
    <section classname="testimonials">
      <Container>
        <Row style={{margin: "30px 0px"}}>
          <div className="title text-center" style={{padding: "30px 0px"}}>
            <h4>Client Testimonials</h4>
          </div>
          <Col md={4} lg={4} className="testimonialCol">
            <div class="testimonial-sec text-center">
              <FaQuoteRight className="testimonialSVG"/>
              <div className="testimonial-desc">
                <p> Our collaboration with Scketch has been absolutely stunning, and their product delivery management is done with utmost professionalism and precision. </p>
              </div>
              <div className="testimonial-img">
                <img src={Landscape} alt=""/>
              </div>
              <div className="testimonial-name-position">
                <h4>Matias Similä</h4>
                <p>Sales Director, United Finance</p>
                <img src={UF} alt=""/>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} className="testimonialCol">
            <div class="testimonial-sec text-center">
              <FaQuoteRight className="testimonialSVG"/>
              <div className="testimonial-desc">
                <p>Our collaboration with Scketch has been absolutely stunning, and their product delivery management is done with utmost professionalism and precision.</p>
              </div>
              <div className="testimonial-img">
                <img src={Ravi} alt=""/>
              </div>
              <div className="testimonial-name-position">
                <h4>Ravikanth Eranki</h4>
                <p>Chief Spiritual Partner, eganesha.in</p>
                <img src={Eganesha} alt=""/>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} className="testimonialCol">
            <div class="testimonial-sec text-center">
              <FaQuoteRight className="testimonialSVG"/>
              <div className="testimonial-desc">
                <p>Our collaboration with Scketch has been absolutely stunning, and their product delivery management is done with utmost professionalism and precision.</p>
              </div>
              <div className="testimonial-img">
                <img src={Gautham} alt=""/>
              </div>
              <div className="testimonial-name-position">
                <h4>Gautham Kumar</h4>
                <p>CEO, Foxpers</p>
                <img src={FP} alt=""/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default testimonials
