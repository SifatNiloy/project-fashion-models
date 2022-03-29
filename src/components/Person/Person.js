import React from 'react';
import './Person.css'

const Person = (props) => {
    console.log(props.profile)
    const { name, image, age, email, experience, gender, phone, salary } = props.profile;
    return (
        <div className='profile-card'>
            <img src={image} alt="" />
            <h3>Name: {name}</h3>
            <p>age:{age}</p>
            <p> email:{email}</p>
            <p>experience: {experience}</p>
            <p>gender: {gender} </p>
            <p>phone: {phone}</p>
            <p>salary: {salary}</p>
        </div>
    );
};

export default Person;