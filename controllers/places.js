const router = require('express').Router()
// const router = express.Router();
const places = require("../models/places.js");
const comments = require("../models/comment.js");
const db = require('../models')
const mongoose = require("mongoose")

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})


router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
  }
  else {
      res.render('error404')
  }
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant = req.body.rant ? true : false
    db.Place
      .findById(req.params.id)
      .then(place => {
        // Todo: Create comment
        db.Comment
          .create(req.body)
          .then(comment => {
            place.comments.push(comment.id)
            place
              .save()
              .then(() => {
                res.redirect(`/places/${req.params.id}`)
              })
          }).catch(err => {
              res.render('error404')
          })
      }).catch(err => {
          res.render('error404')
      })
  })

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

// from here



    router.delete('/:id/comment/:commentId', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
        console.log('err', err)
        res.render('error404')
})
})

//   router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })
    

  module.exports = router

  // cut off this below code and replaced with line 134 





  // router.get('/new', (req, res) => {
  //   res.render('places/new')
  // })
  

  // router.put('/:id', (req, res) => {
  //   res.send('PUT /places/:id stub')
  // })
  
  // router.delete('/:id', (req, res) => {
  //   res.send('DELETE /places/:id stub')
  // })
  
  // router.get('/:id/edit', (req, res) => {
  //   res.send('GET edit form stub')
  // })
  
  // router.post('/:id/rant', (req, res) => {
  //   res.send('GET /places/:id/rant stub')
  // })
  
  // router.delete('/:id/rant/:rantId', (req, res) => {
  //     res.send('GET /places/:id/rant/:rantId stub')
  // })
  

  // module.exports = router


// // router.get('/:id/edit', (req, res) => {
// //  res.send('GET edit form stub')
// // })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })




  //  res.send('GET /places/:id/comment stub')
  
// if (req.body.rant) {
//   req.body.rant = true
// } 
// else {
//   req.body.rant = false
// }


 
  //router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   db.Place.findById(id)
//   .populate('comments')
//   .then((place) => {
//     // console.log(place.comments)
//     if (!place) {
//       res.render('error404');
//     } else {
//       res.render('places/show', {place});
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     res.render('error404');
//   });
// });
