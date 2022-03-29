import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faHireAHelper, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Person.css'

const Person = (props) => {
    // console.log(props)
    const { name, image, age, email, experience, gender, phone, salary } = props.profile;
    const hire = <FontAwesomeIcon icon={faHireAHelper} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const youtube = <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
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
            <div className='social-icon'>
                <h1 className='icon'> <a href="http://www.youtube.com">{youtube}</a></h1>
                <h1 className='icon'> <a href="http://www.facebook.com">{facebook}</a></h1>
                <h1 className='icon'> <a href="http://www.twitter.com">{twitter}</a></h1>
            </div>
            <button onClick={() => props.handleTotal(props.profile)} className='hire-btn'> {hire} <b>Hire now</b> </button>
        </div>
    );
};

export default Person;