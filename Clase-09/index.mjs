import fsp from 'node:fs/promises';
import path from 'node:path';

try{
    const contenido = await fsp.readFile('./texto.txt')
    console.log(contenido)
}catch (e){
    console.log(e)
}



try{
    const ruta = path.join('.','texto.txt')
    //escribimos
    await fsp.writeFile(ruta,'Contenido cambiado3')
    const contenido = await fsp.readFile(ruta,'utf8')
    console.log(contenido)
}catch (e){
    console.log(e)
}