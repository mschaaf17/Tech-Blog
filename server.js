const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection')


app.use(express.json())
//middleware this allows you to use req.body does this need to be false or true?
app.use(express.urlencoded({ extended: false }))
//use code from the public folder
app.use(express.static(path.join(_dirname, 'public')))


sequelize.sync({ force: false }).then(()=> {
    app.listen(PORT, () => console.log('Now listening'))
})