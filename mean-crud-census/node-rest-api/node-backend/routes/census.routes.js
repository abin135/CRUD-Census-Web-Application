const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all Books
censusRoute.route('/').get((req, res) => {
    Census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get censuses: ${error}`);
  })
})

// Add a census
censusRoute.route('/add-census').post((req, res) => {
  Census.create(req.body).then(() => {
    console.log('Census added successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not save census: ${error}`);
  })
})

module.exports = censusRoute;