const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_f8d562e61e70440', 'bb353640536722', 'f408fb6c', {
  host: 'us-cdbr-iron-east-04.cleardb.net',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const User = sequelize.define('comics', {
  cid: { type: Sequelize.STRING, primaryKey: true },
  series: Sequelize.STRING,
  title: Sequelize.STRING,
  volume: Sequelize.STRING,
  coverArt: Sequelize.STRING,
  writers: Sequelize.STRING
},{
  timestamps: false
});
// User.findAll().then(users => {
//   console.log(users)
// })
sequelize.sync().then(function (){
  User.findById(2).then(function(users){
    console.log(users.dataValues.firstname);
  });
});
