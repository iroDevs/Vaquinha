const express = require('express')
const router = express.Router()
const AdmController = require('../controller/AdmController.js')

router.post('/adms', AdmController.RegisterAdm)
