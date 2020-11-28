const express = require('express');
const router = express.Router();

const ventasRoutes = require('./api/ventasdb');

router.use('/ventas', ventasRoutes)

module.exports = router;