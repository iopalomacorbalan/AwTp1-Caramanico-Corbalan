import http from 'node:http'

const app =  http.createServer(( peticion, respuesta)=> {
    if(peticion.method ==='GET'){

        if(peticion.url === '/usuarios'){
            //1. fetch: obtener datos
            await fetch('')
                //1.1 extraer datos
            
            //2. escribirlo en formato json
                //ruta path
                //write.file
            
            //3. leer archivo json
                //read.file

            //4. enviar datos al cliente
            respuesta.statusCode = 200
            return respuesta.end ('Estas en la raiz usuarios')
        }
    
}
respuesta.statusCode=404
respuesta.end ('Ruta no encontrada' )
})