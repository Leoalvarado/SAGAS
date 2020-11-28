import Page from '../cmns/Page';
import "./Home.css";


const Home = ()=>{

    return(
        <Page heading="Bienvenidos">
           <section className="loginsection">

           <button>Iniciar Sesion</button>
            <button>Registrarse</button>

           </section>

        </Page>
    )
}
export default Home;