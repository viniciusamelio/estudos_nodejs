const Sequelize = require('sequelize')
const sequelize = new Sequelize('node','root','',{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(
    function(){
        console.log("Conectou")
    }
).catch(
    function(error){
        console.log("Deu ruim: "+error)
    }
)