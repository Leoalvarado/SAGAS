import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./lista.css";

const dummydata = [
    {"_id":1, "label":"Contenido 1", "count":1},
];

const Lista = ()=>{

    const listElements = dummydata.map((o) =>{
    return (<li key={o._id}>{o.label}<span>{o.count}</span></li>)
    })

    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="_" footer={true}>
           <section className="listasection">
                <img src={logo} className="logoex"/>
                <h1>Hesler Ferrera</h1>                
           </section>

        </Page>
    )
}
export default Lista;