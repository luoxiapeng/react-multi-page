import React,{Component} from 'react';
import { connect } from 'react-redux';
class Home extends Component{
    render(){
        const {HomeTitle}=this.props;
        return (
            <div>{HomeTitle}</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        HomeTitle:state.getIn(['Home','list'])
    }
}
export default connect(mapStateToProps,null)(Home);