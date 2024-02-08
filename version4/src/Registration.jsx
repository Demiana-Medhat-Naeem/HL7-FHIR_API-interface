import {React, useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';

import './CSS/Registration.css';

const Register =()=>{

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [data, setData] = useState(null);


  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'dateOfBirth':
        setDateOfBirth(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      default:
        console.error('Unexpected input name:', name);
    }
  };


  const handleSubmit = async (event)=>{
    event.preventDefault();

    Axios.post("http://localhost:5000/register",{
      name,
      gender,
      dateOfBirth,
      phoneNumber
    })
    .then (res => console.log(res.data))
    .catch (err => console.log(err));

    Axios.get('http://localhost:5000/register')
    .then(res => setData(res.data))
    .catch (err => console.log(err));
    };
    
   

  


  
  return(
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
        'Submit'</button>
        <Link to="/" className="my-link">Search</Link>
      </form>
      <p>  </p>
      <div className="registration-container">
      {data && <p>{data}</p>}
     </div>
     
    </div>
  )
}

export default Register