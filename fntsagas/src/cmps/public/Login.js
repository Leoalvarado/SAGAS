import {useState} from 'react';
import {BiUser}from 'react-icons/bi'
import {BiKey}from 'react-icons/bi'
import Page from '../cmns/Page';
import "./Login.css";


const Login = ()=>{
    //const [email,setEmail]=useState("");
    //const [pswd,setPassword]=useState("");

        const [form,setForm]= useState({

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
    //capturamos los datos del formulario
    const onLogin = (e)=>{
            const{email,password}=form;
            console.log(email);
            console.log(password);
    }

    return(
        <Page heading="Iniciar Sesion" footer={true}>
           <section className="loginsection">
            <div className="Cajalogin">   
            <div>
                <div className="iconlog" >
                    <BiUser  size="2em"></BiUser>
                </div>
                <input type="text" name="email" value={form.email} onChange={onChange} placeholder="Correo Electrónico"></input>
            </div>
            <div>
                <div className="iconkey" >
                        <BiKey  size="2em"></BiKey>
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