import http from 'node:http'
//crear servidor 

//objetos; todos los datos que manda el cliente --> peticion, respuesta

const app =  http.createServer(( peticion, respuesta)=> {
    if(peticion.method ==='GET'){
        if(peticion.url === '/'){
            respuesta.statusCode= 200
            return respuesta.end ('Estas en la raiz')
        }

   if(peticion.url === '/usuarios'){
    respuesta.statusCode = 200
     return respuesta.end ('Estas en la raiz usuarios')
   }
    
}
respuesta.statusCode=404
respuesta.end ('Ruta no encontrada' )
})
//Escucha el callback --> cada vez que se haga una peticion 

app.listen(3000,()=> {
    console.log('Servidor corriendo en http://localhost:3000')
})  //puerto 
