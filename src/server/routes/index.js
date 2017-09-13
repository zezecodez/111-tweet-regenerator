const router = require('express').Router()

router.get('/', (req, res) => {
  console.log('AM I HERE????')
  res.render('index')
})

module.exports = router
