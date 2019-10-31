const express = require("express")
const handeblars = require("express-handlebars")
const main = express()

//Template Engine
    main.engine('handlebars',handeblars({
        defaultLayout: "main"
    }))
    main.set('view-engine','handlebars')

main.listen(8081)