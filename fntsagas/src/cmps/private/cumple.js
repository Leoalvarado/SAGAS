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


<<<<<<< HEAD
/*const dummydata = [
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":2, "label":"Contenido 2", "count":1},
    {"_id":3, "label":"Contenido 3", "count":1},
    {"_id":4, "label":"Contenido 4", "count":1},
    {"_id":5, "label":"Contenido 5", "count":1},
    {"_id":6, "label":"Contenido 6", "count":1},
    {"_id":7, "label":"Contenido 7", "count":1},
    {"_id":8, "label":"Contenido 8", "count":1},
    {"_id":9, "label":"Contenido 9", "count":1},
    {"_id":10, "label":"Contenido 10", "count":1},
    {"_id":11, "label":"Contenido 11", "count":1},
    {"_id":12, "label":"Contenido 12", "count":1},
    {"_id":13, "label":"Contenido 13", "count":1},
    {"_id":14, "label":"Contenido 14", "count":1},
    {"_id":15, "label":"Contenido 15", "count":1},
    {"_id":16, "label":"Contenido 16", "count":1},
];*/

=======
>>>>>>> d31a26669e51a127669cccb7a508f23620702c2f
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
        <Page heading="Cumpleaños" footer={true}>
           <section className="listasection"> 
                <ul className="menuList">
                    {listElements}
                </ul>
                
           </section>
        <AddButton style={{position:"fixed", right:"1em", bottom:"6em"}}onClick={(e) => { history.push('/productos/nuevoProducto')}} >
            </AddButton>
        </Page>
    )
}
export default Cumple;