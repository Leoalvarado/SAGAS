import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {Settings} from '@material-ui/icons';
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

           <div className="menuadm">
               <button onClick={(e)=>{setRedirect("/MenuAdm")}}><Settings size="1.5em"></Settings></button>
           </div>

        </Page>
    )
}
export default Menup;