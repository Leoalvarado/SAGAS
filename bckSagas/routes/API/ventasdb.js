const express = require("express");
let router = express.Router();

let ventasModel = require('../../models/ventas/ventas.model');
const mdbVentasModel = new ventasModel();


router.get('/ventas/:date', async (req, res)=>{
    try {
        let { date } = req.params;
        let rsltset = await mdbVentasModel.getByDate({Date:date});
        res.status(200).json(rsltset);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 

router.post('new', async (res, req)=>{
    try {
        let {date, name, category ,precio, stock=0} = req.body;
        price = Number(price);
        stock = Number(stock);
        var rsltset = await mdbVentasModel.addVenta({date, name, category, precio, cantidad});
    } catch (ex) {
        console.log(ex);
        res.status(500).json({"msg":"Algo Paso Mal."});
    }
}); 

module.exports = router;
