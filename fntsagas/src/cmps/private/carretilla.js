import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import { DeleteForever, Payment, Cancel} from '@material-ui/icons';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import {naxios} from '../../utlts/Axios';
import "./carretilla.css";
import {useStateContext } from '../../utlts/Context';
import { PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_LOADING } from '../../utlts/store/reducers/prods.reducer';
import {naxios as axios, setJWT} from '../../utlts/Axios';

const Carretilla = ()=>{    
    
    const [{prods}, dispatch] = useStateContext();

    function aumentarCantidad(e){
        naxios.put('/api/carretilla/addOne/'+e)
        .then(({data})=>{
            dispatch({type:PRODUCT_LOADED, payload:data});
            console.log(data);
        })
        .catch((ex)=>{
            dispatch({ type: PRODUCT_ERROR});
            console.log(ex)
        });    
    window.location.reload();  
    }

    function disminuirCantidad(e){
        naxios.put('/api/carretilla/delOne/'+e)
        .then(({data})=>{
            dispatch({type:PRODUCT_LOADED, payload:data});
            console.log(data);
        })
        .catch((ex)=>{
            dispatch({ type: PRODUCT_ERROR});
            console.log(ex)
        });    
    window.location.reload();  
    }
    
    const totalFactura = prods.products.reduce((sum, o)=>{
        sum += (parseFloat(o.price));
        return sum;
    }, 0);

    const totalCantidadProducts = prods.products.reduce((sum, o)=>{
        sum += (parseFloat(o.cantidad));
        return sum;
    }, 0);

    const listElements = prods.products.map((o) =>{
    return (<li key={o.id}>
    <div><img src={logo} className="imgProduct"/></div>
    <div className="datosProduct">
        <div id="sku">{o.sku}</div>
        <div id="name">{o.name}</div>
        <div id="price">{o.price}</div>
    </div>
    <div className="cantidadProduct">
        <button onClick={()=>aumentarCantidad(o.id)}>+</button>
        <div>{o.cantidad}</div>
        <button onClick={()=>disminuirCantidad(o.id)}>-</button>        
    </div>
    <button className="btnEliminar"><DeleteForever size="1.5em"/></button>
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
        },[]
    );

    

    const cancelar = (e)=>{
        naxios.post('/api/carretilla/delAll')
            .then(({data})=>{
                dispatch({type:PRODUCT_LOADED, payload:data});
                console.log(data);
            })
            .catch((ex)=>{
                dispatch({ type: PRODUCT_ERROR});
                console.log(ex)
            });            
        window.location.reload();            
        //setRedirect("/MenuAdm");
    }

    function pagar(e) {
        alert('Pago realizado con exito.');
        cancelar();
    }
    

    /*function correo(){
        dispatch({ type: PRODUCT_LOADING})
        naxios.get('/api/carretilla/allCliente')
        .then(({data})=>{
            dispatch({type:PRODUCT_LOADED, payload:data});
            console.log(data);
        })
        .catch((ex)=>{
            dispatch({ type: PRODUCT_ERROR});
            console.log(ex)
        });
    };*/

    const vender = (e)=>{
        let fecha = new Date();
        //alert(correo());
        naxios.post('/api/ventas/nuevaVenta', {"date":(fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear())})
           /* .then(({data})=>{
                dispatch({type:PRODUCT_LOADED, payload:data});
                console.log(data);
            })
            .catch((ex)=>{
                dispatch({ type: PRODUCT_ERROR});
                console.log(ex)
            });       */
    };

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
    <div className="datoFactura">Cantidad Productos: </div><div className="datoFactura">{totalCantidadProducts}</div>
                    <div className="datoFactura">Total Orden:</div><div className="datoFactura">{totalFactura}</div> 
                    <button className="Pagar" onClick={pagar}>Pagar orden  <Payment font-size="small"/></button>
                    <button className="Cancelar" onClick={cancelar}>Cancelar orden  <Cancel font-size="small"/></button>
                </div>
           </section>

        </Page>
    )
}
export default Carretilla;