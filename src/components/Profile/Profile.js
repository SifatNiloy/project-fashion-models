import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        const newCart = [...cart, profile];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="profile-container">
                {
                    profiles.map(profile => <Person
                        profile={profile}
                        handleTotal={handleTotal}>

                    </Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Profile;