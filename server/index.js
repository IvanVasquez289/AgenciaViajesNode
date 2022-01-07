import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv"
dotenv.config({path:"variables.env"});

const app = express()



// Conectar a la base de datos
db.authenticate()
    .then( ()=> console.log("Base de datos conectada") )
    .catch(error=> console.log(error) )
       
//  Habilitar pug
app.set("view engine","pug")

// Obtener el año actual
app.use((req,res,next)=>{
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de viajes"
    next()
}) 

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

// Definir la carpeta publica
app.use(express.static("public"))

// Agregar router
app.use("/",router)

// Definir puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;







// get es cuando visitas una url
// req - lo que enviamos     res- lo que express nos responde 

// Puerto para host y la app
 
app.listen(port, host, () => {
    // Este mensaje deberá aparecer en el terminal de HEROKU, una vez subamos el proyecto
    console.log('Servidor HEROKU funcionando.');
});


// PARA LA BASE DE DATOS ME METI A XAMPP Y ACTIVE LAS PRIMERAS DOS OPCIONES, DE AHI ME METI A TABLEPLUS CREE UNA NUEVA DB, PUSE LOS DATOS QUE VI
// EN UN COMENTARIO DE ESA CLASE, EN USUARIO PUSE root y 3306 en host y me dijo que estaba correcto y se abrio una ventana di click arriba y apareci
// donde empieza el video

// para poner el archivo hay que escribirlo en el recuadro