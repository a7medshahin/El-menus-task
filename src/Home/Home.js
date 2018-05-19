import React, { Component } from 'react';
import '../AdminHome/home.css';
import CategoryList from '../Category/CategoryList';

class Home extends Component {

    constructor(){
        super();
        this.state = {categories: null};
        this.Login = this.Login.bind(this);
    }

    Init(){
        let data = require("../AdminHome//menu.json");
        data = data['categories'];
        this.setState({ categories: data},function () {
        });
    }
    Login(){
        this.props.history.push('/');
    }
    LoggedIn() {
        let cachedUser = localStorage.getItem('admin');

        if (!cachedUser) {
            return false
        }
        return true;
    }

    componentWillMount(){
        this.Init();

    }
    render() {
        return (
            <div className='admin home'>
                <button className="ui primary button logout-btn" onClick={this.Login}>Login</button>
                <CategoryList isLogged={this.LoggedIn} allCategories={this.state.categories}/>
            </div>
        );
    }


}
export default Home;