 const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app =express()
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../','public')))
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


app.get('/', (req, res)=>{
   res.render('pages/index');
})







const PORT = 5000
app.listen(PORT,()=>{
    console.log(`port is listening on ${PORT}`)
}) 