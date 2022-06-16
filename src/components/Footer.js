import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <a className="twitter" href="https://twitter.com/Shreypilot"><FontAwesomeIcon icon={faFacebook} /> </a>
            <a href="https://www.facebook.com/profile.php?id=100050793819498"><FontAwesomeIcon icon={faTwitter} /> </a>
            <a href="https://www.instagram.com/champ_juhie/"><FontAwesomeIcon icon={faInstagram} /> </a>
            <a href="https://github.com/shreypilot"><FontAwesomeIcon icon={faGithub} /> </a>
        </div>
    )
}