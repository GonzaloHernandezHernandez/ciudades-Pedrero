const { MongoClient, ObjectId } = require('mongodb')

const MONGO_URI = 'mongodb+srv://ghernandezheinf:pjY4itQdKHteARZj@cluster0.fj3d1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DB_USER = 'user'
const DB_PASSWORD = 'password'
const DB_NAME = 'ciudades'

class MongoLib {
    async connect() {

        if (MongoLib.connection != null) {
            return MongoLib.connection.db(DB_NAME);
        } else {
            try {
                MongoLib.connection = await MongoClient.connect(MONGO_URI)
                console.log('conectado a BBDD')
                return MongoLib.connection.db(DB_NAME)
            } catch(e){
                console.log('error en conexión a BBDD')
                return e
            }
        }
    }
    async  getCiudades(collection) {
        try {
            let db = await this.connect()
            let result = await db.collection(collection).find().toArray();
            return result;
        } catch (e) {
            return e;
        }
    }
    async create(collection, data) {
        try {
            const db = await this.connect();
            const result = await db.collection(collection).insertOne(data);
            return result.insertedId;
        } catch (e) {
            console.error('Error al agregar documento:', e);
            throw new Error('No se pudo agregar el documento');
        }
    }

    async delete(collection, id) {
        try {
            const db = await this.connect();
            const result = await db.collection(collection).deleteOne({ _id});
            return result.deletedCount > 0;
        } catch (e) {
            console.error('Error al eliminar documento:', e);
            throw new Error('No se pudo eliminar el documento');
        }
    }
    
}


module.exports = MongoLib;