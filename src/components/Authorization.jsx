import React from 'react';

const Authorization = () => {
  return (
    <div>
      <form>
        <h3 className='mb-3 mt-3'>Войдите в личный кабинет</h3>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Ваша e-mail</label>
          <input type="email" name="email" className="form-control" id="inputEmail"/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Пароль</label>
          <input type="password" name="pass" className="form-control" id="inputPassword"/>
        </div>
        <button type="submit" className="btn btn-primary">Авторизироваться</button>
      </form>
    </div>
  );
}

export default Authorization;
