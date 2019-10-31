const express = require("express")
const handeblars = require("express-handlebars")
const main = express()

//Config
    //Template Engine
        main.engine('handlebars',handeblars({
            defaultLayout: "main"
        }))
        main.set('view-engine','handlebars')
    //Database
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('node','root','',{
            host: "localhost",
            dialect: "mysql"
        })

main.listen(8081)