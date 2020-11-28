var MongoDB = require('../dbm');
var ObjectID = require('mongodb').ObjectID;

class VentasModel{
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

    //metodos post
    async addVenta(document){
        try {
            var result = await this.collection.insertOne(document);
            return result;
        } catch (ex) {
            throw(ex);
        }
    }
}
module.exports = VentasModel;