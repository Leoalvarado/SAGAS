import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./Menup.css";

const Menup = ()=>{

     let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="_" footer={true}>
           <section className="menpsection">
                <img src={logo} className="logoex"/>

                    <button onClick={(e)=>{setRedirect("/cumple")}}>CUMPLEAÑOS</button>
                    <button onClick={(e)=>{setRedirect("/eventos")}}>EVENTOS</button>
                    <button onClick={(e)=>{setRedirect("/fiestas")}}>FIESTAS</button>
                    <button onClick={(e)=>{setRedirect("/flores")}}>ARREGLOS FLORALES</button>
           </section>

        </Page>
    )
}
export default Menup;