import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Router from './router'
import styles from './App.css';
import Header from '../../component/header';
import Home from './common/Home';
console.log(styles)
class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <Header/>
              <Router/>
            </Provider>
        );
    }
}

export default App;
