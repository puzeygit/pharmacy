import React from 'react';

const Registration = () => {
  
  


  return (
    <form className='mb-3 mt-3'>
      <h3 className='mb-2 mt-2'>Введите Ваши данные</h3>
      <div className="mb-3">
        <label htmlFor="inputLogin"  className="form-label">Логин</label>
        <input type="text" name="name" className="form-control" id="inputLogin" description="введите имя"/>
      </div>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Ваша e-mail</label>
        <input type="email" name="email" className="form-control" id="inputEmail"/>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">Пароль</label>
        <input type="password" name="pass" className="form-control" id="inputPassword"/>
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
