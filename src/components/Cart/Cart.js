import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const user = <FontAwesomeIcon icon={faUser} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    // console.log(props);
    const { cart } = props;
    let total = 0;
    for (const profile of cart) {
        total = total + profile.salary;

    }

    return (
        <div className='cart-top'>

            <h3>{user} Hired models:{props.cart.length} </h3>
            <h3>{dollar} Total Cost: ${total}</h3>

        </div>
    );
};

export default Cart;