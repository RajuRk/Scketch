import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Alexa from '../img/portfolio/Alexa.png'
import Ecommerce from '../img/portfolio/ecommerce.png'
import Foxpers from '../img/portfolio/Foxpers.png'
import Indialends from '../img/portfolio/indialends.png'
import Internal from '../img/portfolio/internal.png'
import NoQ from '../img/portfolio/NoQ.png'
import Panchatantra from '../img/portfolio/Panchatantra.png'
import Players_App from '../img/portfolio/Players_App.png'
import Scarlett from '../img/portfolio/Scarlett.png'

const Portfolio = () => {
  return (
    <section className='portfolio'>
       <Container>
          <Row style={{margin: "30px 0px"}}>
            <div className="title text-center">
              <h4>Work Portfolio</h4>
            </div>
          </Row>
          <Row>
             <Col>
               <div class="grid-wrapper">
                  <div className="big">
                    <div className='content-overlay'></div>
                    <img src={Ecommerce} alt="" />
                    {/* <div class="content-details fadeIn-top">
                       <h3>This is a title</h3>
                       <p>This is a short description</p>
                    </div> */}
                  </div>
                  <div>
                    <img src={Internal} alt=""/>
                  </div>
                  <div className="tall">
                    <img src={Players_App} alt=""/>
                  </div>
                  <div>
                    <img src={NoQ} alt=""/>
                  </div>
                  <div>
                    <img src={Panchatantra} alt=""/>
                  </div>
                  <div>
                    <img src={Foxpers} alt=""/>
                  </div>
                  <div className="wide">
                    <img src={Alexa} alt=""/>
                  </div>
                  <div className="wide">
                    <img src={Indialends} alt=""/>
                  </div>
                  <div className="wide">
                    <img src={Scarlett} alt=""/>
                  </div>
               </div>
             </Col>
          </Row>
       </Container>
    </section>
  )
}

export default Portfolio
