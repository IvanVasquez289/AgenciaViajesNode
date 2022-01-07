
// Importar el modelo
import { Testimonial } from "../models/Testimonial.js";
import { Viaje } from "../models/Viaje.js";
const paginaInicio = async (req,res)=>{
 
    // obtener 3 viajes de la base de datos
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))

    try {
        // con esto se ejecutan ambas consultas al mismo tiempo
        const resultado = await Promise.all(promiseDB)
        res.render("../server/views/inicio",{
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
        
    } catch (error) {
        console.log(error)
    }
}
 
const paginaNosotros = (req,res)=>{
    res.render("../server/views/nosotros",{
        pagina: "Nosotros"
    })
}
       
// el controlador conecta con el modelo para enviarlo a la vista
const paginaViajes = async (req,res)=>{
    // consultar base de datos
    const  viajes = await Viaje.findAll();
    console.log(viajes);
 
    // vista
    res.render("../server/views/viajes",{
        pagina: "Proximos Viajes",
        viajes
    })
}

const paginaTestimoniales = async (req,res)=>{
    try {
        const testimoniales = await Testimonial.findAll()
        res.render("../server/views/testimoniales",{
            pagina: "Testimoniales",
            testimoniales
            
        })
    } catch (error) {
        console.log(error)
    }
}
 
// Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) =>{
    const {slug} = req.params

    try {
       const viaje = await Viaje.findOne({where: {slug}})
        
        // entonces cargaremos una vista llamada viaje 
        res.render("../server/views/viaje",{
            pagina: "Informacion Viaje",
            viaje
        })   

    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
} 