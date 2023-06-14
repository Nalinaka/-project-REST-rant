// Modules and Globals
require('dotenv').config()
// require express
const express = require('express')
//initialize express
const app = express()
const methodOverride = require('method-override')


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })



app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)


