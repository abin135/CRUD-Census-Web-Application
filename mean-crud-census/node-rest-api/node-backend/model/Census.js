const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    year: { type: String },
    takerName: { type: String },
    numPeople: { type: String },
    householdAddress: { type: String },
    householdCity: { type: String },
    householdState: { type: String },
    householdZip: { type: String}
}, {
    collection: 'censuses'
});

module.exports = mongoose.model('Census', CensusSchema);
