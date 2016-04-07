/*eslint-env node */
var ibmdb = require('ibm_db');
var http = require('http');
var fs = require('fs');


var table1 = "buyData";
var table2 = "SalesPredict"
var table3 = "ActualRent"
var table4 = "PredictedRent"
// function to encode file data to base64 encoded string
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
}

  function findKey(obj,lookup) {
     for (var i in obj) {
        if (typeof(obj[i])==="object") {
           if (i.toUpperCase().indexOf(lookup) > -1) {
              // Found the key
              return i;
           }
           findKey(obj[i],lookup);
        }
     }
     return -1;
  }

  exports.getActualBuy = function(request, response) {
     var serviceName = 'SQLDB';
     var env = null;
     var key = -1;
     var province = request.query.province;
     var city = request.query.city;
     console.log(request.body);
     if (process.env.VCAP_SERVICES) {
        env = JSON.parse(process.env.VCAP_SERVICES);
        key = findKey(env,serviceName);
     }

     if (key === -1) {
       response.write("Error finding VCAP-SERVICES environment variable containing \"" + serviceName + "\"\n");
       response.end();
     } else {
        var credentials = env[key][0].credentials;
        var dsnString = "DRIVER={DB2};DATABASE=" + credentials.db + ";UID=" + credentials.username + ";PWD=" + credentials.password + ";HOSTNAME=" + credentials.hostname + ";port=" + credentials.port;
        // var dsnString = credentials.uri;
        ibmdb.open(dsnString, function(err, conn) {
              if (err) {
                return  console.log(err);
              }
              var sqlStatement = 'SELECT "Year","Value" FROM "' + table1 + '" WHERE("City" = '+ "'" + city + "' and \"Province\" = '" + province +"')";
              conn.query(sqlStatement , function (err, data, moreResultSets) {
                if (err) {
                  console.log(err);
                    response.end();
                } else {
                  var res = [];
                 for(var i=0;i<data.length;i++) {
                   var temp = data[i];
                   res.push(temp);
                 }
                 response.json(res);
                 console.log(res);
                }
                conn.close(function () {
                });
                response.end();
              });
              });
     }
  }
  exports.getActualRent = function(request, response) {
     var serviceName = 'SQLDB';
     var env = null;
     var key = -1;
      var province = request.query.province;
     var city = request.query.city;
      var structure = request.query.structure;
     var unit = request.query.unit;
     console.log(request.body);
     if (process.env.VCAP_SERVICES) {
        env = JSON.parse(process.env.VCAP_SERVICES);
        key = findKey(env,serviceName);
     }

     if (key === -1) {
       response.write("Error finding VCAP-SERVICES environment variable containing \"" + serviceName + "\"\n");
       response.end();
     } else {
        var credentials = env[key][0].credentials;
        var dsnString = "DRIVER={DB2};DATABASE=" + credentials.db + ";UID=" + credentials.username + ";PWD=" + credentials.password + ";HOSTNAME=" + credentials.hostname + ";port=" + credentials.port;
        // var dsnString = credentials.uri;
        ibmdb.open(dsnString, function(err, conn) {
              if (err) {
                return  console.log(err);
              }
              var sqlStatement = 'SELECT "Annual Rent","Monthly rent","Year" FROM "' + table3 + '" WHERE("City" = '+ "'" + city + "' and \"Province\" = '" + province + "' and \"Structure\" = '" + structure + "' and \"Unit\" = '" + unit +"')";
              conn.query(sqlStatement , function (err, data, moreResultSets) {
                if (err) {
                  console.log(err);
                    response.end();
                } else {
                  var res = [];
                 for(var i=0;i<data.length;i++) {
                   var temp = data[i];
                   res.push(temp);
                 }
                 response.json(res);
                 console.log(res);
                }
                conn.close(function () {
                });
                response.end();
              });
              });
     }
  }
  exports.getPredictedBuy = function(request, response) {
     var serviceName = 'SQLDB';
     var env = null;
     var key = -1;
	var province = request.query.province;
     var city = request.query.city;
     if (process.env.VCAP_SERVICES) {
        env = JSON.parse(process.env.VCAP_SERVICES);
        key = findKey(env,serviceName);
     }

     if (key === -1) {
       response.write("Error finding VCAP-SERVICES environment variable containing \"" + serviceName + "\"\n");
       response.end();
     } else {
        var credentials = env[key][0].credentials;
        var dsnString = "DRIVER={DB2};DATABASE=" + credentials.db + ";UID=" + credentials.username + ";PWD=" + credentials.password + ";HOSTNAME=" + credentials.hostname + ";port=" + credentials.port;
        ibmdb.open(dsnString, function(err, conn) {
              if (err) {
                return  console.log(err);
              }
              var sqlStatement = 'SELECT "Year","Value" FROM "' + table2 + '" WHERE("City" = '+ "'" + city + "' and \"Province\" = '" + province +"')";
              conn.query(sqlStatement , function (err, data) {
                if (err) {
                  console.log(err);
                  response.end();
                } else {
                  /*var res = [];
                  for(var i=0;i<data.length;i++) {
                    var temp = data[i];
                    temp.IMG = base64_encode('./'+ data[i].IMG);
                    res.push(temp);
                    
                  }*/
                  console.log(data)
                   return response.json(200, data);
                }
                conn.close(function () {
                });
                response.end();
              });
              });
     }
  }


exports.getPredictedRent = function(request, response) {
   var serviceName = 'SQLDB';
   var env = null;
   var key = -1;
	 var province = request.query.province;
     var city = request.query.city;
      var structure = request.query.structure;
     var unit = request.query.unit;
   if (process.env.VCAP_SERVICES) {
      env = JSON.parse(process.env.VCAP_SERVICES);
      key = findKey(env,serviceName);
   }

   if (key === -1) {
     response.write("Error finding VCAP-SERVICES environment variable containing \"" + serviceName + "\"\n");
     response.end();
   } else {
      var credentials = env[key][0].credentials;
      var dsnString = "DRIVER={DB2};DATABASE=" + credentials.db + ";UID=" + credentials.username + ";PWD=" + credentials.password + ";HOSTNAME=" + credentials.hostname + ";port=" + credentials.port;
      ibmdb.open(dsnString, function(err, conn) {
            if (err) {
              return  console.log(err);
            }
            var sqlStatement = 'SELECT "Annual Rent","Monthly rent","Year" FROM "' + table4 + '" WHERE("City" = '+ "'" + city + "' and \"Province\" = '" + province + "' and \"Structure\" = '" + structure + "' and \"Unit\" = '" + unit +"')";
            conn.query(sqlStatement , function (err, data) {
              if (err) {
                console.log(err);
                  response.end();
              } else {
               /* var res = [];
                for(var i=0;i<data.length;i++) {
                  var temp = data[i];
                  temp.IMG = base64_encode('./'+ data[i].IMG);
                  res.push(temp);
                  console.log(data)
                }*/
                console.log(data)
                   return response.json(200, data);
              }
              conn.close(function () {
              });
              response.end();
            });
            });
   }
}
