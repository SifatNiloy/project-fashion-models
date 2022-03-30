import React from 'react';
import './Hired.css'

const Hired = (props) => {
    // console.log(props.cart);
    // const { cart } = props;

    return (
        <div className='hired-models'>
            <h1>Selected Models: </h1>

            {

                props.cart.map(a => <div className='selected-profile'><img className='selected-img' src={a.image} alt="" /><h4 className='models'>{a.name}</h4> </div>)
            }
            {/*  */}
            <div>
                {/* */}

            </div>


        </div>
    );
};

export default Hired;