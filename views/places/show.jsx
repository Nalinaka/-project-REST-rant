const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div>
          <h2>Description</h2>
        </div>
        <div>
          <h3>{data.place.showEstablished() }
          </h3>
          <div>
          <h4>Serving {data.place.cuisines}
          </h4>
          <p>No Comments Yet!</p>
        </div>
        </div>
        <div>
          <h4></h4>
          <p>No Comments Yet!</p>
        </div>
        <div className="place-info">
          <div className="place-photo">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          <h3>Located in {data.place.city}, {data.place.state}
          </h3>
          <div className="place-actions">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



module.exports = show;