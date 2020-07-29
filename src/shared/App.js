import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Bookdetail, Areadetail} from 'pages';
import Menu from '../components/Menu.js'

class App extends Component {   
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route exact path="/bookdetail/:bookId" component={Bookdetail}/>
                <Route exact path="/areadetail/:areaId" component={Areadetail}/>
            </div>
        );
    }
}

export default App;