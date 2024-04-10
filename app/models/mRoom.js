module.exports = (sequelize, Datatype) => {
    const Room = sequelize.define("rooms", {
        RoomNo: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        RoomName: {
            type: Datatype.STRING,
            allowNull: false
        },
        RoomType: {
            type: Datatype.STRING,
            allowNull: false
        },
        RoomStatus: {
            type: Datatype.STRING,
            allowNull: false
        },
        RoomPrice: {
            type: Datatype.INTEGER,
            allowNull: false
        }
    })
    return Room;
}   