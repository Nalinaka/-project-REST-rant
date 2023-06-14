const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
    <Def>
    <main>
        <h1>Add a New Place</h1>  
        {message}  
    <form method="POST" action="/places">
      <div className='row'>
        <div className="form-group col-sm-6" >
    <label htmlFor="name">Place Name</label>
    <input className="form-control" id="name" name="name" required />
        </div>
      <div className="form-group col-sm-6" >
    <label htmlFor="pic">Place Picture</label>
    <input className="form-control" id="pic" name="pic" />
        </div> 
        <div className="form-group col-sm-6" >
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city" />
        </div>
        <div className="form-group col-sm-6" >
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state" />
        </div>
        <div className="form-group col-sm-6" >
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines" required/>
        </div>
        <div className="form-group col-sm-4">   
    <label For="founded">Founded Year</label>
    <input className="form-control" id="founded" name="founded" value={new Date().getFullYear()} />
        </div>
      </div>
    <input className="btn btn-primary" type="submit" value="Add Place" />
    </form>
    </main>
        </Def>
    )
}

// router.get('/new', (req, res) => {
//     res.render('places/new')
//   })      commented out col-sm-4 under founded form above...

module.exports = New


  