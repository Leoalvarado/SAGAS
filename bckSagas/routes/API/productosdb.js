const express = require("express");
let router = express.Router();

let ventasModel = require('../../models/ventas/ventas.model');
const mdbVentasModel = new ventasModel();


router.get('/productoCategoria/:categoria', async (req, res)=>{
    try {
        let { categoria } = req.params;
        let rsltset = await mdbVentasModel.getByDate({categoria: categoria});
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
        var rsltset = await mdbVentasModel.addVenta({sku, name, categoria, precio, stock});
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
}); 

module.exports = router;