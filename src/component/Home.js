import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import home from './home.jpg'
import project from './project.jpg'
import blog from './blog.jpg'
import { useNavigate, Link } from "react-router-dom";


export default function Home() {
  const nevigate = useNavigate();
  return (
    <>
      <Container fluid className='pt-3'>
        <Row >
          <Col xs lg={6} className='details bg-dark text-white'>
            <h3>
              Hello, I am Dhruvi Joshi
            </h3>
            <p>I likee web devlopment</p>
            <h5>Skills :</h5>
            <ul className='skills'>
              <div className='list'>
                <li>C</li>
                <li>Java</li>
                <li>Bootstarp</li>
                <li>HTML</li>
                <li>Java Script</li>
                <li>React Js</li>
                <li>Node Js</li>
              </div>
              <div className='list'>
                <li>Type Script</li>
                <li>Scraping</li>
                <li>Mongo DB</li>
                <li>My SQL</li>
                <li>Express Js</li>
                <li>Redux Js</li>
              </div>
            </ul>


          </Col>
          <Col xs lg={6} className='p-0'>
            <img className='homeImage' src={home} alt='Home' />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs lg={8} className='p-0'>
            <img className='projectImage' src={project} alt='Project' />
          </Col>
          <Col xs lg={4} className='project bg-dark text-white'>
            <h3>
              Projects
            </h3>
            <p>To see my created project</p>
            <Link className='btn btn-light' to={'/project'}>View Projects</Link>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs lg={4} className='project bg-dark text-white'>
            <h3>
              Blogs
            </h3>
            <p>To see my nlogs</p>
            <Link className='btn btn-light' to={'/project'}>View Blogs</Link>
          </Col>
          <Col xs lg={8} className='p-0'>
            <img className='projectImage' src={blog} alt='Blog' />
          </Col>
        </Row>
      </Container>
    </>
  )
}
