const express = require('express');
const path = require('path');
const app= express();
const router= require('./routes/mainRoutes');

app.use(express.static((path.resolve(__dirname,'public'))));
 
app.set('view engine', 'ejs');

app.use(router);

app.listen (4000, () => {
    console.log ('servidor corriendo, Host 4000')
});