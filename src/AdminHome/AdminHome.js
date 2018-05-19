import React, { Component } from 'react';
import './home.css';
import CategoryList from '../Category/CategoryList';
class AdminHome extends Component {

    constructor(){
        super();
        this.state = {categories: null};
        this.Logout = this.Logout.bind(this);
    }
    Init(){
        let data = require("./menu.json");
        data = data['categories'];

        // this.setState({ allCategories: data});
        this.setState({ categories: data},function () {
        });
    }
    Logout(){
        // console.log(props);
        this.props.history.push('/');
        localStorage.removeItem('admin')

    }
    Auth() {
        let cachedUser = localStorage.getItem('admin');

        if(!cachedUser){
            this.props.history.push('/');
            return false;

        }
        return true;

    }

componentWillMount(){
    this.Auth();
    this.Init();

}

render() {
    return (
        <div className='admin'>
            <button className="ui secondary button logout-btn" onClick={this.Logout}>Logout</button>
            <CategoryList isLogged={this.Auth} allCategories={this.state.categories}/>
        </div>
        );
    }


}
export default AdminHome;