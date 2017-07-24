import React from 'react'
import { connect } from 'react-redux'
import Checkout from './Checkout';
import Description from './Description';
import Products from './Product';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


class Header extends React.Component{
    render() {
        var numberOfItems = 0;
        if (this.props.items.length > 0) {
            numberOfItems = this.props.items.reduce((total, item) => ({quantity: total.quantity + item.quantity}));
        }
        return (
            <div>
            <header className="mainHeader">
                <span>Book Store</span>
                <Link to="/checkout"><img src="./../images/cart.png" alt="Unable to load"
                                          className="cart"/><span>{numberOfItems.quantity}</span></Link>
            </header>
                <div>
                    <Switch>
                    <Route path='/products' component={Products}/>
                    <Route path='/description/:id' component={Description}/>
                    <Route path='/checkout' component={Checkout}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    items: React.PropTypes.array.isRequired
}

function mapStateToProps(state){
    return {
        items: state.cart.items
    }
}

export default connect(
    mapStateToProps
)(Header);

