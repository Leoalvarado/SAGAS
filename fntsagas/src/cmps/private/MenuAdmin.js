import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./MenuAdmin.css";

const MenuAdmin = ()=>{

     let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="_" footer={true}>
           <section className="menadmsection">
                <img src={logo} className="logoex"/>

                    <button onClick={(e)=>{setRedirect("/productos")}}>Ingresar Productos</button>
                    <button onClick={(e)=>{setRedirect("/delete")}}>Eliminar Productos</button>
                    <button onClick={(e)=>{setRedirect("/Actualizar")}}>Modificar Productos</button>
           </section>

        </Page>
    )
}
export default MenuAdmin;