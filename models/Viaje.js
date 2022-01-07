import Sequelize  from "sequelize";
import db from "../config/db.js";

// Vamos a difinir nuestro primer modelo
export const Viaje = db.define("viajes",{
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    }
})