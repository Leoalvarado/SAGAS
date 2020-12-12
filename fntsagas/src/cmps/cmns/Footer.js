
import {MdHome} from 'react-icons/md';
//import {FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaUserPlus, FaYoutube} from 'react-icons/fa';
import { Home, Category, AddShoppingCart, EmojiPeople } from '@material-ui/icons';
import { IoMdHand } from 'react-icons/io';
import  {Link, NavLink} from 'react-router-dom';
//import SocialMediaIcons from 'react-social-media-icons';
import { FcGoogle } from 'react-icons/fc';



// import React from 'react';
// import  ReactDOM  from  'react-dom';
// import {SocialMediaIconsReact} from 'social-media-icons-react';
// ReactDOM.render(<SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle"/>,	document.getElementById('root'));

import "./Footer.css";
const Footer = ()=>{
  return (
    <footer>
      <nav>
        <ul>
            <li><NavLink to="/Menup"><Home size="1.5em"/></NavLink></li>
            <li><NavLink to="/promo"><Category size="1.5em"></Category></NavLink></li> 
            <li><NavLink to="/carretilla"><AddShoppingCart icon="dashboard" size="1.5em" /></NavLink></li>
            <li><NavLink to="/"><EmojiPeople icon="dashboard" size="1.5em" /></NavLink></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
/*

<li><NavLink to="/"><MdHome size="1.5em"/></NavLink></li>
        <li><NavLink to="/login"><FaUserPlus size="1.5em"></FaUserPlus></NavLink></li> 
        <li><NavLink to="/signin"><IoMdHand size="1.5em"></IoMdHand></NavLink></li>
        <li><NavLink to="/productos"><IoMdHand size="1.5em"></IoMdHand></NavLink></li>
        </ul>
        <div class="footer-main-div">
            <div class="footer-social-icons">
                <ul>
                    {/* <li><FcGoogle size="35"/></li> }
                    <li><NavLink to="/"><FaFacebook size="1.5em"/></NavLink></li>
                    <li><NavLink to="/"><FaInstagram size="1.5em"/></NavLink></li>
                    <li><NavLink to="/"><FaTwitter size="1.5em"/></NavLink></li>
                    <li><NavLink to="/"><FaYoutube size="1.5em"/></NavLink></li>

**/
