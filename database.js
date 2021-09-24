const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mean-empleados", {
    useUnifiedTopology: true,
    useNewUrlParser: true
    //useFindAndModify: false
})
.then((db) => console.log('Database is connected'))
.catch((err) => console.error(err));