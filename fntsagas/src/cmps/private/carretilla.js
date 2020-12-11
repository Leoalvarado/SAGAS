import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { DeleteForever, MdPayment} from '@material-ui/icons';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./carretilla.css";

const dummydata = [
    {"_id":1, "label":"Nombre: Desayuno", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":1, "label":"Contenido 1", "count":1}
];

const Carretilla = ()=>{

    const listElements = dummydata.map((o) =>{
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