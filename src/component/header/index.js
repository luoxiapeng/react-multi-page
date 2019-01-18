import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, NavBar, Icon} from 'antd-mobile';
class Header extends Component{
   render(){
     const {list}=this.props;
     return (
         <NavBar
             mode="light"
             icon={<Icon type="left"/>}
             onLeftClick={() => console.log('onLeftClick')}
             rightContent={[
                 <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                 <Icon key="1" type="ellipsis"/>,
             ]}
         >{list}</NavBar>
     )
   }

}
const mapSateToProps=(state)=>{
    console.log(state.getIn(['header','list']));
    return{
        list:state.getIn(['header','list'])
    }
}
export default connect(mapSateToProps,null)(Header);