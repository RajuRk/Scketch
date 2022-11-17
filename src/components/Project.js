import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ProjectImg from '../img/project.png'

const Project = () => {
  return (
    <section className='Project'>
       <Container>
          <Row style={{padding: "30px 0px"}}>
            <Col md={5} lg={5}>
                <div className='projectImg text-center'>
                    <img src={ProjectImg} alt=""/>
                </div>
            </Col>
            <Col md={7} lg={7} className="projectCol">
                <div className="projectDesc text-center">
                    <h2>Let's Discuss Your Project</h2>
                    <p style={{color: "#ffffff"}}>Choose an ideal tech partner who can turn your idea into a tech solution</p>
                    <button>Start</button>
                </div>
            </Col>
          </Row>
       </Container>
    </section>
  )
}

export default Project
