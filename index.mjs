import path from 'node:path';
import fsp from 'node:fs/promises';
/*
try {
    const contenido =await fsp.readFile('./text.txt')
    console.log(contenido)
    
} catch (e) {
    console.log(e)
    
}
*/ 

try {
    const ruta= path.join ('.', 'text.txt') 
    await fsp.writeFile(ruta, 'contenido cambiado v2')
    const contenido = await fsp.readFile( ruta,'utf8' )
    console.log(contenido)

} catch (e) {
    console.log(e)
}