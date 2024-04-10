module.exports = (sequelize, Datatype) => {
    const Register = sequelize.define("register", {
        MemberID: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Firstname: {
            type: Datatype.STRING,
            allowNull: false
        },
        LAstname: {
            type: Datatype.STRING,
            allowNull: false
        },
        Birthdate: {
            type: Datatype.DATE,
            allowNull: false
        },
        Gender: {
            type: Datatype.STRING,
            allowNull: false
        },
        Nationally: {
            type: Datatype.STRING,
            allowNull: false
        },
        Occupation: {
            type: Datatype.STRING,
            allowNull: false
        },
        Address: {
            type: Datatype.STRING,
            allowNull: false
        },
        PhoneNo: {
            type: Datatype.STRING,
            allowNull: false
        },
        Email: {
            type: Datatype.STRING,
            allowNull: false
        }
    })
    return Register;
}   