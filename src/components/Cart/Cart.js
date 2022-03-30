import React from 'react';
import './Cart.css'

const Cart = (props) => {

    // console.log(props);
    const { cart } = props;
    let total = 0;
    for (const profile of cart) {
        total = total + profile.salary;

    }

    return (
        <div className='cart-top'>

            <h4>Hired models:{props.cart.length} </h4>
            <h4>Total Cost: ${total}</h4>

        </div>
    );
};

export default Cart;