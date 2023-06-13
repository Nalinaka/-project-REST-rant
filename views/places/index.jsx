const React = require('react')
const Def = require('../default')
const places = require('../../models/places')

//   app.get('*', (req, res) => {
//     res.render('error404')
//   })
function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${places.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
        Available cuisines: {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
        <p className="text-center">
          Established: {place.founded}
        </p>
      </div>
    )
  })
  
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

  
module.exports = index
