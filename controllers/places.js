const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    res.render('GET /places')
})

// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
  })
  
module.exports = router
