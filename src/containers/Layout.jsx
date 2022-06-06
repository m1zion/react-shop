import React from 'react';

const Layout = ({ children }) => {  //Esto indica que puede contener un Hijo 
    return (
        <div className='Layout'>
                {children}
        </div>
    );
}

export default Layout;