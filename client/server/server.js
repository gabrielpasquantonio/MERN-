
//mongodb

require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3001;

//cors
const cors = require("cors");
app.use(cors());

const UserRouter = require('./api/User');
const FavoriteRouter = require('./api/Favorite')

// For acepting post form data 

const bodyParser = require('express').json;
app.use(bodyParser());


app.use('/user', UserRouter);
app.use('/favorite', FavoriteRouter);
app.listen(port, ()=> {

    console.log(`Server running on port ${port}`)
})