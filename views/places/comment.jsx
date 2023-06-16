const React = require('react')
const Def = require('../default')
const new_form = require('./new')


// code taken out from form - <label htmlFor="content" className="form-label">Your Comment</label>
function comment_form () {
    return (
        <Def>
        <main>
        <h1>Comments</h1>
        <form method="POST" action="/places/:id/comment">
        <div className='row g-3'>
        <div className="form group col-12">
        <label htmlFor="content" className="form-label">Your Comment</label>
        <input className="form-control" type="text" id="content" name="content" required />
        </div>
        </div>
        <div className="form group col-md-6">
        <label htmlFor="author" className="form-label">Your Name</label>
        <input className="form-control" id="author" name="author" />
        </div>
        <div className="from group col-md-6">
        <label htmlFor="stars" className="form-label">Stars</label>
        <input className="form-range" type="range" id="stars" name="stars" min="1" max="5" step="0.5"/>
        </div>
        {/* <div className="col-md-6">   */}
        {/* <br/> */}
        <div className="form-check">
        <label htmlFor="rant" className="form-check-label">Rant</label>
        <input className="form-check-input" type="checkbox" id="rant-checkbox" name="rant" required/>
        </div>
        <div className="form-group"></div>
        <input className="btn btn-primary" type="submit" value="Add Comment" />
        </form>
      </main>
  </Def>
    )
}

module.exports = comment_form
