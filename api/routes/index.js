'use strict'

const router = require('express').Router()
const hello = require('./hello_world')

router.use(hello)

module.exports = router
