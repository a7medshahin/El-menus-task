import React, { Component } from 'react';
import Modal from 'react-modal';
// import { BrowserRouter as Router, Route } from "react-router-dom";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

class CategoryList extends Component {
    constructor(props){
        super();
        let showme=props.isLogged();
        this.state = {categories:props.allCategories,modalIsOpen: false,showMe:showme}
        console.log(this.state.showMe);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    // view single item
    ItemInfo(item) {
            return (
                    <ul className="pure-tree single-item">
                        <li className="pure-tree_link">
                            <p  title="item" ><span className="head-title">ID :</span><span className="body-title">{item.id}</span></p> </li>
                        <li className="pure-tree_link">
                            <p  title="item" ><span className="head-title">PRICE :</span><span className="body-title">{item.price}</span></p>
                        </li>
                        <li className="pure-tree_link">
                            <p  title="item" ><span className="head-title">DESCRIPTION :</span><span className="body-title description">{item.description}</span></p>
                        </li>
                    </ul>
            );
        }
    // view All items in one category
    ItemList(ItemsList) {
        const items = ItemsList;
        let editIcon;
        if (this.state.showMe === true){
            editIcon = (
                <i aria-hidden="true" onClick={this.openModal} className="edit big icon"></i>
            )
        } else {
            editIcon = null;
        }

        const listItems = items.map((item) =>
                 <li className='item-li' key={item.id}>
                     <input type="checkbox" id={item.id}/>
                     <label htmlFor={item.id}>{item.name}</label>
                     {editIcon}
                     {this.ItemInfo(item)}
                 </li>
            );
            return (
                <ul className="pure-tree">{listItems}</ul>
            );
        }

    // view All category
    CategoryList(categoriesList) {
            const categories = categoriesList;
            // console.log(categories);
            const listCategories = categories.map((category) =>
                <li  key={category.id}>
                    <input type="checkbox" id={category.id}/>
                    <label htmlFor={category.id}>{category.name}</label>
                    {this.ItemList(category.items)}
                </li>

            );

            return (

                <ul id="compositions-list" className="pure-tree main-tree"><input type="checkbox" id="trigger-views"/>
                    <label htmlFor="trigger-views">Menus</label>
                    <ul className="pure-tree">
                        {listCategories}
                    </ul>
                </ul>

            );
        }

    // Edit item modal
    openModal() {
        this.setState({modalIsOpen: true});

    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <form className="ui form">
                        <div className="equal width fields">
                            <div className="field">
                                <label htmlFor="form-input-control-first-name">Name</label>
                                <div className="ui input">
                                    <input type="text" id="form-input-control-first-name" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="form-input-control-last-name">Price</label>
                                <div className="ui input">
                                    <input type="text" id="form-input-control-last-name" placeholder="Price"/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="form-textarea-control-opinion">Description</label>
                            <textarea id="form-textarea-control-opinion" placeholder="Description" rows="3" >
                            </textarea>
                        </div>
                        <div className="field">
                            <button id="form-button-control-public" onClick={this.closeModal} className="ui button">Save</button>
                        </div>
                    </form>
                </Modal>
                {this.CategoryList(this.state.categories)}
            </div>
        );
    }
}

export default CategoryList;
