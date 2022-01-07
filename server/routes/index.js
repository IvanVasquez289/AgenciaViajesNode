import express from "express";
import { 
    paginaDetalleViaje,
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes 
} from "../controllers/paginasController.js";
 
import { guardarTestimonial } from "../controllers/testimonialController.js";

// // // como solo puedo tener una instancia de express uso el router
const router = express.Router()

// // req - lo que enviamos res- lo que express nos responde cuando escribimos en el buscador la ruta, ese es el router get
router.get("/",paginaInicio)

router.get("/nosotros",paginaNosotros)

// la routa te manda al controlador
router.get("/viajes",paginaViajes)

// este es para el slug
router.get("/viajes/:slug",paginaDetalleViaje)
 
router.get("/testimoniales",paginaTestimoniales)
router.post("/testimoniales",guardarTestimonial)

 


export default router