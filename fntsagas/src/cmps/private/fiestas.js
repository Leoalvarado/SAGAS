import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {naxios, paxios} from '../../utlts/Axios';  
import "./fiestas.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';
import promo1 from "../public/img/promo1.png";


const Fiestas = ()=>{

    const [{prods}, dispatch] = useStateContext();
    function addToCart( sku, name, price){
        naxios.post('/api/carretilla/new', {"sku":sku,"name": name,"price": price})
        .then(({data})=>{
            //dispatch({type:PRODUCT_LOADED, payload:data});
            console.log(data);
        })
        .catch((ex)=>{
            //dispatch({ type: PRODUCT_ERROR});
            console.log(ex)
        });    
    //window.location.reload(); 
    }
    const listElements = prods.products.map((o) =>{
    return (
        <li key={o._id}>
            <div class="img-container">
                <img src={o.urlImg}/>
                <span class="promo">15% de descuento</span>
            </div>
            <div>
                {o.sku}
            </div>
            <b> 
                {o.name}
            </b>
            <b>
                ${o.precio}
            </b>
            <span class="rating">★★★★☆</span>
            <a href="#" class="add-cart" onClick={()=>addToCart( o.sku, o.name, o.precio)}>Añadir al carrito</a>
            {/* <a className="buttom" onClick={()=>addToCart( o.sku, o.name, o.price)}><b>Add to Cart</b></a> */}
            
        </li>)
    })

    useEffect(
        ()=>{
            dispatch({ type: PRODUCT_LOADING})
            paxios.get('/api/productos/productoCategoria/Fiestas')
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
                    <div class="info-container">
                        <h3>
                            <ul className="menuLi">
                                {listElements}
                            </ul>
                        </h3>
                        
                    </div>
                </div>
            </section>
        </Page>
    )
}
export default Fiestas;