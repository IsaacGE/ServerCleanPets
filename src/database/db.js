const mongoose = require("mongoose");
require('../config/config')

mongoose.connect(process.env.URLDB, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, resp) => {
        if (err) throw err; //Arroja error
        console.log('DataBase Connection:', process.env.URLDB.green); //todo bien
    });

module.exports = mongoose;
