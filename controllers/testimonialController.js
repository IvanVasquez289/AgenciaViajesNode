import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req,res)=>{
    // validar...
    const {nombre,correo,mensaje} = req.body

    // crear un array para almacenar los errores
    const errores = [];

    if(nombre.trim()===""){
        errores.push({mensaje:"El nombre esta vacio"})
    }
    if(correo.trim()===""){
        errores.push({mensaje:"El correo esta vacio"})
    }
    if(mensaje.trim()===""){
        errores.push({mensaje:"El mensaje esta vacio"})
    }

    if(errores.length>0){
        // consultar los testimoniales existentes - igual es necesario ponerlo aqui, no solo en paginasController
        // porque tambien hacemos render a testimoniales
        const testimoniales = await Testimonial.findAll()


        res.render("testimoniales",{
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        // Almacenarlo en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect("/testimoniales")
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(errores)


    // req.body es lo que el usuario coloque en el formulario
    // console.log(req.body)
}

export {
    guardarTestimonial
}