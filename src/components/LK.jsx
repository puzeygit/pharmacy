import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LK({ currUser, setCurrUser }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/edit', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    fetch('/api/edit')
      .then((res) => res.json())
      .then((data) => {
        setCurrUser(data);
      });
  };

  return (
    <form onSubmit={submitHandler} className="mb-3 mt-3">
      <div className="mb-3">
        <label htmlFor="inputLogin" className="form-label">
          Ваш Логин
          {' '}
          {`\n${currUser.name}`}
        </label>
        <input
          placeholder="Enter Login"
          name="name"
          value={input.name}
          onChange={inputHandler}
          type="text"
          className="form-control"
          id="inputLogin"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Ваш email
          {' '}
          {`\n${currUser.email}`}
        </label>
        <input
          placeholder="Enter email"
          name="email"
          value={input.email}
          onChange={inputHandler}
          type="email"
          className="form-control"
          id="inputEmail"
        />
      </div>
      <button type="submit" className="btn btn-primary">Редактировать</button>
    </form>
  );
}
