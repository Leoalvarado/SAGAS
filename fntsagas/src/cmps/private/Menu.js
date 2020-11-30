import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import Page from '../cmns/Page';
import "./Menu.css";

const dummydata = [
    {"_id":1, "label":"Contenido 1", "count":1},
    {"_id":2, "label":"Contenido 2", "count":1},
    {"_id":3, "label":"Contenido 3", "count":1},
    {"_id":4, "label":"Contenido 4", "count":1},
    {"_id":5, "label":"Contenido 5", "count":1},
    {"_id":6, "label":"Contenido 6", "count":1},
    {"_id":7, "label":"Contenido 7", "count":1},
    {"_id":8, "label":"Contenido 8", "count":1},
    {"_id":9, "label":"Contenido 9", "count":1},
    {"_id":10, "label":"Contenido 10", "count":1},
    {"_id":11, "label":"Contenido 11", "count":1},
    {"_id":12, "label":"Contenido 12", "count":1},
    {"_id":13, "label":"Contenido 13", "count":1},
    {"_id":14, "label":"Contenido 14", "count":1},
    {"_id":15, "label":"Contenido 15", "count":1},
    {"_id":16, "label":"Contenido 16", "count":1},
];

const Menu = ()=>{

    const listElements = dummydata.map((o) =>{
    return (<li key={o._id}>{o.label}<span>{o.count}</span></li>)
    })

    let[redirect,setRedirect]=useState("");
    if(redirect!==""){
        return(<Redirect to={redirect}></Redirect>);
    }
    return(
        <Page heading="Sagas's Menu" footer={true}>
           <ul className="menuList">
               {listElements}
           </ul>

        </Page>
    )
}
export default Menu;