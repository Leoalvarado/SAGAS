const express = require("express");
let router = express.Router();
const fs = require("fs");
let productosArray = [];

const writeToFile = ()=>{
    fs.writeFileSync('carretilla.json', JSON.stringify(productosArray));
  }

router.get('/all', (req, res)=>{
    res.status(200).json(productosArray);
});

router.post('/new', (req, res)=>{
    let total = 0;
    let cantidadProducts = 0;
    let cantidad = 1;
    const {sku, name, price} = req.body;
    const id = productosArray.length + 1;
    productosArray.push({id, sku, name, cantidad, price});
    productosArray.map( (o, i)=>{
        total += parseFloat(o.price);
        cantidadProducts++;
    })    
    res.status(200).json({productosArray, cantidadProducts, total});
});

router.put('/upd/:id', (req, res)=>{
    try {
        let {id} = req.params;
        id = Number(id);
        let temporal = 0;
        let newCarretillaArray = productosArray.map((o,i)=>{
            if(o.id === id){
                modified = true;
                temporal = o.price / o.cantidad;
                o.cantidad += 1;
                o.price = (parseFloat(temporal) * parseFloat(o.cantidad));
                product = o;
                console.log(temporal);
            }
            return o;
        });
        productosArray = newCarretillaArray;
        res.status(200).json({modified, product});    
    } catch (error) {
        console.log(error)
    }
    
});

router.delete('/del/:id', (req, res)=>{
    try {
        let {id} = req.params;
    id = Number(id);
    let deleted = false;
    let carretilla = null;
    let total = 0;
    let cantidadProducts = 1;
    let newCarretillaArray = productosArray.find((o,i)=>{
        if(o.id !== id){
            return true;
        }else {
            deleted = true;
            carretilla = o;
            return false;
        }
    });
    productosArray = newCarretillaArray;
    //writeToFile(); 

    res.status(200).json({deleted, carretilla});
        
    } catch (error) {
        console.log(error);
    }
    
   
    
});


module.exports = router;