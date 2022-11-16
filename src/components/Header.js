import {Container, Row, Col} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import NavSection from './NavSection';
import Banner from '../img/scketch-banner.png';

const Header = () => {

  return (
    <section className="Header">
      <Container fluid>
          <Row>
            <NavSection/>
          </Row>
          <Row className="Header-row">
          <Col md={4} lg={4} className="title-col">
            <div class="header-title text-center">
              <h3>A Creative Studio that</h3>  
              <h1>
                <Typewriter
                  options={{
                    strings: ['Thinks Design'],
                    autoStart: true,
                    loop: true,
                }}/>
              </h1>
            </div>
          </Col>
            <Col md={8} lg={8}>
                <div className="banner-img text-center">
                    <img src={Banner} alt="" style={{maxWidth: "600px"}}/>
                </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Header