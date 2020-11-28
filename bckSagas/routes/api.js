const express = require('express');
const router = express.Router();

const ventasRoutes = require('./api/ventasdb');
const productosRoutes = require('./api/productosdb');


router.use('/ventas', ventasRoutes)
router.use('/productos', productosRoutes)

module.exports = router;