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
    // DeleteDataById(con);
    // UpdateDataById(con)
    SelectData(con);
  }
});

// insert data
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

// delete data
const DeleteDataById = (con) => {
  let SQLQuery = "DELETE FROM `students_list` WHERE `id`='3'";
  con.query(SQLQuery, (error) => {
    if (error) { console.log('Data Delete Fail') }
    else
    {
      console.log('Data Delete Success')
    }
  })
};

// update data
const UpdateDataById = (con) => {
  let SQLQuery =
    "UPDATE `students_list` SET `name`='Kamal',`roll`='67',`class`='eight',`phone`='01845435',`city`='Gazipur' WHERE `id`= '2' ";
  con.query(SQLQuery, (err) => {
    if (err) { console.log('Data Update Fail') }
    else
    {
      console.log('Data Update Success');
    }
  })
};


// select data
const SelectData = (con) => {
  let SQLQuery = 'SELECT * FROM `students_list` ';
  con.query(SQLQuery, (err, result) => {
    if(err){console.log('Select Data Fail')}
    else
    {
      console.log('Select Data Success', result )
    }
  })
}