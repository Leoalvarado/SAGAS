import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "../private/Menu.css";


const Menu = ()=>{
    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="_" footer={true}>
            

           <section className="mensection">
                <img src={logo} className="logoex"/>
           </section>

        </Page>
    )
}
export default Menu;