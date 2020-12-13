import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {paxios} from '../../utlts/Axios';  
import "./eliminar.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';
import { DeleteForever} from '@material-ui/icons';


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
            <table class="table">    
                <thead class="thead-dark">
                    <tr>
                    <th>SKU</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Opción</th>  
                    </tr>
                </thead>
                <tbody>
                    <td>{o.sku}</td>
                    <td>{o.name}</td>
                    <td>{o.precio}</td>
                    <td><a class="buttonn" onClick={()=>deleter(o._id)}><DeleteForever size="0.5em"/></a></td>
                </tbody>
            </table>
        )
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
              <section className="listasectionelim"> 
                <div>
                    {listElements}
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