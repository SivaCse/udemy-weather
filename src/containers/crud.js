import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../actions/index';

class Crud extends Component {
    constructor(props){
        super(props);
        this.state = {name:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({name:event.target.value});
    }

    onFormSubmit(event){
      console.log(event.target.value,this.props);
        event.preventDefault();
        this.props.createUser(this.state.name)
    }

    componentWillReceiveProps(props) {
        this.setState({name:props.selectedUser});
    }

    render(){
      console.log(this.props.selectedUser,'selectedUser')
        return(
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Enter Name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit </button>
                </span>
            </form>
        );
    }

}

function mapStateToProps(state) {
  return {
    selectedUser:state.user.selectedUser
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createUser }, dispatch);
}
export default connect (mapStateToProps,mapDispatchToProps)(Crud)
