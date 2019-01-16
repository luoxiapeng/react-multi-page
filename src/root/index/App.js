import React, { Component } from 'react';
import styles from './App.css';
import { Button, NavBar, Icon  } from 'antd-mobile'
console.log(styles)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
        <Button type="primary">primary</Button>
      </div>
    );
  }
}

export default App;
