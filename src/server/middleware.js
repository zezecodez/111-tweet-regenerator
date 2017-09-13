const express = require('express')
const router = require('express').Router()

router.use(express.static('public'))

module.exports = router
