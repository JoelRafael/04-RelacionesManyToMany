'use strict'
const express = require('express'),
      app = express(),
      morgan = require ('morgan'),
      AppRoutes = require('./Routes/routes');
const sequalize = require("./Conexion/db")
      require("dotenv").config()
      require('./asociations')


      //Estableciendo los middleware y corriendo la app
      const port = process.env.PORT || 3000; 
      app.use(express.json())
      app.use(morgan('dev'));
      app.use(AppRoutes)
      app.listen(port, ()=>{
         console.log(`http:localhost:${port}`)
         sequalize.sync({force:true}).then(()=>{
             console.log("Conexion establecida")
      }).catch(error=>{
         console.log(`Se ha producido un error`, error)
         })
     })
     
     
