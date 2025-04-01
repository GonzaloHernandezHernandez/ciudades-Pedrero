const express = require('express')
const CiudadesService = require('../servicios/ciudadesService')


function ciudadesAPI(app){
    const router = express.Router()
    app.use('/api/ciudades', router)

    const ciudadesService = new CiudadesService()


    router.get('/', async function (req, res, next){
        try{
            const ciudades = await ciudadesService.getCiudades()
            res.status(200).json(
                {
                    data: ciudades,
                    message: 'ciudades recuperadas con éxito'
                }
            )
        } catch(err){
            console.log(`se produjo un error ${err}`)
        } 
    })

    router.post('/', async function (req, res, next){
        try{
            const {nombre, coordenadas} = req.body
            const nuevaCiudad = { nombre, coordenadas}
            ciudadAnadida = await ciudadesService.addCiudad(nuevaCiudad)
            res.status(200).json(
                {
                    data: ciudadAnadida,
                    message: 'ciudad añadida con éxito'
                }
            )
        } catch(err){
            console.log(`se produjo un error ${err}`)
            res.status(500).json({error: `se produjo el error ${err} al añadir la ciudad`})
        } 
    })

    router.put('/:id', async function (req, res, next){
        try{
            
        } catch(err){
            console.log(`se produjo un error ${err} al modificar la ciudad`)
        } 
    })

    router.delete('/:id', async function (req, res, next){
        try{

        } catch(err){
            console.log(`se produjo un error ${err} al borrar la ciudad`)
        } 
    })

}

module.exports = ciudadesAPI