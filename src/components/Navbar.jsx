import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ currUser, logOutHandler }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-$indigo-900 bg-light px-4 navbarFs">
      <div className="container-fluid">
        <div className="containerLogo">
          <img src="https://www.svgrepo.com/show/257912/pharmacy.svg" alt="logo" />
        </div>
        <Link className="navbar-brand" to="/"><h1 className="logoText">Социальная аптека</h1></Link>
        <button className="navbar-toggler customBurger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">Главная</NavLink>
            </li>
            {currUser.id
              ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" onClick={logOutHandler} to="/">Выйти</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" tabIndex="-1" to="/page/personalacc">Личный кабинет</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page/order">Корзина</NavLink>
                  </li>
                </>
              )
              : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page/registration">Регистрация</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/page/authorization">Авторизация</NavLink>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
