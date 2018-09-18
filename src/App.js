import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Navigation from './components/navigation';


class App extends Component {
    
    render() { 
        return ( 
            <BrowserRouter>
            <div>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
            </div>     
            </BrowserRouter>
            
         );
    }
}
 
export default App;