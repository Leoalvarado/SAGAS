import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {AccountCircle, VpnKey} from '@material-ui/icons';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./Login.css";
import { LOGIN_FETCHING, LOGIN_FETCHING_FAILED, LOGIN_SUCCESS } from '../../utlts/store/reducers/auth.reducer';
import {naxios as axios, setJWT} from '../../utlts/Axios';


import {useStateContext} from '../../utlts/Context';
const Login = ()=>{
    //const [email,setEmail]=useState("");
    //const [pswd,setPassword]=useState("");

        const [form,setForm]= useState({

            email:'',
            password:''
        });
        
        const [, dispatch] = useStateContext();
        const routeHistory = useHistory();
        const location = useLocation();

        const onChange = (e)=>{
            const {name, value} = e.target;
            setForm({
                ...form,
                [name]:value,
            });    
        }
    //capturamos los datos del formulario
    
    
    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    
    /*
    const onLogin = (e)=>{
            const{email,password}=form;
            console.log(email);
            console.log(password);
            setRedirect("/Menu");
    }
        */
        
       let { from } = location.state || { from: { pathname: "/Menup" } };
       const onLogin = (e)=>{
         const { email, password} = form;
         //call a model (axios)
         dispatch({ type: LOGIN_FETCHING });
         axios.post(
           '/api/seguridad/login',
            {email, password}
         ).then(({data})=>{
           dispatch({type:LOGIN_SUCCESS, payload:data});
           setJWT(data.jwt);
           routeHistory.replace(from);
         }).catch((err)=>{
           dispatch({ type: LOGIN_FETCHING_FAILED });
           alert("Credenciales no validas");
           console.log(err);
         })
        }
         return(
        <Page heading="Iniciar Sesion" footer2={true}>
           <section className="loginsection">
           <img src={logo} className="logoex"/>
            <div className="Cajalogin">   
            <div>
                <div className="iconlog" >
                    <AccountCircle  size="2em"></AccountCircle>
                </div>
                <input type="text" name="email" value={form.email} onChange={onChange} placeholder="Correo Electrónico"></input>
            </div>
            <div>
                <div className="iconkey" >
                        <VpnKey  size="2em"></VpnKey>
                </div>
              <input type="password" name="password" value={form.password} onChange={onChange} placeholder="Contraseña"></input>
            </div>
           <button onClick={onLogin}>Iniciar Sesión</button>
           </div>
           </section>


        </Page>
    )
   
}
export default Login;