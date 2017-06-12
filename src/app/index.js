import React from 'react';
import ReactDOM from "react-dom";

//get components
import { Header } from './components/Header';
import { Home } from './components/Home';

console.log(Header);
console.log(Home);

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Home/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
