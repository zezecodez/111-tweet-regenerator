const express = require('express')
const router = require('express').Router()

router.use(express.static('public'))

router.use((req, res, next) => {
  res.locals.tweets = ''
  next()
})

module.exports = router
