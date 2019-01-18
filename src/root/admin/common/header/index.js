import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component{

   render(){
     const {list}=this.props;
     return (
         <div>{list}</div>
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