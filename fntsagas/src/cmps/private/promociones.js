import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./promociones.css";
import InfiniteScroll from 'react-infinite-scroller';
import img1 from "../public/img/promo1.png";
import img2 from "../public/img/promo2.png";
import img3 from "../public/img/promo3.png";
import img4 from "../public/img/promo4.png";
import img5 from "../public/img/promo5.png";
import img6 from "../public/img/promo6.png";
import img7 from "../public/img/promo7.png";
import img8 from "../public/img/promo8.png";
import img9 from "../public/img/promo9.png";
import img10 from "../public/img/promo10.png";


const Promociones = ()=>{

     let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    
    return(
        <Page heading="Promociones" footer={true}>
           <section className="promsection">
                
                <div className="galeria">
                    <img src={img1}/>
                    <button onClick={(e)=>{setRedirect("/eventos")}}>Ver Producto</button>
                </div>          

                <div className="galeria">
                    <img src={img2}/>
                    <button onClick={(e)=>{setRedirect("/cumple")}}>Ver Producto</button>
                </div>

                <div className="galeria">
                    <img src={img3}/>
                    <button onClick={(e)=>{setRedirect("/flores")}}>Ver Producto</button>
                </div> 

                <div className="galeria">
                    <img src={img4}/>
                    <button onClick={(e)=>{setRedirect("/cumple")}}>Ver Producto</button>
                </div>   

                <div className="galeria">
                    <img src={img5}/>
                    <button onClick={(e)=>{setRedirect("/flores")}}>Ver Producto</button>
                </div>   

                <div className="galeria">
                    <img src={img6}/>
                    <button onClick={(e)=>{setRedirect("/eventos")}}>Ver Producto</button>
                </div>   

                <div className="galeria">
                    <img src={img7}/>
                    <button onClick={(e)=>{setRedirect("/fiestas")}}>Ver Producto</button>
                </div>   

                <div className="galeria">
                    <img src={img8}/>
                    <button onClick={(e)=>{setRedirect("/cumple")}}>Ver Producto</button>
                </div>   

                <div className="galeria">
                    <img src={img9}/>
                    <button onClick={(e)=>{setRedirect("/cumple")}}>Ver Producto</button>
                </div>   

                <div className="galeria">
                    <img src={img10}/>
                    <button onClick={(e)=>{setRedirect("/fiestas")}}>Ver Producto</button>
                </div>             
                <div>
                    <br></br>
                    <br></br>
                    </div>   
           </section>

        </Page>
    )
}
export default Promociones;