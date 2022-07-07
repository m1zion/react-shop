import React from 'react';
import '../styles/Login.scss';
const Login = () => {
    return (
        <div className="login">
        <div className="login-container">  
          <p className="title">Iniciar sesión</p>     
          <form action="/" className="form">
            <label for="email" className="label">Usuario</label>
            <input type="text" id="email" placeholder="ejemplo@247.com" className="input input-email"/>
            <label for="password" className="label">Contraseña</label>
            <input type="password" id="password" placeholder="*********" className="input input-password"/>
            <input type="submit" value="Ingresar" className="primary-button login-button"/>
          </form>
          <button className="secondary-button signup-button">Registrarse</button>
          <a className="forget" href="/">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    );
}
export default Login;