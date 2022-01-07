import Sequelize  from "sequelize";
import db from "../config/db.js";

// Vamos a difinir nuestro primer modelo
export const Testimonial = db.define("testimoniales",{
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    }
})

 
// para crearla das
// 1.- click derecho - new table
// 2.- pones las columnas excepto la de id
// 3.- ctrl + s para que se guarde la tabla 
// 4.- nos vamos a la parte de arriba en el icono de sql y copiamos el siguiente codigo
// ALTER TABLE testimoniales                  <-- ahi va el nombre de la tabla, en este caso testimoniales
// ADD COLUMN id SERIAL PRIMARY KEY;
// das click en run current unas dos veces, y recargas la tabla con el icono de arriba y aparecera el id