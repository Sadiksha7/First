const express = require('express')
const route = express.Router()

const dashboardController = require('./../../Controller/dashboard/index')

route.get('/', dashboardController.getDashboard)

module.exports = route