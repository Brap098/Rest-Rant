
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Todo.find()
    .then((todos) => {
      res.render('todos/index', { todos })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then(() => {
      res.redirect('/todos')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('todos/new')
})

router.get('/:id', (req, res) => {
  db.Todo.findById(req.params.id)
  .then(todo => {
      res.render('todos/show', { todo })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/todos/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Todo.findByIdAndDelete(req.params.id)
  .then(post => {
   res.redirect('/todos')
  })
  .catch(err => {
   console.log('err', err)
   res.render('error404')
  })
 })

router.get('/:id/edit', (req, res) => {
  db.Todo.findById(req.params.id)
  .then(todo => {
    res.render('todos/edit', {todo})
  })
  .catch(err => {
    res.render('error404')
  })
})

router.get('/:id/add', (req, res) => {
  db.Todo.findById(req.params.id)
  .then(todo => {
    res.render('todos/add', {todo})
  })
  .catch(err => {
    res.render('error404')
  })
})

module.exports = router
