const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all censuses
censusRoute.route('/').get((req, res) => {
    Census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get censuses: ${error}`);
  })
})

// Get a census
censusRoute.route('/:id').get((req,res) => {
  console.log('getting single census', req.params);
  Census.findById(req.params.id).then((response) => {
    res.status(200).json(response);
  })
  .catch((error) => {
    console.error(`Could not get census: ${error}`);
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

// Delete a census
censusRoute.route('/delete-census/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Census.findByIdAndDelete(req.params.id).then(() => {
    console.log('Census deleted successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not delete census: ${error}`);
  })
})

// Update a census
censusRoute.route('/update-census/:id').put((req, res) => {
  console.log('Preparing to update:', req.params, req.body);
  Census.findByIdAndUpdate(req.params.id, req.body).then(() => {
    console.log('Census updated successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not update census: ${error}`);
  })
})

module.exports = censusRoute;