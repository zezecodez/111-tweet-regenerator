const router = require('express').Router()

router.get('/', (req, res) => {
  console.log('AM I HERE????')
  res.status(200).render('index')
})

module.exports = router
