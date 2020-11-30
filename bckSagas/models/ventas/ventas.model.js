var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;

class ventasModel{
    constructor(){
        this.collection = null
        MongoDB.getDb()
         .then (
           (db)=>{
             this.collection = db.collection("Ventas");
           }
        )
         .catch((ex)=>{
          throw(ex);
        });
    }  

    //metodos get
    async getByDate(date){
        try {
            let docs = await this.collection.find(date).toArray();
            return docs;
        } catch (ex) {
            throw(ex);
        }
    }

    async getVentas(){
        try {
            let docs = await this.collection.find({}).toArray();
            return docs;
        } catch (ex) {
            throw(ex);
        }
    }

    async getTotalVenta(id){
        try {
            const _id = new ObjectID(id);
            const updOps = {"$sum": "$producto" };
            let rslt = await this.collection.find(_id, updOps);
            return rslt;
        } catch (ex) {
            throw(ex);
        }
    }

    async getTotalComprasCliente(id){
        try {
            const _id = new ObjectID(id);
            let rslt = await this.collection.find(_id).count();
            return rslt;
        } catch (ex) {
            throw(ex);
        }
    }

    //metodos post
    async addVenta(document){
        try {
            var result = await this.collection.insertOne(document);
            return result;
        } catch (ex) {
            throw(ex);
        }
    }

    async addProductoVenta(id, idProducto, sku, nombre, precio){
        try {
            const _idProducto = new ObjectID(idProducto);
            const updOps = {"$addToSet": { Producto: {_idProducto, sku, nombre, precio} }};
            const _id = new ObjectID(id);
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            console.log(ex);
        }
    }

    async deleteProductoVenta(id, idProducto){
        try {
            const _idProducto = new ObjectID(idProducto);
            const updOps = {"$pull": { Producto: {_idProducto,} }};
            const _id = new ObjectID(id);
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            console.log(ex);
        }
    }
}
module.exports = ventasModel;