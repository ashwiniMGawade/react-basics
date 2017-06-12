import React from 'react';
import ReactDOM from "react-dom";

//get components
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        let user = {
            name: 'Ashwini',
            company: 'Cuelogic'
        };
        return (
            <div className="container">
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Home test={"test"} user={user} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
