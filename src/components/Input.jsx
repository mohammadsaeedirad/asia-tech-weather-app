import React, { useState } from "react";

const Input = ({ setCity }) => {
  const [input, setInput] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    setCity(input);
  };
  return (
    <div className='navbar navbar-light bg-dark'>
      <div className='container'>
        <a href='/' className='navbar-brand text-white'>
          Weather
        </a>
        <form className='d-flex'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='where are you?'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className='btn btn-outline-info'
            value={input}
            onClick={(e) => submitForm(e)}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
