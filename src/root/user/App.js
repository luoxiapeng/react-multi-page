import React, { Component } from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import style from './App.module.scss';
console.log(style)
class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className="App-header">
        多页面应用user
        </header>
          <InputItem
              clear
              placeholder="auto focus"
              ref={el => this.autoFocusInst = el}
          >标题</InputItem>
      </div>
    );
  }
}

export default App;
