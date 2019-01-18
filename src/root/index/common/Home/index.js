import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
class Home extends Component{
    render(){
        const {HomeTitle}=this.props;
        return (
            <div>{HomeTitle}
                <button onClick={this.handleClick.bind(this)} style={{width:'200px',lineHeight:'60px'}}>获取数据</button>
            </div>
        )
    }
    handleClick(){
        axios.get('api/admin').then(res=>{
            console.log(res);
        }).catch(err => console.log(err))
    }
}
const mapStateToProps=(state)=>{
    return{
        HomeTitle:state.getIn(['Home','list'])
    }
}
export default connect(mapStateToProps,null)(Home);