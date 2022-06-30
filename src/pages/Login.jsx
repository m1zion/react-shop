import React, { useRef } from 'react';
import '@styles/Login.scss';
const Login = () => {
    const form = useRef(null);

    /* Manejador del submit  https://www.youtube.com/watch?v=raJjjm3rhhU */
    const handleSubmit = (event) => {
        /*Para prevenir que se mande el evento por def<ult de html y se pasen los parametros por get*/
        event.preventDefault();
        const formData = new FormData(form.current);
        /*Objeto para ver la informacion name de los imputs*/
        /*Tenemos que cambiar id por name en la forma*/
        const  data = {
            username: formData.get('email'), 
            password: formData.get('password')
        }
        console.log(data);
    }
    return (
        <div className="login">
        <div className="login-container">  
          <p className="title">Iniciar sesión</p>     
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">Usuario</label>
            <input type="text" name="email" id="email" placeholder="ejemplo@247.com" className="input input-email"/>
            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" name="password" placeholder="*********" className="input input-password"/>
            <button 
                className="primary-button login-button" 
                onClick={handleSubmit} 
            >Ingresar
            </button>
            
          </form>
          <button className="secondary-button signup-button">Registrarse</button>
          <a className="forget" href="/">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    );
}
export default Login;

