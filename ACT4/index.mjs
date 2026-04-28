import express from "express"

const PUERTO = 3000


//Instacia de servidor express
const app = express() 

//middleware
function middleware1(req,res, next){
    console.log('se ejecuto el middleware1')
    if(true){
        res.send('terminando el middleware1')

    } else {
       next() 
    }
}
app.use(express.static('front'))

app.use('/saludo', middleware1)

app.get('/', (req, res)=>{
    console.log('peticion')
    res.send('Bienvenidos')
})

app.get('/saludo', (req, res)=>{
    console.log('peticion')
    res.send('Bienvenidos')
})


app.listen(PUERTO,()=> {
    console.log(`http://localhost:${PUERTO}`)
})