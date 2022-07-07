import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
const Layout = ({ children }) => {  //Esto indica que puede contener un Hijo 
    return (
        <div className='Layout'>
                <Header />
                {children}
                <Footer />
        </div>
    );
}

export default Layout;