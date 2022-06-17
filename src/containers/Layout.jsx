import React from 'react';
import Header from '../components/Header';
const Layout = ({ children }) => {  //Esto indica que puede contener un Hijo 
    return (
        <div className='Layout'>
                <Header />
                {children}
        </div>
    );
}

export default Layout;