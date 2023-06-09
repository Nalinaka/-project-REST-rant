
const React = require('react')
const Def = require('../default')
const comments = require('../../models/comment')

function show(data) {
  let comments = <h3 className='inactive'>No comments yet!</h3>
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
    //add ratings
    let sumRatings = data.place.comments.reduce((total, comment) => {
      console.log(comment)
      return total + comment.stars;
    }, 0);

    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
    rating = <h3>{stars} stars</h3>;
      return (
        <div className="col-sm-4 rant-box">
          <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
          <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={data.place.pic} alt={data.place.name}/>
            <h3>Located in {data.place.city}, {data.place.state} </h3> 
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <div>
              <h2>Rating</h2>
              {rating}
              <br/>
            </div>
            <div>
              <h2>Desciption</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines} </h4>
            </div>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.place.id}/?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            </div>
            <hr/>
            <div className="row">
            <h2>Comments</h2>
            {comments} 
            <hr/>
            <div className="rant-post-box">
              <h1>Got Your Own Rant or Rave?</h1>
              <form className="row g-3" method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="col-12">
                  <label htmlFor="content" className="form-label">Your Comment</label>
                  <input className="form-control" type="text" id="content" name="content" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="author" className="form-label">Your Name</label>
                  <input className="form-control" id="author" name="author" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="stars" className="form-label">Stars</label>
                  <input className="form-range" type="range" id="stars" name="stars" min="1" max="5" step="0.5"/>
                </div>
                <div className="col-md-2">
                  <div className="form-check">
                    <label class="form-check-label" htmlFor="rant" id="rant-checkbox">Rant?</label>
                    <br/>
                    <input className="form-check-input" type="checkbox" id="rant" name="rant"/>
                  </div>
                </div>
                <div className="form-group">
                  <input className="btn btn-primary" type="submit" value="Add Comment" />
                </div>
              </form>
            </div>
            </div>
            </div>   
          </main>
        </Def>
    ) 
}

module.exports = show


// This is your code below:

// const React = require('react')
// const Def = require('../default')

// function show (data) {
//     let comments = (
//         <h3 className="inactive">
//             No comments yet!
//         </h3>
//     )
//     let rating = (
//       <h3 className='inactive'>
//         Not yet rated
//       </h3>
//     )
//     if (data.place.comments.length) {
//         let sumRatings = data.place.comments.reduce((tot, c) => {
//           return tot + c.stars 
//         }, 0)
//         let averageRating = Math.round(sumRatings / data.place.comments.length)
//         let stars = ''
//         for (let i = 0; i < averageRating; i++){
//           stars += '⭐️'
//         }
//         rating = (
//           <h3>
//             {stars} stars 
//           </h3>
//         )
//         comments = data.place.comments.map(c => { 
//           return (
//             <div className="border">
//               <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 💖'}</h2>
//               <h4>{c.content}</h4>
//               <h3>
//                 <strong>- {c.author}</strong>
//               </h3>
//               <h4>Rating: {c.stars} ⭐️</h4> 
//             </div>
//           )
//         })
//       }
//     return (
//         <Def>
//             <main>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <img src={data.place.pic} alt={data.place.name} width={750} />
//                         <h3>Located in {data.place.city}, {data.place.state}</h3>
//                     </div>
//                     <div className="col-sm-6">
//                         <h1>{data.place.name}</h1>
//                         <h4>Rating</h4>
//                             {rating}
//                         <br />
//                         <h2>Description</h2>
//                             <h3>Serving {data.place.cuisines}</h3>
//                             <h4>
//                                 {data.place.showEstablished()}
//                             </h4>
//                         <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
//                             Edit
//                             </a> 
                             
//                             <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}> 
//                                 <button type="submit" className="btn btn-danger">
//                                     Delete
//                                 </button>
//                             </form>     
//                         <h2>Comments</h2>
//                         {comments}
//                     </div>
//                 </div> 
//                 <hr />
//             <h2>Does {data.place.name} deserve a Rave 💖 or a Rant 🤬?</h2>
//             <form action={`/places/${data.place.id}/comment`} method="POST">
//               <div className="row">
//                 <div className="form-group col-sm-12">
//                   <label htmlFor="content">Content</label>
//                   <textarea id="content" name="content" className="form-control"></textarea>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="form-group col-sm-4">
//                   <label htmlFor="author">Author</label>
//                   <input id="author" name="author" className="form-control" />
//                 </div>
//                 <div className="form-group col-sm-4">
//                   <label htmlFor="stars">⭐️ Star Rating</label>
//                   <input type="range" step="0.5" min="0.5" max="5" id="stars" name="stars" className="form-control" />
//                 </div>
//                 <div className="form-group col-sm-2">
//                   <label htmlFor="rant">Rant?</label>
//                   <input type="checkbox" id="rant" name="rant" className="form-control" />
//                 </div>
                
