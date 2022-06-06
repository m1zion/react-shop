import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css'
const App = () => {  //aqui iran los contenedores que creamo, se pueden ir anidando
    return (
        <Layout>    
            <Login/>
        </Layout>
    );
}

export default App;