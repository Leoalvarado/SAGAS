var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;
var bcrypt = require('bcrypt');

class SeguridadModel {
  constructor() {
    this.collection = null;
      MongoDB.getDb().then(async (db)=>{
        this.collection =  await db.collection('usuarios');
        if (process.env.ENSURE_INDEX == "1") {
          await this.collection.createIndex({ "email": 1 }, { unique: true }); // creamos un indice email unico por que en los usuarios no se permitira tener 2 usuarios con el mismo email 
        }
      }
    ).catch((ex)=>{
        throw(ex);
      }
    )
  }

  async addUsuario( data ) {
    const {email, password} = data;
    try {
      let nuevo = {
        "email": email, //corre
        "password": bcrypt.hashSync(password, 10), //contraseña con un salado de encriptacion de 10
        "lastlogin": 0,//instancia (si esta en 0 no se a logeado si esta en 1 esta logeado)
        "lastpwdchg": 0,//instancia de cambio de contraseña
        "pwdexp": new Date().getTime() + (1000*60*60*24*90), /* mils, s , m, h, d */ //cuando va a inspirar la contraseña (en 3 meses)
        "oldpwd":[],//contraseña vieja luego de cambiar contaseña
        "roles":["public"]
      }
      let rslt = await this.collection.insertOne(nuevo);
      return rslt;
    } catch(ex){
      throw(ex);
    }
  }
//trae el email si este existe en la base de datos
  async getUserByEmail(email){
    try{
      const filter = {"email":email};
      let User = await this.collection.findOne(filter);
      return User;
    }catch(ex){
      throw(ex);
    }
  }
  /**
   * Compara la contraseña y devuelve true si son identicos.
   *
   * @author Los piratas
   * @date 2020-11-28
   * @param {string} rawPswd   Contraseña que el usuario envia
   * @param {string} crptoPswd Contraseña guardad en la DB
   * @memberof SeguridadModel
   */

   //compara las contraseñas ya encriptadas
  async comparePassword(rawPswd, crptoPswd){
    try{
      //return bcrypt.compareSync(rawPswd, crptoPswd);
      return await bcrypt.compare(rawPswd, crptoPswd);//retornara un valor v o f en la prpmesa
    }catch(ex){
      throw(ex);
    }
  }

}

module.exports = SeguridadModel;