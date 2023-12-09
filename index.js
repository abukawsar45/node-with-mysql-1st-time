var mysql = require('mysql');


var DatabaseConnectionConfig = {
  host: 'localhost',
  user:'root',
  password: ''
}

var con = mysql.createConnection(DatabaseConnectionConfig)

con.connect((e) => {
  if (e)
  {
    console.log('Connection Fail')
  }
  else
  {
    console.log('Connection Success')
  }
} );