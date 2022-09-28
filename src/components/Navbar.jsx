import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-$indigo-900 bg-light px-4">
     <div class="container-fluid">
      <Link className="navbar-brand" to="/"><h1 class="fs-4">Социальная аптека</h1></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink className="nav-link active" to='/'>Главная</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/page/registration'>Регистрация</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/page/authorization'>Авторизация</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link disabled" tabindex="-1" aria-disabled="true" to="/page/personalacc">Личный кабинет</NavLink>
          </li>

          <li class="nav-item">
            <NavLink className="nav-link" to='/page/order'>Корзина</NavLink>
          </li>
       </ul>
       </div>
    </div>
  </nav>
  );
}

export default Navbar;
