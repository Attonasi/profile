'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));

app.get('*', function(request, response){
  response.sendFile('index.html', {root: '/public'});
});

app.listen(PORT, function(){});
