/*eslint-env node*/

var express = require('express');
var bodyParser = require('body-parser');
var cfenv = require('cfenv');
var app = express();

var routes = require('./routes/index');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use('/', routes);
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use(express.static(__dirname + '/public'));

var appEnv = cfenv.getAppEnv();

var services = {
  "sqldb": [
    {
      "name": "SQL Database-kl",
      "label": "sqldb",
      "plan": "sqldb_free",
      "credentials": {
        "hostname": "75.126.155.153",
        "password": "dx0nJLe2hi9m",
        "port": 50000,
        "host": "75.126.155.153",
        "jdbcurl": "jdbc:db2://75.126.155.153:50000/SQLDB",
        "uri": "db2://user17270:dx0nJLe2hi9m@75.126.155.153:50000/SQLDB",
        "db": "SQLDB",
        "username": "user17270"
      }
    }
  ]
}

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(appEnv.port, '0.0.0.0', function() {

  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});