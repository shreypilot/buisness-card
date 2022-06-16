import React from "react";
import profileImg from '../images/pass.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGoogle,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
export default function Info() {
    return (
        <div className="info">
           <img className= 'profile_img' src={profileImg} alt="Lesley" />
        <h1 className="card--header">Shreya Kumari</h1>
        <h4 className="card--title">Frontend Developer</h4>
        <h5><a className="card--website" href="http">shreya.website</a></h5>

        <div className="links">
            <a href="shreyasinghnaughty@gmail.com" className="link email"><FontAwesomeIcon icon={faGoogle} />  Email</a>
            <a href="https://www.linkedin.com/in/shreya-kumari-2ba673202/" className="link linkedIn"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            </div>     
        </div>
        
    )
}