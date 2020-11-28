const express = require("express");
let router = express.Router();

let productosModel = require('../../models/productos/productos.model');
const mdbProductosModel = new ventasModel();


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

router.post('nuevoProducto', async (res, req)=>{
    try {
        let {sku, name, categoria, precio, stock} = req.body;
        precio = Number(price);
        stock = Number(stock);
        var rsltset = await mdbVentasModel.addProducto({sku, name, categoria, precio, stock});
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
}); 

router.put('actualizarPrecioProducto', async (res, req)=>{
    try {
        let {sku , precio} = req.body;
        precio = Number(precio);
        let rsltset = await mdbVentasModel.updateProductoXId({sku, precio});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

module.exports = router;
