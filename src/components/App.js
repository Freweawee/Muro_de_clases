import React, { Component } from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { Footer } from './Footer';

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }  
}

export default App;
