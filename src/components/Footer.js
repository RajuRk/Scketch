import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import FooterRobots from '../img/footer_robots.png';
import FooterRobots2 from '../img/footer_robots2.png';
import FooterRobots3 from '../img/footer_robots3.png';
import FooterCopyRight from '../img/copyright.png';

const Footer = () => {
  return (
    <footer>
       <Container>
        <Row style={{marginBottom: "45px"}}>
            <div className='icons'>
                <ul>
                    <li><FaFacebookF className='hover-fx'/></li>
                    <li><FaTwitter className='hover-fx'/></li>
                    <li><FaInstagram className='hover-fx'/></li>
                    <li><FaLinkedinIn className='hover-fx'/></li>
                </ul>
            </div>
        </Row>
        <Row style={{marginBottom: "45px"}}>
            <div className='footer-menu'>
                <ul>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Insights</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </Row>
        <Row>
            <div className='footerImg'>
               <ul>
                <li><img src={FooterRobots} alt=""/></li>
                <li><img src={FooterRobots2} alt=""/></li>
                <li><img src={FooterRobots3} alt=""/></li>
               </ul>
               <h5 className="FooterPara">Made by People and Robots</h5>
               <p className='copyrightlogo'><img src={FooterCopyRight} alt=""/> All Rights Reserved</p>
            </div>
        </Row>
       </Container>
    </footer>
  )
}

export default Footer
