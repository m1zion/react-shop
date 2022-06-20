import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
ReactDOM.render(<App/>,document.getElementById('app'));
/*
//COMPONENTE STATEFUL
 const Button = () => {
    const [name, setName] = useState('Hola Mundo');
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
 }

//COMPONENTE STATELESS
const Button2 = () => {
        <div>
            <h1>name</h1>
        </div>
 };

 const Button3 = () => {<buttonred/>};


 class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello, World</h1>
            </div>
        );
    }
 }
*/