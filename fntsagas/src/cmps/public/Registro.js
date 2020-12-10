import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {AccountCircle,PeopleAltRounded,ContactPhone,EmailRounded,VpnKeyRounded } from '@material-ui/icons';
import logo from "../public/img/SagasCreationLogo.png";
import Page from '../cmns/Page';
import "./Registro.css";
import {axios} from 'axios';
//import {naxios as axios, setJWT} from '../../utlts/Axios';




const Registro = ()=>{
    //const [email,setEmail]=useState("");
    //const [pswd,setPassword]=useState("");
// AGREGAR NOMBRE, TELEFONO
        const [form,setForm]= useState({
            nombre:'',
            apellido:'',
            telefono:'',
            email:'',
            password:''
        });

        const onChange = (e)=>{
            const {name, value} = e.target;
            setForm({
                ...form,
                [name]:value,
            });    
        }
            /*let onChange = (e)=>{
                console.log(e.target);
                if(e.target.name=="Email"){
                    setEmail(e.target.value);
                }

                if(e.target.name=="Pswd"){
                    setPassword(e.target.value);
                }
                */

               let[redirect,setRedirect]=useState("");
               if(redirect!==""){
                   return(<Redirect to={redirect}></Redirect>);
               }
               
    //capturamos los datos del formulario
    const onRegister = (e)=>{
            const{email,nombre,apellido,password,telefono}=form;
            console.log(nombre);
            console.log(apellido);
            console.log(telefono);
            console.log(email);
            console.log(password);
            axios.post(
                '/api/seguridad/signin',
                {email,
                 nombre,
                 apellido,
                 password,
                 telefono
                }
                ).then((response) => {
                    console.log(response);
                    setRedirect("/");
                }).catch((err)=>{
                    console.log(err);
                })

    }

    return(
        <Page heading="Registrarse" footer2={true}>
           <section className="registerSection">
           <img src={logo} className="logoex"/>
            <div className="Cajalogin">
                <h2>Ingresa tus Datos Aquí</h2>
            <div className="t1">
                <div className="iconlog" >
                    <AccountCircle  size="2em"></AccountCircle>
                </div>
                <input type="text" name="nombre" value={form.nombre} onChange={onChange}  className="text1" placeholder="Nombre"></input>
            </div> 
            <div className="t2">
                <div className="iconkey" >
                    <PeopleAltRounded  size="2em"></PeopleAltRounded>
                </div>
                <input type="text" name="apellido" value={form.apellido} onChange={onChange} className="text2" placeholder="Apellido"></input>
            </div>

            <div className="t3">
                 <div className="icontel" >
                    <ContactPhone  size="2em"></ContactPhone>
                </div>
                <input type="text" name="telefono" value={form.telefono} onChange={onChange} className="text3" placeholder="Teléfono"></input>
            </div>  
            <div className="t4">
                <div className="icontemail" >
                    <EmailRounded  size="2em"></EmailRounded>
                </div>
                <input type="text" name="email" value={form.email} onChange={onChange} className="text4" placeholder="Correo Electrónico"></input>
            </div>
            <div className="t5">
                <div className="icontraseña" >
                        <VpnKeyRounded  size="2em"></VpnKeyRounded>
                    </div>
                <input type="password" name="password" value={form.password} onChange={onChange} className="text5" placeholder="Contraseña"></input>
            </div>
           <button onClick={onRegister}>Registrarse</button>
           </div>
           </section>
        </Page>
    )
   
}
export default Registro;