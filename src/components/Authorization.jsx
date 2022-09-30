import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Authorization({ setCurrUser }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [err, setErr] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/auth', {
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
    <div>
      <form onSubmit={submitHandler}>
        <h3 className="mb-3 mt-3">Войдите в личный кабинет</h3>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Ваша e-mail</label>
          <input
            value={input.email}
            onChange={inputHandler}
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            placeholder="Введите Ваш email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Пароль</label>
          <input
            value={input.password}
            onChange={inputHandler}
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            placeholder="Введите Ваш пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary">Авторизироваться</button>
      </form>
    </div>
  );
}

export default Authorization;
