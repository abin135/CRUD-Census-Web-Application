const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    year_of_the_Census: { type: String },
    census_Takers_Name: { type: String },
    number_of_People_in_Household: { type: String },
    household_State: { type: String },
    household_City: { type: String }
}, {
    collection: 'censuses'
});

module.exports = mongoose.model('Census', CensusSchema);
