import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Page from '../cmns/Page';
import "../private/Menu.css";


const Menu = ()=>{
    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="Sagas's Menu" footer={true}>
           <section className="mensection">

            
           </section>

        </Page>
    )
}
export default Menu;