import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Profile.css'

const Profile = () => {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        fetch('./profiles.JSON')
            .then(res => res.json())
            .then(data => setProfiles(data));
    }, [])
    return (
        <div className='container'>
            <div className="profile-container">
                {/* <h1>Profiles:{profiles.length} </h1> */}
                {
                    profiles.map(profile => <Person profile={profile}></Person>)
                }
            </div>
            <div className="cart-container">
                <h3>Choosed profiles: </h3>
                <h4>Hired models: </h4>
                <h4>Total Cost: </h4>
            </div>


        </div>
    );
};

export default Profile;