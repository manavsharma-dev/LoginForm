import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login, login } from '../redux/reducer';
import { Link } from "react-router-dom";

class LoginForm extends Component{

  constructor(props){

    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);

  }


  render(){
    let { email, password } = this.state;
    
    let {
      login_pending,login_success,login_error
    } = this.props;


    return(
      <form name ="loginForm" onSubmit= {this.onSubmit}>

        <h3>Log-In</h3>
      
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="Enter Email" onChange ={e => this.setState({email:e.target.value})}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter Password" onChange={e => this.setState({password: e.target.value})}/>
        </div>

        {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
            </div>
        </div> */}

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
          {/* <p className="forgot-password text-right">
            ForgotPassword<Link to="/changepassword">Click Here!</Link>
          </p> */}

      </form>
    );
  }

onSubmit(e){
  e.preventDefault();
  let { email, password } = this.state;
  this.props.Login(email, password);
  this.setState({
    email:'',
    password:''
  });
}

}

const mapStateToProps = (state) => {
  return {
    login_pending: state.login_pending,
    login_success: state.login_success,
    login_error: state.login_error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login:(email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);