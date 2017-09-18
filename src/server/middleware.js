const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(express.static('public'))

router.use((req, res, next) => {
  res.locals.tweets = ''
  next()
})

module.exports = router
