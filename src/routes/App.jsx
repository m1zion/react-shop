import React from 'react';
//import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
//import Login from '../containers/Login';
import Login from '../pages/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
import MyAccount from '../containers/MyAccount';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
//Eb el curso se utiliza switch para las rutas pero ahora es Routes
//https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes
const App = () => {  //aqui iran los contenedores que creamos, se pueden ir anidando
    return (    
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />	
                    <Route exact path="/MyAccount" element={<MyAccount />} />			
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/orders" element={<Orders/>} />
                    <Route exact path="/checkout" element={<Checkout/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter> 
    );
}
/*      <BrowserRouter>
    <Switch>
        <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="recovery-password" component={RecoveryPassword} />
            <Route component={NotFound}/>
        </Layout>

    </Switch>
</BrowserRouter>
*/
export default App;


