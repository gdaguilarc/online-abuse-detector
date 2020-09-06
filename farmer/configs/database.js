// Importa el paquete dotenv
const dotenv = require("dotenv");

dotenv.config();

// Crea un objecto con la información de la configuración
const dbConfig = {
  // Establecemos valores por defecto
  // Como ninguna versión de Node soporta _nullish coalescing operator (??)_ tenemos
  // que usar una operación lógica.
  env: process.env.NODE_ENV || "development",
  express_port: process.env.EXPRESS_PORT || 3000,
};

module.exports = dbConfig;
