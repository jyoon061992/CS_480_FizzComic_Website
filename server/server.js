const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

var mysql = require('mysql');
var con = mysql.createConnection({
   host: 'us-cdbr-iron-east-04.cleardb.net',
   user: 'bb353640536722',
   password: 'f408fb6c',
   database: 'heroku_f8d562e61e70440',
   pool: { maxConnections: 50, maxIdleTime: 300}
});

con.connect(function(error){
   if(!!error){
       console.log('Error');
   }else{
       console.log('Connected');
   }
});

app.get('/api/logins', (req, res) => {
    con.query("select * from comics", function(err, rows, fields){
      console.log(rows.length);
      return res.json(rows)
      con.end();
    })
});

app.listen(3001, function(){
  console.log('Server started on Port 3001');
});
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('heroku_f8d562e61e70440', 'bb353640536722', 'f408fb6c', {
//   host: 'us-cdbr-iron-east-04.cleardb.net',
//   dialect: 'mysql',
//   operatorsAliases: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to clearDB Database established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// const User = sequelize.define('comics', {
//   cid: { type: Sequelize.STRING, primaryKey: true },
//   series: Sequelize.STRING,
//   title: Sequelize.STRING,
//   volume: Sequelize.STRING,
//   coverArt: Sequelize.STRING,
//   writers: Sequelize.STRING
// },{
//   timestamps: false
// });
// //query the database
// sequelize.sync().then(function (){
//   User.findById(2).then(function(users){
//      const data1 = users.dataValues.firstname;
//   });
// });
// const schema = require('./schema.js');
//
// app.use('/graphql', expressGraphQL({
//   schema:schema,
//   graphiql: true, 
// }));

// app.listen(3001, () => {
//   console.log('server running on port 4000..');
// });
