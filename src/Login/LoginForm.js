import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(){
        super();
        this.state = {username: '',password: ''};
        this.adminState = {username: 'admin',password: 'asdasd123'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        event.preventDefault();

    }

    Auth() {
        let cachedUser = localStorage.getItem('admin');
        // console.log(cachedUser);
        if(cachedUser){
            this.props.history.push('/adminHome');
        }

    }

    handleSubmit(event) {

        let user = {
            username:this.state.username,
            password:this.state.password
        }

        if(this.adminState.username === this.state.username && this.adminState.password === this.state.password){
            event.preventDefault();
            localStorage.setItem('admin', user.username);
            this.props.history.push('/adminHome');

        }else {
            alert('Your are not authorized');
            event.preventDefault();
        }
    }
    componentWillMount(){
        this.Auth();
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="login-form">
                    <h1>El Menus</h1>
                    <div className="form-group ">
                        <input type="text" name='username' value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Username " />
                            <i className="fa fa-user"></i>
                    </div>
                    <div className="form-group log-status">
                        <input type="password" name='password' value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" />
                            <i className="fa fa-lock"></i>
                    </div>
                    <div>
                        <span className="alert">Invalid Credentials</span>
                        <a className="link" href="/home">just a user ?</a>
                        <button type="submit" className="log-btn">Log in</button>
                    </div>
                </div>
            </form>
        );
    }


}
export default Login;