//               </div>
//               <input type="submit" className="btn btn-primary" value="Add Comment" />
//             </form>       
//             </main>
//         </Def>
//     )
// }
// module.exports = show




// const React = require('react')
// const Def = require('../default')

// function show (data) {
//     let comments = (
//         <h3 className="inactive">
//             No comments yet!
//         </h3>
//     )
//     let rating = (
//       <h3 className='inactive'>
//         Not yet rated
//       </h3>
//     )
//     if (data.place.comments.length) {
//         let sumRatings = data.place.comments.reduce((tot, c) => {
//           return tot + c.stars 
//         }, 0)
//         let averageRating = Math.round(sumRatings / data.place.comments.length)
//         let stars = ''
//         for (let i = 0; i < averageRating; i++){
//           stars += '⭐️'
//         }
//         rating = (
//           <h3>
//             {stars} stars 
//           </h3>
//         )
//         comments = data.place.comments.map(c => { 
//           return (
//             <div className="border">
//               <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 💖'}</h2>
//               <h4>{c.content}</h4>
//               <h3>
//                 <strong>- {c.author}</strong>
//               </h3>
//               <h4>Rating: {c.stars} ⭐️</h4> 
//             </div>
//           )
//         })
//       }
//     return (
//         <Def>
//             <main>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <img src={data.place.pic} alt={data.place.name} width={750} />
//                         <h3>Located in {data.place.city}, {data.place.state}</h3>
//                     </div>
//                     <div className="col-sm-6">
//                         <h1>{data.place.name}</h1>
//                         <h4>Rating</h4>
//                             {rating}
//                         <br />
//                         <h2>Description</h2>
//                             <h3>Serving {data.place.cuisines}</h3>
//                             <h4>
//                                 {data.place.showEstablished()}
//                             </h4>
//                         <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
//                             Edit
//                             </a> 
                             
//                             <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> {/*I think Henry had me remove the place in data.place.id I just put it back */}
//                                 <button type="submit" className="btn btn-danger">
//                                     Delete
//                                 </button>
//                             </form>     
//                         <h2>Comments</h2>
//                         {comments}
//                     </div>
//                 </div> 
//                 <hr />
//             <h2>Does {data.place.name} deserve a Rave 💖 or a Rant 🤬?</h2>
//             <form action={`/places/${data.place.id}/comment`} method="POST">
//               <div className="row">
//                 <div className="form-group col-sm-12">
//                   <label htmlFor="content">Content</label>
//                   <textarea id="content" name="content" className="form-control"></textarea>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="form-group col-sm-4">
//                   <label htmlFor="author">Author</label>
//                   <input id="author" name="author" className="form-control" />
//                 </div>
//                 <div className="form-group col-sm-4">
//                   <label htmlFor="stars">⭐️ Star Rating</label>
//                   <input type="range" step="0.5" min="0.5" max="5" id="stars" name="stars" className="form-control" />
//                 </div>
//                 <div className="form-group col-sm-2">
//                   <label htmlFor="rant">Rant?</label>
//                   <input type="checkbox" id="rant" name="rant" className="form-control" />
//                 </div>
                
//               </div>
//               <input type="submit" className="btn btn-primary" value="Add Comment" />
//             </form>       
//             </main>
//         </Def>
//     )
// }
// module.exports = show


// From above the code has been commented out so that new code can be tested for error that shows up

// const React = require("react");
// const Def = require("../default");
// //IMPORT COMMENT
// // const comments = require("../../models/comment.js"); testing the code without this to see if this will work 

