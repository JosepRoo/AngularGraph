var express = require('express');
var app = express();

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/bar-graph-data', function (req, res) {
  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const data = [
    {
      label: 'Equipo 1',
      data: [12, 45, 21, 23, 3, 46, 25, 13, 16, 10, 15, 25]
    },
    {
      label: 'Equipo 2',
      data: [11, 39, 12, 6, 9, 33, 15, 23, 19, 21, 17, 22]
    }
  ]
  res.send(JSON.stringify({
    labels: labels,
    data: data
  }));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
