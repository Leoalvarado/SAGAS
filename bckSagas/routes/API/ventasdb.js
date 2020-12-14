const express = require("express");
let router = express.Router();

let ventasModel = require('../../models/ventas/ventas.model');
const mdbVentasModel = new ventasModel();

router.get('/mostrarVentas', async (req, res)=>{
    try {
        let rsltset = await mdbVentasModel.getVentas();
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});

router.get('/ventas/:date', async (req, res)=>{
    try {
        let { date } = req.params;
        let rsltset = await mdbVentasModel.getByDate({date:date});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 

router.get('/totalComprasCliente/:id', async (req, res)=>{
    try {
        let { id } = req.body
        let rsltset = await mdbVentasModel.getTotalComprasCliente(id);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
});
   
router.post('/nuevaVenta', async (req, res)=>{
    try {
        let { date, idCliente, nombre, correo, direccion} = req.body;
        iva = Number(iva);
        descuento = Number(descuento);
        total = Number(total);
        var rsltset = await mdbVentasModel.addVenta({date, cliente : {"idCliente": idCliente, "nombre": nombre, "correo": correo}});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
}); 

router.put('/agregarProductoVenta/:id', async (req, res)=>{
    try {
        let { id } = req.params;
        let { idProducto, sku, nombre, precio} = req.body;
        precio = Number(precio);
        var rsltset = await mdbVentasModel.addProductoVenta(id, idProducto, sku, nombre, precio);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

router.get('/totalVenta/:id', async (req, res)=>{
    try {
        let { id }= req.params;
        var rsltset = await mdbVentasModel.addProductoVenta(id);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

router.put('/quitarProductoVenta/:id', async (req, res)=>{
    try {
        let { id } = req.params;
        let { idProducto} = req.body;
        var rsltset = await mdbVentasModel.deleteProductoVenta(id, idProducto);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

module.exports = router;
