import React, { Component } from 'react';
import styles from './App.css';
import { Button } from 'antd-mobile'
console.log(styles)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        多页面应用admin
        </header>
        <Button type="primary">primary</Button>
      </div>
    );
  }
}

export default App;
