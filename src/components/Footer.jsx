import React from 'react';
import '@styles/Footer.scss';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo">Soluciones para tu auto</h1>
                <h2>Contacto</h2>
                <address>
                    <div className='footer__addr_info'>
                    Ciudad de México 5566-10212 | Celaya 5566-10212 
                    </div>
                    <a className="footer__btn" href="mailto:example@gmail.com">Correo</a>
                </address>

                <div className='social-container'>
                    <ul class="social-icons">
                        <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>  
                    </ul>
                </div>
            </div>
            <ul className="footer__nav">
                <li className="nav__item nav__categorias">
                    <h2 className="nav__title">Categorias</h2>
                    <ul className="nav__ul">
                        <li><a href="/">Car Audio</a></li>
                        <li><a href="/">Autoestereos</a></li>
                        <li><a href="/">Woofers</a></li>
                        <li><a href="/">Subwoofers</a></li>
                        <li><a href="/">Amplificadores</a></li>
                        <li><a href="/">Twitters</a></li>
                        <li><a href="/">Iluminacion</a></li>
                        <li><a href="/">Marino</a></li>    
                    </ul>
                </li>
                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Marcas</h2>
                    <ul className="nav__ul nav__ul--extra">
                        <li><a href="#">Clarion</a></li>
                        <li><a href="#">PowerBass</a></li>
                        <li><a href="#">HF Audio</a></li>
                        <li><a href="#">Speed</a></li>
                        <li><a href="#">Krypton</a></li>
                        <li><a href="#">Spider</a></li>
                        <li><a href="#">Image Dynamics</a></li>
                        <li><a href="#">War Audio</a></li>
                        <li><a href="#">Clarion</a></li>
                        <li><a href="#">PowerBass</a></li>
                        <li><a href="#">HF Audio</a></li>
                        <li><a href="#">Speed</a></li>
                        <li><a href="#">Krypton</a></li>
                        <li><a href="#">Spider</a></li>
                        <li><a href="#">Image Dynamics</a></li>
                        <li><a href="#">War Audio</a></li>    
                    </ul>
                </li>
            </ul>



            <div className="legal">
                <p>&copy; 2022 Soluciones para tu auto. Derechos reservados.</p>
                <div className="legal__links">
                    <span><span className="heart">♥</span></span>
                </div>
            </div>
        </footer>
);
}
export default Footer;