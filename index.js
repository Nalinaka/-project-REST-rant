// Modules and Globals
require('dotenv').config()
// require express
const express = require('express')
const methodOverride = require('method-override')
//initialize express
const app = express()
const mongoose = require('mongoose')



// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)


// app.set('views', __dirname + '/views')

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })