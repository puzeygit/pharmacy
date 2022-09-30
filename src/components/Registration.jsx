import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration({ setCurrUser }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrUser(data);
        navigate('/');
      });
  };
  return (
    <form onSubmit={submitHandler} className="mb-3 mt-3">
      <div className="mb-3">
        <label htmlFor="inputLogin" className="form-label">Логин</label>
        <input
          name="name"
          placeholder="Введите Ваше имя"
          value={input.name}
          onChange={inputHandler}
          type="text"
          className="form-control"
          id="inputLogin"
          description="введите имя"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Ваша e-mail</label>
        <input
          placeholder="Введите Ваш e-mail"
          name="email"
          value={input.email}
          onChange={inputHandler}
          type="email"
          className="form-control"
          id="inputEmail"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">Пароль</label>
        <input
          name="password"
          value={input.password}
          onChange={inputHandler}
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Введите Ваш пароль"
        />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
