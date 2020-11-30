const express = require("express");
let router = express.Router();

let promocionesModel = require('../../models/promociones/promociones.models');
const mdbPromociones = new promocionesModel();

//metodo para insertar una promocion
router.get('/promosAll', async (req, res)=>{
    try {
        let rsltset = await mdbPromociones.getPromosAll();
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 

router.post('/promos', async (req, res)=>{
    try {
        let {descripcion, tipoPromo, fechaInicial, fechaFinal} = req.body;
       
        var rsltset = await mdbPromociones.addPromocion({descripcion, tipoPromo, fechaInicial, fechaFinal});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
}); 

router.put('/agregarProductoPromo/:idPromo', async (req, res)=>{
    try {
        let { idPromo } = req.params;
        let { idProducto, nombre, precio} = req.body;
        precio = Number(precio);
        var rsltset = await mdbPromociones.addProductoPromo(idPromo, idProducto, nombre, precio);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

router.put('/udpPrecio/:id', async (req, res)=>{
    try {
        let { id } = req.params;
        let { precio } = req.body;
        precio = Number(precio);
        let rsltset = await mdbPromociones.updProduto(id, precio);
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
});

module.exports = router;