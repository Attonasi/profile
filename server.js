'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));

app.get('*', function(request, response){
  response.sendFile('index.html', {root: '/public'});
});

app.listen(PORT, function(){});

// NOTE FROM BRAE: A console.log notifying the user that the server is up and running would be nice here, but otherwise is working.
