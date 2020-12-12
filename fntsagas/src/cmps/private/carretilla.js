import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { DeleteForever, MdPayment} from '@material-ui/icons';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {naxios} from '../../utlts/Axios';
import "./carretilla.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';


const Carretilla = ()=>{

    const [{prods}, dispatch] = useStateContext();

    const listElements = prods.products.map((o) =>{
    return (<li key={o._id}>
    <div><img src={logo} className="imgProduct"/></div>
    <div className="datosProduct">
        <div>{o.label}</div>
        <div>{o.label}</div>
        <div>{o.label}</div>
    </div>
    <div className="cantidadProduct">
        <button>+</button>
        {o.count}
        <button>-</button>        
    </div>
    <button><DeleteForever size="1.5em"/></button>
    </li>)
    })

    useEffect(
        ()=>{
            dispatch({ type: PRODUCT_LOADING})
            naxios.get('/api/carretilla/all')
            .then(({data})=>{
                dispatch({type:PRODUCT_LOADED, payload:data});
                console.log(data);
            })
            .catch((ex)=>{
                dispatch({ type: PRODUCT_ERROR});
                console.log(ex)
            });
        }
    );

    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="Mi Carretilla" footer={true}>
           <section className="listaCarretilla">

                <ul className="listShop">
                    {listElements}
                </ul>
                <div className="factura">
                    <div className="datoFactura">Cantidad Productos: </div><div className="datoFactura">2</div>
                    <div className="datoFactura">Total Orden:</div><div className="datoFactura">Lps. 200.00</div> 
                    <button className="Pagar">Pagar orden</button>
                </div>
           </section>

        </Page>
    )
}
export default Carretilla;