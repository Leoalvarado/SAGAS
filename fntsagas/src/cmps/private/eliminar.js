import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {paxios} from '../../utlts/Axios';  
import "./fiestas.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';




const Eliminar = ()=>{


    function deleter(iden){
        paxios.delete("api/productos/eliminarProducto/"+iden)
        .then(response=>{
            
            alert("Se elimino con exito");
            window.location.reload();
            
        });
    }        
      

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
            <button onClick={()=>deleter(o._id)}> Eliminar </button>
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
        <Page heading="Mantenimiento" footer={true}>
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
                <div>
                    <br></br>
                    <br></br>

                </div>
            </section>
        </Page>
    )
}
export default Eliminar;