const Ciudad = {
    nombre: { type: String, required: true },
    coordenadas: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  };
  module.exports = Ciudad;