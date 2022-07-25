import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Card from 'react-bootstrap/Card';

import {Link, useParams, useNavigate} from 'react-router-dom'

import ProductDataService from "../../services/ProductService"

// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './Edit.scss'


function Edit({logout}) {

  const initialProductState = {
    id: null,
    concepto: "",
    monto: "",
    fecha: "",
    fecha2: "",
    tipo: "",
    categoria: ""
  };
  
  
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const params = useParams() // get the ID from a URL
  //console.log(params.id)
  
  const history = useNavigate() // 
  
  const getProduct = id => {
    ProductDataService.get(id)
      .then(response => {
        setCurrentProduct(response.data);
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  
  useEffect(() => {
    getProduct(params.id);
  }, [params]);
  
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };
  
  
  const updateProduct = () => {
    //console.log(currentProduct);
    ProductDataService.update(currentProduct.id, currentProduct)
      .then(response => {
        //console.log(response.data);
        /* setMessage("The Product was updated successfully!"); */
        history("/home");
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  
  // Datepicker
  //const a = new Date()
  //const b = a.valueOf()
  
  const [startDate, setStartDate] = useState(null);
  
  
  const handleInputChangeDate = () => {
    // startDate to dd/MM/yyyy
    let current = startDate
    
    if (current !== null) {
      let b = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
      
      //console.log(b) // dd/MM/yyyy
      
      setCurrentProduct({ ...currentProduct, 'fecha': startDate.valueOf(), 'fecha2': b });
    }
    
  };
  
  const handleOnChangeDate = (date) => {
    const a = new Date(date)
    
    setStartDate(a)
  }
  

  return (
    <div>
      <NavBar logout={logout} />
      
      <Card>
        <Card.Body className="flex1">
          <Card.Title><h1>Edit</h1></Card.Title>
          <Card.Text>
            Feel free to edit your financial incomes or outcomes.
          </Card.Text>
          
          {currentProduct ? (
            <div>
              
              <div className="edit-form">
                <h4>Edit Product</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="concepto">Concept</label>
                    <input
                      type="text"
                      className="form-control input"
                      id="concepto"
                      name="concepto"
                      value={currentProduct.concepto}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="monto">Amount</label>
                    <input
                      type="text"
                      className="form-control input"
                      id="monto"
                      name="monto"
                      value={currentProduct.monto}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group mb-3">
                    <label htmlFor="fecha">Date</label>
                    <DatePicker
                      className="form-control input"
                      dateFormat="dd/MM/yyyy"
                      selected={currentProduct.fecha}
                      
                      id="fecha"
                      required={true}
                      value={currentProduct.fecha}
                      onChange={date => handleOnChangeDate(date)}
                      onCalendarClose={handleInputChangeDate}
                      name="fecha"
                      autoComplete='off'
                    />
                  </div>
                  
                  <div className="form-group mb-3">
                    <label htmlFor="tipo">Type</label>
                    <select className="form-select input" aria-label="Default select example"
                      id="tipo"
                      required={true}
                      value={currentProduct.tipo}
                      onChange={handleInputChange}
                      name="tipo"
                    >
                      <option>--Select Type--</option>
                      <option value="in">in</option>
                      <option value="out">out</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="categoria">Category</label>
                    <input
                      type="text"
                      className="form-control input"
                      id="categoria"
                      name="categoria"
                      value={currentProduct.categoria}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
      
                </form>
      
      
                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  onClick={updateProduct}
                >
                  Update
                </button>
                
                <Link
                  to={"/home"}
                  className="btn btn-danger mt-3"
                >
                  Go Back
                </Link>
                
              </div>
            </div>
          ) : (
            <div>
              <br />
              <p>...Loading...</p>
            </div>
          )}
          
          </Card.Body>
      </Card>
    
    </div>
  )
}

export default Edit