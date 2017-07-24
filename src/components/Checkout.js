import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/Shopping'

class Checkout extends React.Component {
    removeProduct(product){
        this.props.actions.removeProduct(product);
    }
    changeQuantity(product,quantity){
        this.props.actions.changeQuantity(product,quantity);
    }
    render() {
        var items = this.props.items.map((item) => {
            const imgSrc = "./../images/" + item.name + ".jpg";
            return (
                <div key={item.id} className="checkoutItem">
                    <div>
                        <img src={imgSrc} alt="Unable to load"/>
                        <img src="./../images/remove.png" alt="Unable to load" className="removeIcon"
                             onClick={() => this.removeProduct(item)}/>
                    </div>
                    <span>X</span>
                    <input type="text" defaultValue={item.quantity}
                           onChange={(e) => {this.changeQuantity(item,e.target.value)}}/>
                </div>
            )
        }
    );
        return (
            <div>
                {items}
            </div>
        );
    }

}

Checkout.propTypes = {
    actions: React.PropTypes.object.isRequired,
    items: React.PropTypes.array.isRequired
}

function mapStateToProps(state){
    return {
        items: state.cart.items
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
)(Checkout);
