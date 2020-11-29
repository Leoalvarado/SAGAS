import {useState} from 'react';
import {BiUser}from 'react-icons/bi'
import {BiKey}from 'react-icons/bi'
import Page from '../cmns/Page';
import "./Registro.css";


const Registro = ()=>{
    //const [email,setEmail]=useState("");
    //const [pswd,setPassword]=useState("");
// AGREGAR NOMBRE, TELEFONO
        const [form,setForm]= useState({
            nombre:'',
            apellido:'',
            tel:'',
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
            const{nombre,apellido,tel,email,password}=form;
            console.log(nombre);
            console.log(apellido);
            console.log(tel);
            console.log(email);
            console.log(password);
    }

    return(
        <Page heading="Registrarse" footer={true}>
           <section className="loginsection">
            <div className="Cajalogin">
            <div>
                <input type="text" name="nombre" value={form.nombre} onChange={onChange} placeholder="Nombre"></input>
            </div> 
            <div>
                <input type="text" name="apellido" value={form.apellido} onChange={onChange} placeholder="Apellido"></input>
            </div>
            <div>
                <input type="text" name="tel" value={form.tel} onChange={onChange} placeholder="Teléfono"></input>
            </div>  
            <div>
                <input type="text" name="email" value={form.email} onChange={onChange} placeholder="Correo Electrónico"></input>
            </div>
            <div>
              <input type="password" name="password" value={form.password} onChange={onChange} placeholder="Contraseña"></input>
            </div>
           <button onClick={onLogin}>Registrarse</button>
           </div>
           </section>
        </Page>
    )
   
}
export default Registro;