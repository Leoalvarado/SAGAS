import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {paxios} from '../../utlts/Axios';  
import "./fiestas.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';


const Fiestas = ()=>{

    const [{prods}, dispatch] = useStateContext();

    const listElements = prods.products.map((o) =>{
    return (
        <li key={o._id}>
            <div>
                {o.sku}
            </div>
            <b> 
                {o.name}
            </b>
            <b>
                {o.precio}
            </b>
            
            <a className="buttom" href="#"><b>Add to Cart</b></a>
        </li>)
    })

    useEffect(
        ()=>{
            dispatch({ type: PRODUCT_LOADING})
            paxios.get('/api/productos/productosAll')
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
        <Page heading="Fiestas" footer={true}>
            <section className="listSec">
                <div class="card estilo-c">
                    <a href="#">
                        <div class="img-container">
                            <img src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="producto 1"></img>
                            <span class="promo">15% de descuento</span>
                        </div>
                    </a>
                    <div class="info-container">
                        <h3>
                            <ul className="menuLi">
                                {listElements}
                            </ul>
                        </h3>
                        <strong>$60</strong>
                        <span class="rating">★★★★☆</span>
                        <a href="#" class="add-cart">Añadir al carrito</a>
                    </div>
                </div>
            </section>
        </Page>
    )
}
export default Fiestas;