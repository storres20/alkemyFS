import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import NavBar from '../../components/NavBar/NavBar'

import './Home.scss'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home({ logout }) {

  const [rutas, setRutas] = useState([]);
  const [allData, setAllData] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const obtenerDatos = () => {
    // GET request for remote image in node.js
    axios.get('http://localhost:3001/api/products')
    //axios.get('https://rutasq2-back.vercel.app/api/products')
      .then(res => {
        //console.log(res.data);
        setRutas(res.data)
        setAllData(res.data)
      })
  }

  const obtenerCategorias = () => {
    // GET request for remote image in node.js
    axios.get('http://localhost:3001/api/categories')
    //axios.get('https://rutasq2-back.vercel.app/api/categories')
      .then(res => {
        //console.log(res.data);
        setCategorias(res.data)
      })
  }

  useEffect(() => {
    obtenerDatos();
    obtenerCategorias();
  }, [])


  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allData.filter((user) => {
        //return user.title.toLowerCase().startsWith(keyword.toLowerCase());
        return user.concepto.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });

      inputRef2.current.value = "--All--";
      setRutas(results);

    } else {
      setRutas(allData);
      // If the text field is empty, show all users
    }

  }


  const handleCategory = (event) => {
    const keyword = event.target.value;

    if (keyword !== '--All--') {
      const results = allData.filter((user) => {
        //return user.title.toLowerCase().startsWith(keyword.toLowerCase());
        return user.categoria.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });

      inputRef.current.value = "";
      setRutas(results);

    } else {
      setRutas(allData);
      // If the text field is empty, show all users
    }

  }

  return (
    <div>
      <NavBar logout={logout} />

      <Card>
        <Card.Body>
          <Card.Title><h1>Home</h1></Card.Title>
          <Card.Text>
          This Home page shows all money incomes and outcomes.
          Even, you can search by name or order by category.
          </Card.Text>

          <Card.Title>Financial List:</Card.Title>
          
          <InputGroup className="mt-3 mb-3">
            <InputGroup.Text id="basic-addon1">Total balance:</InputGroup.Text>
            <Form.Label className='label'><span>$ 100</span></Form.Label>
          </InputGroup>


          <Form>
            <Container>
              <Row className='flexCol'>
                <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control
                      placeholder="Enter concept"
                      aria-label="Enter concept"
                      aria-describedby="basic-addon2"
                      className='inputLar'
                      autoComplete="off"
                      onChange={event => handleSearch(event)}
                      ref={inputRef}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Category:</Form.Label>
                    <Form.Select aria-label="Floating label select example" onChange={event => handleCategory(event)} ref={inputRef2}>
                      <option>--All--</option>
                      {
                        categorias.map(item => (
                          <option key={item.id} value={item.nombre}>{item.nombre}</option>
                        ))
                      }
                    </Form.Select>
                  </Form.Group>
                </Col>

              </Row>
            </Container>
          </Form>
          
          {/* "New" button */}
          <Button variant="primary"><i className="bi bi-plus-circle"></i> New</Button>
          
          <Card>
            <Card.Body>

              <Table striped bordered hover size="md" responsive >
                <thead>
                  <tr>
                    <th className='text-center'>N°</th>
                    <th>Concept</th>
                    <th className='text-center'>Amount</th>
                    <th className='text-center'>Date</th>
                    <th className='text-center'>Type</th>
                    <th className='text-center'>Category</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rutas.map((item, index) => (
                    <tr key={item.id}>
                      <td className='text-center'>{index + 1}</td>
                      <td>{item.concepto}</td>
                      <td className='text-center'>{item.monto}</td>
                      <td className='text-center'>{item.fecha}</td>
                      <td className='text-center'>{item.tipo}</td>
                      <td className='text-center'>{item.categoria}</td>
                      <td className='text-center'>
                        <a
                          className='btn btn-warning m-1'
                          target="_blank"
                          rel="noreferrer"
                          href={item.link}
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </a>
                        <a className='btn btn-danger m-1' href={item.link}>
                          <i className="bi bi-trash-fill"></i>
                        </a>
                      </td>
                    </tr>
                  ))}


                </tbody>
              </Table>

            </Card.Body>
          </Card>

        </Card.Body>
      </Card>

    </div>
  )
}

export default Home