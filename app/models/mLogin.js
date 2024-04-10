module.exports = (sequelize, Datatype) => {
    const Login = sequelize.define("logins", {
        LoginID: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: Datatype.STRING,
            allowNull: false
        }
    })
    return Login;
}   