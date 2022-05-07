import ReactDOM from 'react-dom';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-body'>
            <SocialIcon className='social-icon' fgColor="#ffff" style={{ height: 40, width: 40 }} url="https://www.facebook.com/Jahidhassan2424/" />

            <SocialIcon className='social-icon' fgColor="#ffff" style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/jahid-hassan-2b479516a/" />

            <SocialIcon className='social-icon' style={{ height: 40, width: 40 }} network="twitter" fgColor="#ffff" url="https://twitter.com/jahid_hassan_" />

            <p >All Right Reserved © Dental Care, {year}</p>
        </div>
    );
};

export default Footer;