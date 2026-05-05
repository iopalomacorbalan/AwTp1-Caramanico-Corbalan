import express from 'express'

const PUERTO = 4321

//middleware = a una funcion, que tiene 3 parametros (req,res,next)
const app = express()
const middleware = (req,res , next)=>{
    const codigo = Number(res.params.codigo)
    // 1 fetch = interfaz moderna de JavaScript (basada en promesas)
    // utilizada para realizar peticiones HTTP asíncronas
    //objecto 
    const usuario = respuesta.json()
    usuario.codigo

}

//definir la ruta /:codigo
//peticion -> middleware -> callback fianl 

app.get('/:codigo', middleware ,(req, res)=>{
      res.statusCode(200).json({mensaje: 'el codigo es correcto'})
})


app.listen(PUERTO,()=> {
    console.log(`http://localhost:${PUERTO}`)
})