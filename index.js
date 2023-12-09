var mysql = require('mysql');

var DatabaseConnectionConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school',
};

var con = mysql.createConnection(DatabaseConnectionConfig);

con.connect((e) => {
  if (e) {
    console.log('Connection Fail');
  } else {
    console.log('Connection Success');
    // InsertData(con);
    DeleteDataById(con);
  }
});

const InsertData = (con) => {
  let SQLQuery =
    "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Kawsar', '03', 'ten', '01581', 'Dhaka' )";
  con.query(SQLQuery, (err) => {
    if (err) {
      console.log('Data insert Fail');
    } else {
      console.log('Data insert Success');
    }
  });
};


const DeleteDataById = (con) => {
  let SQLQuery = "DELETE FROM `students_list` WHERE `id`='3'";
  con.query(SQLQuery, (error) => {
    if(error){console.log('Data Delete Fail')}
    else
    {
      console.log('Data Delete Success')
    }
  })
}