const express = require("express");
let router = express.Router();
const fs = require("fs");
let productosArray = [];
let clienteArray = []
const writeToFile = ()=>{
    fs.writeFileSync('productos.json', JSON.stringify(productosArray));
}

const readFronFile = ()=>{
    try{
        let tmpJsonStr = fs.readFileSync('productos.json');
        productosArray = JSON.parse(tmpJsonStr);
    }catch(ex){
        productosArray = [];
    }
}

const writeToFileClient = ()=>{
    fs.writeFileSync('cliente.json', JSON.stringify(clienteArray));
}

const readFronFileClient = ()=>{
    try{
        let tmpJsonStr = fs.readFileSync('cliente.json');
        clienteArray = JSON.parse(tmpJsonStr);
    }catch(ex){
        clienteArray = [];
    }
}
/*
router.get('/all', (req, res)=>{
    try {
        let total = 0;
        let cantidadProducts = 0;
        console.log(Object.entries(productosArray).length);
        productosArray.map( (o, i)=>{
            total += parseFloat(o.price);
            cantidadProducts++;
        });     
        readFronFile();
        res.status(200).json({productosArray, cantidadProducts, total});       
    } catch (error) {
        console.log(error);
    }
});*/

router.get('/all', (req, res)=>{
    let total = 0;
    let cantidadProducts = 0;
    console.log(Object.entries(productosArray).length);
    productosArray.map( (o, i)=>{
        total += parseFloat(o.price);
        cantidadProducts++;
    });   
    res.status(200).json(productosArray);
});




router.get('/total' , (req, res)=>{
    try {
        let total = 0;
        let cantidadProducts = 0;
        console.log(Object.entries(productosArray).length);
        productosArray.map( (o, i)=>{
            total += parseFloat(o.price);
            cantidadProducts++;
        });     
        readFronFile();
        res.status(200).json({cantidadProducts, total});       
    } catch (error) {
        console.log(error);
    }
});

router.post('/new', (req, res)=>{
    try {
        let total = 0;
        let cantidadProducts = 0;
        let cantidad = 1;
        const {sku, name, price} = req.body;
        console.log(sku);
        console.log(name);
        console.log(price);
        const id = productosArray.length + 1;
        productosArray.push({id, sku, name, cantidad, price});
        productosArray.map( (o, i)=>{
            total += parseFloat(o.price);
            cantidadProducts++;
        })    
        writeToFile();
        res.status(200).json({productosArray, cantidadProducts, total});    
    } catch (error) {
        console.log(error);
    }
});


router.put('/addOne/:id', (req, res)=>{
    try {
        let {id} = req.params;
        id = Number(id);
        let temporal = 0;
        let modified = false;
        let product = null;
        let newCarretillaArray = productosArray.map((o,i)=>{
            if(o.id == id){
                console.log("Entro compa");
                modified = true;
                temporal = o.price / o.cantidad;
                o.cantidad += 1;
                o.price = (parseFloat(temporal) * parseFloat(o.cantidad));
                product = o;
            }
            return o;
        });
        productosArray = newCarretillaArray;
        writeToFile();
        res.status(200).json({modified, product});    
    } catch (error) {
        console.log(error)
    }
});

router.put('/delOne/:id', (req, res)=>{
    try {
        let {id} = req.params;
        id = Number(id);
        let temporal = 0;
        let modified = false;
        let product = null;
        let newCarretillaArray = productosArray.map((o,i)=>{
            if(o.id === id){
                modified = true;
                temporal = o.price / o.cantidad;
                o.cantidad -= 1;
                o.price = (parseFloat(temporal) * parseFloat(o.cantidad));
                product = o;
                console.log(temporal);
            }
            return o;
        });
        productosArray = newCarretillaArray;
        writeToFile();
        res.status(200).json({modified, product});    
    } catch (error) {
        console.log(error)
    }
});

router.delete('/del/:id', (req, res)=>{
    try {
        let {id} = req.params;
        let deleted = false;
        let carretilla = null;
        //let total = 0;
        //let cantidadProducts = 1;
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
        writeToFile(); 
        res.status(200).json({deleted, carretilla});
    } catch (error) {
        console.log(error);
    } 
}); 

router.post('/delAll', (req, res)=>{
    try {
        productosArray = [];
        writeToFile(); 
        res.status(200).json(productosArray);
    } catch (error) {
        console.log(error);
    } 
}); 
//-----------------------temporal 
router.get('/allCliente', (req, res)=>{
    res.status(200).json(clienteArray);
});

router.post('/newCliente', (req, res)=>{
    try {
        const {cliente} = req.body;
        clienteArray.push({cliente});
        writeToFileClient();
        res.status(200).json({clienteArray});    
    } catch (error) {
        console.log(error);
    }
});

router.post('/delCliente', (req, res)=>{
    try {
        clienteArray = [];
        writeToFileClient(); 
        res.status(200).json(clienteArray);
    } catch (error) {
        console.log(error);
    } 
});

readFronFile();
readFronFileClient();

module.exports = router;