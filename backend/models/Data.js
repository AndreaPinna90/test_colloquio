const mongoose = require('mongoose');
const { Number } = require('core-js');
const Schema = mongoose.Schema;

let dataSchema = new Schema({
  clicked_at: {
    type: String
  },
  ip_address: {
    type: String
  },
  user_agent: {
    type: String
  }
}, {
  collection: 'clicks'
})

module.exports = mongoose.model('Data', dataSchema)