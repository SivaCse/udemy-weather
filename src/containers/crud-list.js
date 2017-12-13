import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser, selectedUser } from '../actions/index';

class CrudList extends Component {
    constructor(props){
        super(props);
    }

    updateUser = (id,user) => {
      console.log(id,user)
      this.props.selectedUser(user);
      //this.props.updateUser(id,user);
    }

    render(){
        return(
          <div>
          <table className="table table-bordered table-condensed">
          <tbody>
          <tr><th>User</th></tr>
            {this.props.users.map((name,index)=>(
              <tr><td  key={index}>{name} <button onClick={this.updateUser.bind(null,index,name)}>Update</button></td></tr>
            ))}
            </tbody>
            </table>
            </div>
        );
    }

}

function mapStateToProps(state) {
  return {
    users:state.user.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateUser,selectedUser},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(CrudList)
