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

const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

const ventasRoutes = require('./api/ventasdb');
const productosRoutes = require('./api/productosdb');
const seguridadRoutes = require('./api/seguridad');


router.use('/ventas', ventasRoutes)
router.use('/productos', productosRoutes)
router.use('/seguridad', seguridadRoutes)

module.exports = router;