// function show(data) {
//   console.log(data.place.id, "go");
//   let comments = <h3 className="inactive">Leave a comment!</h3>;
//   let rating = <h3 className="inactive">Not yet rated</h3>;
//   if (data.place.comments.length) {
//       // add rating
//     let sumRatings = data.place.comments.reduce((total, comment) => {
//   return total + comment.stars;
//     }, 0)
//     let averageRating = Math.round(sumRatings / data.place.comments.length);
//       let stars = "";
//       for (let i = 0; i < averageRating; i++) {
//         stars += "⭐️";
//       }
//       rating = <h3>{stars} stars</h3>
//       comments = data.place.comments.map((c) => {
//   return (
//     <div className="border">
//       <h2 className="rant">{c.rant ? "Rant! :(" : "Rave! :)"}</h2>
//       <h4>{c.content}</h4>
//       <h3>
//       <strong>- {c.author}</strong>
//       </h3>
//       <h4>Rating: {c.stars}</h4>
//       <form
//             method="POST"
//             action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
//           >
//             <input
//               type="submit"
//               className="btn btn-danger"
//               value="Delete Comment"
//             />
//           </form>
//       </div>
//       );
//     });
//   }
//   return (
//     <Def>
//       <main>
//         <div className="row">
//           <div className="col-sm-6">
//             <img className="img-fluid" src={data.place.pic} alt={data.place.name} />
//             <h3>
//               Located in {data.place.city}, {data.place.state}{" "}
//             </h3>
//           </div>
//           <div className="col-sm-6">
//             <h1>{data.place.name}</h1>
//             <div>
//             <h2>Rating</h2>
//               {rating}
//               <br />
//             </div>
//             <br />
//             <div>
//               <h2>Description</h2>
//               <h3>Serving {data.place.cuisines}</h3>
//               <h4>{data.place.showEstablished()}</h4>
//             </div>
//             <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
//               Edit
//             </a>
//             <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
//               <button type="submit" className="btn btn-danger">
//                 Delete
//               </button>
//             </form>
//           </div>
//           <hr />
//           <h2>Comments</h2>
//           {comments}
//           <hr />
//           <form
//             className="row g-3"
//             method="POST"
//             action={`/places/${data.place.id}/comment`}
//           >
//             <div className="col-12">
//               <label htmlFor="content" className="form-label">
//                 Your Comment
//               </label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="content"
//                 name="content"
//               />
//               <div className="col-md-4">
//               <label htmlFor="author">Author
//                   Your Name
//                 </label>
//                 <input className="form-control" id="author" name="author" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="stars" className="form-label">
//                   Stars
//                 </label>
//                 <input
//                   className="form-range"
//                   type="range"
//                   id="stars"
//                   name="stars"
//                   min="1"
//                   max="5"
//                   step="0.5"
//                 />
//               </div>
//               <div className="col-md-2">
//                 <div className="form-check">
//                   <label
//                     class="form-check-label"
//                     htmlFor="rant"
//                     id="rant-checkbox"
//                   >
//                     Rant?
//                   </label>
//                   <br />
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="rant"
//                     name="rant"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="form-group">
//               <input
//                 className="btn btn-primary"
//                 type="submit"
//                 value="Add Comment"
//               />
//             </div>
//           </form>
//         </div>
//       </main>
//     </Def>
//   )
// }

// module.exports = show

// Above this is your code, commenting out and trying a slightly different structured code, with same code. 


//     function show (data) {
//       console.log(data.place.id, "go");
//         let comments = <h3 className="inactive">No comments yet!</h3>    
//         if (data.place.comments.length) {
//           comments = data.place.comments.map(c => { 

//           // add rating: 
//             let sumRatings = data.place.comments.reduce((total, comment) => {
//               return total + comment.stars
//             }, 0)});
//             let averageRating = Math.round(sumRatings / data.place.comments.length);
//             let stars = "";
//             for (let i = 0; i < averageRating; i++) {
//               stars += "⭐️";
//             } }
//             rating = <h3> {stars} stars </h3>;
//             return (
//               <div className="col-sm-4 rant-box">
//                 <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
//                 <h4>{c.content}</h4>
//                 <h3>
//                   <stong>- {c.author}</stong>
//                 </h3>
//                 <h4>Rating: {c.stars}</h4>
//                 <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
//               <input type="submit" className="btn btn-danger" value="Delete Comment" />
//                 </form>
//               </div>
//             )
//           }
//         return (
//       <Def>
//         <main>
//           <div className='row'>
//               <div className='col-sm-6'>
//               <img className="img-fluid" src={data.place.pic} alt={data.place.name}/>
//                   <h3>Located in {data.place.city}, {data.place.state}</h3>
//               </div>    
//               </div>
//               <div className='col-sm-6'>
//               <h1>{data.place.name}</h1>
//               <div>
//               <h2>Rating</h2>
//               {rating}
//               <br/>
//               </div>
//               <div>
//                   <h2>Description</h2>
//                   <h3>{data.place.showEstablished()}</h3>
//                   <h4>Serving {data.place.cuisines}</h4>
//               </div>
//               <div className='col-sm-12'>
//                   <h2>Comments</h2>
//                   {comments}
//                   <p>No Comments Yet!</p>
//               </div>
//           </div>
//             <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
//             <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
//             <button type="submit" className="btn btn-danger"> Delete </button>
//             </form>
//             <hr/>
//       </main>
//     </Def>
//         )

// module.exports = show



// let rating = <h3 className="inactive">Not yet rated</h3>;

{/* {/* // router.get('/:id', (req, res) => {
//   db.Place.findById(req.params.id)
//   .then(place => {
//       res.render('places/show', { place }) */}
{/* //   })
//   .catch(err => { */}
{/* //       console.log('err', err)
//       res.render('error404')
//   })
// }) */} 