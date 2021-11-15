const path = require('path'); 

const express = require('express');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const customerRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(customerRoutes);

app.use((req, res, next)=>{
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
