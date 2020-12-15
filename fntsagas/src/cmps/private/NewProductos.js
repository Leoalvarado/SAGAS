import {useState} from 'react';
import {useStateContext } from "../../utlts/Context";
import {paxios} from "../../utlts/Axios";
import {useHistory} from "react-router-dom";
import Page from '../cmns/Page';
import Field from '../cmns/Field';
import Form from '../cmns/Form';
import { SecondaryButton, PrimaryButton } from '../cmns/Buttons';
import { PRODUCT_RESET} from '../../utlts/store/reducers/prods.reducer';
import logo from "../public/img/SagasCreationLogo.png";
import './NewProductos.css';

const NewProduct = ()=>{
    const [, dispatch] = useStateContext();
    const [form, setForm] = useState({sku:'',name:'',categoria:'',precio:0, imagen:''});
    const history = useHistory();
    const onChange = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      const {name, value} = e.target;
      let newForm = { ...form, [name]:value };
      setForm(newForm);
    }
    const addNewProducto = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      paxios.post('/api/productos/nuevoProducto', form)
        .then((data)=>{
          console.log(data);
          dispatch({ type: PRODUCT_RESET});
          history.push("/productos");
          alert("Producto Agregado Correctamente")
           })
        .catch((ex)=>{
          console.log(ex);
          alert("Algo salio mál al ingresar");
        })
    }
    return (
      <Page heading="Nuevo Producto" footer= {true}>
      <img src={logo} className="logoex"/>
        <section className = "formulario">
        <Field
          type="text"
          id="sku"
          placeholder="Código eg: PRD001"
          onChange={onChange}
          caption="Código"
          value={form.sku}
        />
        <Field 
          type="text"
          id="name"
          placeholder="Nombre del Producto"
          onChange={onChange}
          caption="Producto"
          value={form.name}
        />
        <Field 
          type="text"
          id="categoria"
          placeholder="Categoria del Producto"
          onChange={onChange}
          caption="Categoria"
          value={form.categoria}
        />
        <Field
          type="number"
          id="precio"
          placeholder="Precio"
          onChange={onChange}
          caption="Precio"
          value={form.precio}
        />
        
        <Form
          id="imagen"
          type="file"
          placeholder="Selecione una Imagen"
          onChange={onChange}
          caption="Imagen"
         value={form.imagen }
        />
        
        </section>
        <section className= "botones">
          <PrimaryButton  className= "btnaceptar" onClick={addNewProducto}>Agregar</PrimaryButton>
          <SecondaryButton className= "btncancelar" onClick={() => { history.push("/MenuAdm") }}>Cancelar</SecondaryButton>
        </section>
      </Page>
    );
}

export default NewProduct;
