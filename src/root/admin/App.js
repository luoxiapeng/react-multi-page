import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './App.css';
import { Button } from 'antd-mobile';
import {connent} from 'react-redux';
import Header from './common/header';
import store from './store';
console.log(styles)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    多页面应用admin
                    <Header></Header>
                </header>
                <Button type="primary">primary</Button>

            </div>
        </Provider>
    );
  }
}

export default App;
