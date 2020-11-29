var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;

class VentasModel{
    constructor(){
        this.collection = null
        MongoDB.getDb()
         .then (
           (db)=>{
             this.collection = db.collection("Productos");
           }
        )
         .catch((ex)=>{
          throw(ex);
        });
    }  

    //metodos get
    async getProductoPorCategoria(categoria){
        try {
            let rslt = await this.collection.find(categoria).toArray();
            return rslt;
        } catch (ex) {
            throw(ex);
        }
    }

    async getProductosAll(){
        try {
            let rslt = await this.collection.find({}).toArray();
            return rslt;
        } catch (ex) {
            throw(ex);
        }
    }

    //metodos post
    async addProducto(document){
        try {
            var result = await this.collection.insertOne(document);
            return result;
        } catch (ex) {
            throw(ex);
        }
    }

    async addcategoriaProducto(id, categoria){
        try {
            let _categoria = categoria.toLowerCase();
            const updOps = {"$addToSet": { categoria: _categoria }};
            const _id = new ObjectID(id);
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            console.log(ex);
        }
    }

    async deletecategoriaProducto(id, categoria){
        try {
            let _categoria = categoria.toLowerCase();
            const updOps = {"$pull": { categoria: _categoria }};
            const _id = new ObjectID(id);
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            console.log(ex);
        }
    }
    
     async updateProductoXId(id, precio){
        try {
            const _id = new ObjectID(id);
            const updOps = {"$set": {"precio" : precio}};
            let updDoc = await this.collection.findOneAndUpdate({_id}, updOps, {returnOriginal:false});
            return updDoc;
        } catch (ex) {
            throw(ex);
        }
    }

    async removeProducto(id){
        try {
            const _id = new ObjectID(id);
            let rslt = await this.collection.deleteOne({_id});
            return rslt;
        } catch (ex) {
            throw(ex);
        }
    }

}
module.exports = VentasModel;
