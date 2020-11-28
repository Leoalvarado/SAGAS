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

    //metodos post
    async addProdcto(document){
        try {
            var result = await this.collection.insertOne(document);
            return result;
        } catch (ex) {
            throw(ex);
        }
    }

}
module.exports = VentasModel;
