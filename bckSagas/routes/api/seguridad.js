const express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let SecurityModel = require("../../models/seguridad/seguridad.models");
let SecMdl = new SecurityModel();
// login
router.post('/login', async(req, res)=>{
  try{
    let { email, password } = req.body;
    let User = await SecMdl.getUserByEmail(email);
    if(!User){
      console.log("Usuario no existe:" + email);
      res.status(401).json({"error":"No se pueden validar sus credenciales."});
    } else {
      //Validaciones del usuairo que cumplan las reglas de negocio
      let isValidPassword = await SecMdl.comparePassword(password, User.password);
      if(isValidPassword){
        let { _id, email, roles } = User;
        let token = jwt.sign({ _id, email, roles }, process.env.JWT_SECRET);
        res.status(200).json({ jwt: token, user: { _id, email, roles } });
      }else{
        console.log("Contraseña Incorrecta:" + email);
        res.status(401).json({ "error": "No se pueden validar sus credenciales." });
      }
      
    }
    
  }catch(ex){
    console.log(ex);
    res.status(500).json({ "msg": "Algo Salió Mal" })
  }
}); //post login

// signin
router.post('/signin', async(req, res)=>{
  try{
    let { email,nombre,apellido,password,telefono} = req.body;
    // realizar validaciones
    let rslt = await SecMdl.addUsuario({email,nombre,apellido,password,telefono});
    res.status(200).json(rslt);
  }catch(ex){
    console.log(ex);
    res.status(500).json({"msg":"Algo Salió Mal"})
  }
}); // post signin

router.get('/userAll', async (req, res)=>{
  try {
      let rsltset = await SecMdl.getUserAll();
      res.status(200).json(rsltset);
  } catch (ex) {
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
  }
}); 

router.get('/user/:email', async (req, res)=>{
    try {
        let {email} = req.body;
        let rslt = await SecMdl.getUserByEmail(email);
        res.status(200).json(rslt);
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ "msg": "Algo Paso Mal." });
    }
}); 

module.exports = router;
