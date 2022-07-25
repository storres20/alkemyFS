import React, {useState} from 'react'
//import LoginForm from '../../components/LoginForm/LoginForm'

import logo from './logo.svg'
import './Login.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Login({authenticate}) {

  const [body, setBody] = useState({username:'', password:''});
  let navigate = useNavigate();
  
  const inputChange = ({target}) => {
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }
  
  const onSubmit = () => {
    /* console.log(body) */
    //axios.post('http://localhost:3001/login', body)
    axios.post('https://alkemy20-back.herokuapp.com/login', body)
    .then(({data}) => {
      //console.log(data);
      authenticate()
      navigate('/home');
    })
    .catch(({response})=>{
      //console.log(response.data);
      alert(response.data)
    })
  }

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to your Personal Financial App.</h1>
        
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

export default Login