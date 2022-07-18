import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import './Home.scss'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Home({logout}) {
  return (
    <div>
      <NavBar logout = {logout} />
      
      <Card>
        <Card.Body>
          <Card.Title>Home</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary"><i className="bi bi-plus-circle"></i> New</Button>
          
          <InputGroup className="mt-3 mb-3">
            <InputGroup.Text id="basic-addon1">Total balance:</InputGroup.Text>
            <Form.Label className='label'><span>$ 100</span></Form.Label>
          </InputGroup>
          
          <Card.Title>Financial List:</Card.Title>
          
          
          
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Home