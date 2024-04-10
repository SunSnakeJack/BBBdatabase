const config = require('../config/db');

const Datatype = require('sequelize');
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
       host: config.HOST,
       dialect: config.dialect,
       pool:{
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle
       }
    }
)

const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.Login = require("./mLogin")(sequelize, Datatype);
db.Register = require("./mRegister")(sequelize, Datatype);
db.Reservation = require("./mReservation")(sequelize, Datatype);
db.Room = require("./mRoom")(sequelize, Datatype);

//One to One relation
db.Register.hasOne(db.Login, {
    onDelete: 'CASCADE'
})
db.Login.belongsTo(db.Register)

//Many to Many 
db.Reservation.belongsToMany(db.Room,{
    through: "Reservations"
})
db.Reservation.belongsToMany(db.Register,{
    through: "Reservations"
})
db.Room.belongsToMany(db.Reservation,{
    through: "Reservations"
})
db.Room.belongsToMany(db.Register,{
    through: "Reservations"
})
db.Register.belongsToMany(db.Reservation,{
    through: "Reservations"
})
db.Register.belongsToMany(db.Room,{
    through: "Reservations"
})

module.exports = db


