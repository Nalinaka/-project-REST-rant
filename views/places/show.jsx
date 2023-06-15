const React = require("react");
const Def = require("../default");


    function show (data) {
        let comments = (
          <h3 className="inactive">
            No comments yet!
          </h3>
        )
        if (data.place.comments.length) {
          comments = data.place.comments.map(c => {
            return (
              <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }
  return (
      <Def>
        <main>
          <h1>{data.place.name}</h1>
          <div>
              <h2>
                  Rating
              </h2>
              <p>Not Rated</p>
          </div>
          <div className='row'>
              <div className='col-sm-6'>
                  <img src={data.place.pic} alt={data.place.name} />
                  <h3>
                      Located in {data.place.city}, {data.place.state}
                  </h3>
              </div>
              <div className='col-sm-6'>
                  <h2>
                      Description
                  </h2>
                  <h3>
                      {data.place.showEstablished()}
                  </h3>
                  <h4>
                      Serving {data.place.cuisines}
                  </h4>
              </div>
              <div className='col-sm-12'>
                  <h2>Comments</h2>
                  {comments}
                  <p>No Comments Yet!</p>
              </div>
          </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            <i className="bi bi-pencil"></i> Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
              <i className="bi bi-trash"></i> Delete
              </button>
            </form>
      </main>
    </Def>
  );
}

module.exports = show


// router.get('/:id', (req, res) => {
//   db.Place.findById(req.params.id)
//   .then(place => {
//       res.render('places/show', { place })
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })