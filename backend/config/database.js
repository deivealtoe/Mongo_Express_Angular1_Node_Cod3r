const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://mongoadmin:superSecret03@localhost:27018/db_finance', { useMongoClient: true })