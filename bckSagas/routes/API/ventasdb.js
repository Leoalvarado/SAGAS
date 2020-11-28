const express = require("express");
const VentasModel = require("../../models/ventas/ventas.model");
let router = express.Router();

let ventasModel = require('../../models/ventas/ventas.model')();
const mdbVentasModel = new ventasModel();


router.get('/ventas/:tm1', async (req, res)=>{
    try {
        let { tm1 } = req.params;
        let rsltset = await mdbVentasModel.
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 