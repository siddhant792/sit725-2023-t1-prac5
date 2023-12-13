let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./db');
let router = require('./routers/router');
let http = require('http').createServer(app);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

http.listen(port, ()=>{
    console.log('express server started');
});
