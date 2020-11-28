import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Page from '../cmns/Page';
import "./Home.css";


const Home = ()=>{
    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="Bienvenidos">
           <section className="loginsection">

            <button onClick={(e)=>{setRedirect("/login")}}>Iniciar Sesión</button>
            <button onClick={(e)=>{setRedirect("/singin")}}>Registrarse</button>

           </section>

        </Page>
    )
}
export default Home;