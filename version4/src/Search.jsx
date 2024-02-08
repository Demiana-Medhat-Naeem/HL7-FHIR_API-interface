import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/Registration.css';

function Search() {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    Axios.post("http://localhost:5000/search",{
      name
    })
    .then (res => console.log(res.data))
    .catch (err => console.log(err));

    Axios.get('http://localhost:5000/search')
    .then(res => setData(res.data))
    .catch (err => console.log(err));

  };

  return (
    <div className="registration-container">
    <form onSubmit={handleSubmit}>

      <h2>Search Form</h2>
      <div className="form-group">
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <button type="submit">Search</button>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      <Link to="/register" className="my-link">Registration</Link>
    </form>
    <div>
      {data && <p>{data}</p>}
      
     </div>
    </div>
  );
}

export default Search;
