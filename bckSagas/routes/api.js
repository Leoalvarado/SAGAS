const express = require('express');
const router = express.Router();


let passport = require('passport');
let passportJWT = require('passport-jwt');

let extractJWT = passportJWT.ExtractJwt;
let strategyJWT = passportJWT.Strategy;

passport.use(
  new strategyJWT(
    {
      jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    },
    (payload, next)=>{
       var user = payload;
       return next(null, user);
    }
  )
)

const heartBeat = (req, res)=>{
  res.status(200).json({ok:true});
}
const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});


const seguridadRoutes = require('./api/seguridad');
const ventasRoutes = require('./api/ventasdb');
const productosRoutes = require('./api/productosdb');
const promocionesRoutes = require('./api/promociones');
const carretillaRoutes = require('./api/carretilla');


router.use('/seguridad',seguridadRoutes);
router.use('/ventas', ventasRoutes);
router.get('/heartbeat', jwtAuthMiddleware, heartBeat);
router.use('/productos', productosRoutes);
router.use('/promociones', jwtAuthMiddleware, promocionesRoutes);
router.use('/carretilla', carretillaRoutes);


module.exports = router;