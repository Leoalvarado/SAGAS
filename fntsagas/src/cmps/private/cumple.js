// Guapo

import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AddButton } from '../cmns/Buttons';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {paxios} from '../../utlts/Axios';  
import "./cumple.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';


const Cumple = ()=>{

    const [{prods}, dispatch] = useStateContext();
    const history = useHistory();
    const listElements = prods.products.map((o) =>{
    return (
        <li key={o._id}>
            <div className="title">
                {o.sku}
            </div>
            <b className="nombre"> 
                {o.name}
            </b>
            <b className="precio">
                {o.precio}
            </b>
            
            <a className="buttom" href="#"><b>Add to Cart</b></a>
        </li>)
    })

    
    useEffect(
        ()=>{
            dispatch({ type: PRODUCT_LOADING})
            paxios.get('api/productos/productoCategoria/Cumpleaños')  // ese ultimo pleca nos jala exclusivamente solo para cumple y es lo que debemos hacer!
            .then(({data})=>{
                dispatch({type:PRODUCT_LOADED, payload:data});
                console.log(data);
            })
            .catch((ex)=>{
                dispatch({ type: PRODUCT_ERROR});
                console.log(ex)
            });
        },[]
            );


    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="Cumpleaños" footer={true}>
           <section className="listasection"> 
                <ul className="menuList">
                    {listElements}
                </ul>
                
           </section>
        </Page>
    )
}
export default Cumple;