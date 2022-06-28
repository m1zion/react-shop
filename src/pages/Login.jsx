import React, { useRef }  from 'react';
import '@styles/Login.scss';
const Login = () => {
    const form = useRef(null);
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current);
      const data = {
        username: formData.get('email'),
        password: formData.get('password')
      }
      console.log(data);      
    }
    return (
        <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
    
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for your account</p>
    
          <form action="/" className="form" ref={form}>
            <label for="email" className="label">Email</label>
            <input type="text" name="email" id="email" placeholder="ejemplo@247.com" className="input input-email"/>
    
            <label for="password" className="label">Password</label>
            <input type="password" name="password" id="password" placeholder="*********" className="input input-password"/>
  
            <button 
              className="primary-button login-button"
              onClick={handleSubmit}>Confirm
            </button>
          </form>
        </div>
      </div>
    );
}
export default Login;