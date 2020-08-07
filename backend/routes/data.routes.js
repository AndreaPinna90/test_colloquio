const express = require('express');
const dataRoute = express.Router();

// Student model
let DataModel = require('../models/Data');

dataRoute.route('/').get((req, res) => {
    DataModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 dataRoute.route('/').post((req, res, next) => {
    DataModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = dataRoute;