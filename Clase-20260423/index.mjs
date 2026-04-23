import express from "express"

const PUERTO = 3000


//Instacia de servidor express
const app = express() 
const obtenerCosas = (res, req ) => {
    res.status (200)
    res.set (`content-type, text/html`)
    res.end (`<h1>Hola teamo<h1>`)
}

app.get( `/`, obtenerCosas)

app.get = (`/`, (res, req) =>{
   
    res.end (`Estoy en post`)
})


app.listen(PUERTO),  () => {
    console.log(`http://localhost:${PUERTO}`) 
}




