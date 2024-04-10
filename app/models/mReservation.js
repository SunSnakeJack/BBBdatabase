module.exports = (sequelize,Datatype) => {
    const Reservation = sequelize.define("reservation",{
        ReservationID:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        Duration:{
            type: Datatype.INTEGER,
            allowNull: false
        },
        ReservationStatus:{
            type: Datatype.STRING,
            allowNull: false
        }
    })
    return Reservation;
}