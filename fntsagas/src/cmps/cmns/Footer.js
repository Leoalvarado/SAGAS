import {MdHome} from 'react-icons/md';
import {FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaUserPlus, FaYoutube}from 'react-icons/fa';
import { IoMdHand } from 'react-icons/io';
import  {Link, NavLink} from 'react-router-dom';

import { Home, Category, AddShoppingCart, EmojiPeople } from '@material-ui/icons';

import "./Footer.css";
const Footer = ()=>{
  return (
    <footer>
      <nav>
      <ul>
        <li><NavLink to="/"><Home size="1.5em"/></NavLink></li>
        <li><NavLink to="/login"><Category size="1.5em"></Category></NavLink></li> 
        <li><NavLink to="/productos"><AddShoppingCart icon="dashboard" size="1.5em" /></NavLink></li>
        <li><NavLink to="/productos"><EmojiPeople icon="dashboard" size="1.5em" /></NavLink></li>
        </ul>
      </nav>
      
      
    </footer>
  )
}

export default Footer;


// <div class="footer-main-div">
//             <div class="footer-social-icons">
//                 <ul>
//                     {/* <li><FcGoogle size="35"/></li> */}
//                     <li><NavLink to="/"><FaFacebook size="1.5em"/></NavLink></li>
//                     <li><NavLink to="/"><FaInstagram size="1.5em"/></NavLink></li>
//                     <li><NavLink to="/"><FaTwitter size="1.5em"/></NavLink></li>
//                     <li><NavLink to="/"><FaYoutube size="1.5em"/></NavLink></li>
//                 </ul>
//             </div>
//         </div>


//Footer normal
{/* <ul>
        <li><NavLink to="/"><MdHome size="1.5em"/></NavLink></li>
        <li><NavLink to="/login"><FaUserPlus size="1.5em"></FaUserPlus></NavLink></li> 
        <li><NavLink to="/signin"><IoMdHand size="1.5em"></IoMdHand></NavLink></li>
        <li><NavLink to="/productos"><AddShoppingCart icon="dashboard" size="1.5em" /></NavLink></li>
        </ul> */}