var mysql = require('mysql');


var DatabaseConnectionConfig = {
  host: 'localhost',
  user:'root',
  password: '',
  database: 'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)

con.connect((e) => {  if (e){console.log('Connection Fail')}
  else
  {
    console.log('Connection Success')
    InsertData(con)
  }
});


const InsertData = (con) => {
  let SQLQuery =
    "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('AbuKawSar', '01', 'ten', '01787', 'Tangail' )";
  con.query(SQLQuery, (err) => {
    if (err) {
      console.log('Data insert Fail');
    } else {
      console.log('Data insert Success');
    }
  });
};