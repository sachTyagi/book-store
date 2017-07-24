import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/Shopping'
import {Link} from 'react-router-dom';

class Description extends React.Component{
    addProduct(book){
        this.props.actions.addProduct(book);
    }
    render(){
        const id = this.props.match.params.id;
        var book = this.props.books.find((item) => (item.id === id));
        let imgSrc = "./../images/" + book.name + ".jpg";
        let descUrl = "/description/" + book.id;
        return (
            <div className="descProduct">
                <div>
                    <Link to={descUrl} className="imageClick">
                        <img src={imgSrc} alt="Unable to load"/>
                        <img src="./../images/cart.png" alt="Unable to load"  onClick={(e) => {e.preventDefault();e.stopPropagation();this.addProduct(book)}}/>
                    </Link>
                </div>
                <div>
                    <h1>Description</h1>
                    <p>In 1903 Mary Boulton flees alone across the West, one heart-pounding step ahead of the law. At nineteen, she has just become a widow-and her husband's killer. As bloodhounds track her frantic race toward the mountains, she is tormented by mad visions and by the knowledge that her two ruthless brothers-in-law are in pursuit, determined to avenge their younger brother's death. Responding to little more than the primitive instinct for survival at any cost, she retreats ever deeper into the wilderness-and into the wilds of her own mind..</p>
                </div>
            </div>
        );
    }
}

Description.propTypes = {
    books: React.PropTypes.array.isRequired
};

function mapStateToProps(state){
    return {
        books: state.productList.books
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
)(Description);

