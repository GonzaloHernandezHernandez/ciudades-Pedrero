const fs = require('fs')
const MongoLib = require('../lib/mongo')
const Ciudad = require('../modelos/ciudad')
class CiudadesService{
    constructor(){
        this.coleccion = 'ciudades'
        this.mongoDB = new MongoLib()
    }
    async getCiudades(){
        try {
            // let ciudades = await fs.promises.readFile("./utils/mocks/ciudades.json");
            const ciudades = await this.mongoDB.getCiudades(this.coleccion)
            return ciudades;
        } catch(error){
            console.log('error recuperando ciudades')
        }

    }
    async addCiudad(ciudad) {
        try {
            const insertedId = await this.mongoDB.create(this.coleccion, ciudad);
            return { id: insertedId, ...ciudad };
        } catch (error) {
            console.error('Error agregando ciudad:', error);
            throw new Error('Error al agregar ciudad');
        }
    }

    async deleteCiudad(id) {
        try {
            const deleted = await this.mongoDB.delete(this.coleccion, id);
            if (!deleted) {
                throw new Error('Ciudad no encontrada');
            }
            return { message: 'Ciudad eliminada', id };
        } catch (error) {
            console.error('Error eliminando ciudad:', error);
            throw new Error('Error al eliminar ciudad');
        }
    }

    
} 

module.exports = CiudadesService