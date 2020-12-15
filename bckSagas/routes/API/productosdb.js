const express = require("express");
let router = express.Router();
const storage = require('./multer') 
const multer = require('multer')

let productosModel = require('../../models/productos/productos.model');
const mdbProductosModel = new productosModel();

const uploader = multer({storage})

router.get('/productoCategoria/:categoria', async (req, res)=>{
    try {
        let { categoria } = req.params;
        let rsltset = await mdbProductosModel.getProductoPorCategoria({categoria: categoria});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 

router.get('/productosAll', async (req, res)=>{
    try {
        let rsltset = await mdbProductosModel.getProductosAll();
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 

router.post('/nuevoProducto', uploader.single('imagen'), async (req, res)=>{
    try {
        const {file} = req;

        let {sku, name, categoria, precio, stock=0} = req.body;
        precio = Number(precio);
        stock = Number(stock);
        let urlImg = req.file;
        
        if(file){
            urlImg = `http://localhost:3000/public/${file.filename}`
        }
        var rsltset = await mdbProductosModel.addProducto({sku, name, categoria, precio,urlImg});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
}); 

router.put('/actualizarPrecioProducto/:id', async (req, res)=>{
    try {
        let { id } = req.params;
        let { precio } = req.body;
        precio = Number(precio);
        let rsltset = await mdbProductosModel.updateProductoXId(id, precio);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

router.delete('/eliminarProducto/:id', async (req, res)=>{
    let {id} = req.params;
    try {

        let rslt = await mdbProductosModel.removeProducto(id);
        res.status(200).json(rslt);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

module.exports = router;
