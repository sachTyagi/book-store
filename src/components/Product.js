import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/Shopping';
import {Link} from 'react-router-dom';


class Products extends React.Component{
    addProduct(product){
        this.props.actions.addProduct(product);
    }
    onSearch(searchStr){
        this.props.actions.onSearch(searchStr);
    }
    render(){
        var timeoutId;
        const images = this.props.books.map((book) => {
            let imgSrc = "./../images/" + book.name + ".jpg";
            let descUrl = "/description/" + book.id;
            return (
                <Link key={book.id} to={descUrl} className="imageClick">
                    <img src={imgSrc} alt="Unable to load"/>
                    <img alt="Unable to load" src="./../images/cart.png" onClick={(e) => {e.preventDefault();e.stopPropagation();this.addProduct(book)}}/>
                </Link>
            );
        });

        return (
            <div>
                <div className="searchBox">
                    <input type="text" defaultValue={this.props.searchStr} placeholder="Enter product name to search" onChange = {(e) => {
                                                                var value = e.target.value;
                                                                if(timeoutId){
                                                                    clearTimeout(timeoutId)
                                                                }
                                                                timeoutId = setTimeout(() => {
                                                                this.onSearch(value);
                                                                },2000);
                                                            }
                                                   }/>
                </div>
                <div>
                    {images}
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    actions: React.PropTypes.object.isRequired,
    books: React.PropTypes.array.isRequired
}

function mapStateToProps(state){
    return {
        books: state.productList.books,
        searchStr: state.productList.searchStr
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(Products);

