//actividad 2


// 1- leer desde un endpont fetch

// 2- escribir datos en un JSON

// 3- leer datos del archivo guardado

import fsp from 'node:fs/promises'
import path from 'node:path' //para sacar la ruta

try {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json() //convierte JSON texto a objeto js
    const usuariosModificados = usuarios.map((usuario)=> {
        //construyo nueov objeto
        const usuarioModificado =
        {
            id: usuario.id,
            email: usuario.email,
            nombre: usuario.name
        }
        return usuarioModificado
    })

    console.log(respuesta)

    const ruta = path.resolve('usuarios.json',)
    const datosJson = JSON.stringify(usuariosModificados, null, 4) //separa los datos y los ordena como un arreglo
    await fsp.writeFile(ruta, datosJson)

    const usuariosLocales = await fsp.readFile(ruta, 'utf8')
    console.log(usuariosLocales)

} catch (error) {
    console.log(error)
}