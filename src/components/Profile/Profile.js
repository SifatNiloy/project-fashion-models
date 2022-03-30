import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hired from '../Hired/Hired';

import Person from '../Person/Person';
import './Profile.css'

const Profile = () => {
    const [profiles, setProfiles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./profiles.JSON')
            .then(res => res.json())
            .then(data => setProfiles(data));
    }, [])
    const handleTotal = (profile) => {
        if (cart.indexOf(profile) === -1) {
            const newCart = [...cart, profile];
            setCart(newCart);
            for (var i = 0; i < newCart.length; i++) {
                // console.log(newCart[i].name);
            }
        }
        else {
            alert("you can't hire same model 2 times");
        }
    }

    return (
        <div className='container'>
            <div className="profile-container">
                {
                    profiles.map(profile => <Person
                        profile={profile}
                        key={profile.id}

                        handleTotal={handleTotal}>

                    </Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <div>
                    <Hired cart={cart}></Hired>
                </div>

            </div>



        </div>
    );
};

export default Profile;