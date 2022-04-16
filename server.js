const express = require('express')
const path = require('path')
const session = require('express-session')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 3001;

//connect to sequelize database
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

//set up express session
const sess ={
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })

}

app.use(session(sess))


//run handlebars
const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.use(express.json())
//middleware this allows you to use req.body does this need to be false or true?
app.use(express.urlencoded({ extended: false }))
//use code from the public folder
//app.use(express.static(path.join(_dirname, 'public')))

//use the routes
app.use(require('./controllers'))


sequelize.sync({ force: true }).then(()=> {
    app.listen(PORT, () => console.log('Now listening'))
})