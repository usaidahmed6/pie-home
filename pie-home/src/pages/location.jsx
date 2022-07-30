import React from 'react';
import './area.css';
import pie_logo from '../images/logo-pieinthesky.png';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";





const Location = () => {
  return (
    <div className="main-div-location">
      <div className='mainDiv-Area'>
        <div className='location-Div'>
          <Form>

            <img src={pie_logo} alt="logo" className='area-logo' />
            <h6 className='text-center my-2'>My Location</h6>
            <Form.Group className="mb-3">
              <Form.Label className='dis-cont'>City</Form.Label>

              <Link to='/city'>
                <div className="Location">
                  <Form.Control type="text" placeholder="Choose Your City" className='city' disabled />
                  <span className='select-city btn btn-blue' >select</span>
                </div>
              </Link>

            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='dis-cont'>Area</Form.Label>

              <Link to='/area'>
                <div className="Location">
                  <Form.Control type="text" placeholder="Choose Your Area" className='city' disabled />
                  <span className='select-city btn btn-blue'>select</span>
                </div>
              </Link>

            </Form.Group>

            <button className='btn btn-light btn-blues-sm'>
              Save Location
            </button>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Location
