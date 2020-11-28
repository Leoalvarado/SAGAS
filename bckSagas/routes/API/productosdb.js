const express = require("express");
let router = express.Router();

let productosModel = require('../../models/productos/productos.model');
const mdbProductosModel = new productosModel();


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

router.post('/nuevoProducto', async (req, res)=>{
    try {
        let {sku, name, categoria, precio, stock=0} = req.body;
        precio = Number(precio);
        stock = Number(stock);
        var rsltset = await mdbProductosModel.addProducto({sku, name, categoria, precio, stock});
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

module.exports = router;
