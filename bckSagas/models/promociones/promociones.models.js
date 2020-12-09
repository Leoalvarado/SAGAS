var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;

class PromocionesModel{
    constructor(){
      this.collection = null
      MongoDB.getDb()
       .then (
         (db)=>{
           this.collection = db.collection("promociones");
         }
      )
       .catch((ex)=>{
        throw(ex);
      });
    }
    
    async getPromosAll(){
        try {
            let rslt = await this.collection.find({}).toArray();
            return rslt;
        } catch (ex) {
            throw(ex);
        }
    }

    
    //AÑADIR UNA NUEVA PROMOCION
    async addPromocion(document){
        try {
            var result = await this.collection.insertOne(document);
            return result;
        } catch (ex) {
            throw(ex);
        }
    }

    async udpProducto(id, precio){
        try {
            const _id = new ObjectID(id);
            const updOps = {"$set": {"precio" : precio}};
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            throw(ex);
        }
    }

      async addProductoPromo(idPromo, idProducto, nombre, precio){
        try {
            const _idProducto = new ObjectID(idProducto);
            const updOps = {"$addToSet": {Producto: {_idProducto, nombre, precio} }};
            const _id = new ObjectID(idPromo);
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            console.log(ex);
        }
    }

}

module.exports = PromocionesModel;