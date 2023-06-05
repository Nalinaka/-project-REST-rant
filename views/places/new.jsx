const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>               
            </main>
        </Def>
    )
}

router.get('/new', (req, res) => {
    res.render('places/new')
  })

module.exports = new_form
