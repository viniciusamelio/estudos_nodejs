const Sequelize = require('sequelize')
const sequelize = new Sequelize('node','root','',{
    host: "localhost",
    dialect: "mysql"
})

const Post = sequelize.define('posts',{
    title : {
        type : Sequelize.STRING,
        length: 20
    },
    content : {
        type : Sequelize.TEXT
    },
    author : {
        type : Sequelize.INTEGER
    }
})


const User = sequelize.define('users',{
    name : {
        type : Sequelize.STRING,
        length: 40
    },
    email : {
        type: Sequelize.STRING,
        length : 40
    },
    password : {
        type: Sequelize.STRING
    },
    birthdate : {
        type : Sequelize.DATEONLY
    }
})

/*User.sync()*/


User.create({
    name : "Harry Potter",
    email : "potter.harry@wizard.com",
    password : encodeURI("1234"),
    birthdate : Date("19/05/1987")
})