import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons'


const SocialBar = () => (

    <div className='social-bar'>
        <a href='https://www.facebook.com/womenofwinetc/' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href='https://www.instagram.com/lakesandgrapes/' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href='https://www.pinterest.com/lakesandgrapes/' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterestP} size="2x" />
        </a>
    </div>
    
)

export default SocialBar;