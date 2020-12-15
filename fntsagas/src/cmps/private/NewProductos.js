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
import upload from '../cmns/uploadImg';


const NewProduct = ({setImages, images})=>{

    const [, dispatch] = useStateContext();
    
    const [sku, setSku]= useState("")
    const [name, setName]= useState("")
    const [categoria, setCategoria]= useState("")
    const [precio, setPrecio]= useState("")
    const [file, setFile]= useState()
    const [pathImage, setPathImage]= useState("http://localhost:3000/public/img/Prueba.jpg")
    const history = useHistory();
    
    const addNewProducto = (e)=>{
      alert("Probando")
      
      e.preventDefault();
      e.stopPropagation();
      upload.sendImages(sku,name,categoria,precio,file).then((data) =>{
        console.log("el resultado es :", data)
        //dispatch({ type: PRODUCT_RESET});
       // history.push("/productos");
        alert("Producto Agregado Correctamente")
      }).catch((ex)=>{
        console.log(ex);
        alert("Algo salio mál al ingresar");
      })
    }        
    
    const onFileChange = (e) =>{
      if(e.target.files && e.target.files.length > 0){
        const file = e.target.files[0]
        if(file.type.includes("image")){
          const reader = new FileReader()
          reader.readAsDataURL(file)

          reader.onload = function load(){
            setPathImage(reader.result)
          }
          setFile(file)
        }else{
          console.log("Hay un error al cargar la imagen")
        }  
        
      }
    }


    return (
      <Page heading="Nuevo Producto" footer= {true}>
      <img src={logo} className="logoex"/>
        <form>        
        <section className = "formulario">
          <label>Codigo:</label>
          <input
              type = "text"
              placeholder = "Ejemplo: PRD001"
              className = "sku"
              onChange ={(e)=> setSku(e.target.value)} 
          />
          <br/>
          <label>Nombre:</label>
          <input
              type = "text"
              placeholder = "Ejemplo Arreglos"
              className = "name"
              onChange ={(e)=> setName(e.target.value)} 
          />
          <br/>
          <label>Categoria:</label>
          <input
              type = "text"
              placeholder = "Cumpleaños, Eventos,Fiestas"
              className = "categoria"
              onChange ={(e)=> setCategoria(e.target.value)} 
          />
          <br/>
          <label>Precio:</label>
          <input className="categoria"
              type = "number"
              placeholder = "0"
              onChange ={(e)=> setPrecio(e.target.value)} 
          />
          <br/>
          <div className = "contenedor">
          <label>Imagen:</label>
          <input
              type = "file"
              placeholder = "file"
              className = "imagen"
              onChange = {onFileChange}
          />
          <img className = "img-container" src = {pathImage} alt = "Image"/>
          </div>
          <br/>
        </section>
        <section className= "botones">
          <PrimaryButton  className= "btnaceptar" onClick={addNewProducto}>Agregar</PrimaryButton>
          <SecondaryButton className= "btncancelar" onClick={() => { history.push("/MenuAdm") }}>Cancelar</SecondaryButton>
        </section>
        </form>

      </Page>
    );
}

export default NewProduct;
