import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./promociones.css";



const galeria =[

//require("./../public/img/SagasCreationLogo"),
//require("./../public/img/SagasCreationLogo"),
//require("./../public/img/SagasCreationLogo"),
//require("./../public/img/SagasCreationLogo"),

];



const Promociones = ()=>{


    const imagelist = galeria.map((img) =>{
        return(
                    <div>
                        <img src={img} with="100%"/>
                    </div>    
            )
        })

     /*
     const listElements = dummydata.map((o) =>{
    return (<li key={o._id}>{o.label}<span>{o.count}</span></li>)
    })
     */   
        

     let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    
    return(
        <Page heading="_" footer={true}>
           <section className="promsection">
                <img src={logo} className="logoex"/>
                <div className="galeria">
                    {imagelist}
                </div>            
           </section>

        </Page>
    )
}
export default Promociones;