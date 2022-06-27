import React, {useState} from 'react'
import logo from './logo.svg'
import './LoginForm.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function LoginForm() {

  const [body, setBody] = useState({username:'', password:''});
  
  const inputChange = ({target}) => {
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }
  
  const onSubmit = () => {
    console.log(body)
  }

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to your Personal Finance App.</h1>
        
        <Card className="LoginCard mt-5">
          <Card.Body>
            
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="FormLabel">Username</Form.Label>
              <Form.Control type="text" placeholder="Username" value={body.username} onChange={inputChange} name="username" />
            </Form.Group>
      
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="FormLabel">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={body.password} onChange={inputChange} name="password" />
            </Form.Group>
            
            <Button variant="primary" onClick={onSubmit} >
              Login
            </Button>
          </Form>
            
          </Card.Body>
        </Card>
        
      </header>
    </div>
  )
}

export default LoginForm