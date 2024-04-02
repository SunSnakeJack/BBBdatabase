module.exports = (sequelize,Datatype) => {
    const test = sequelize.define("Test",{
        id:{
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        name:{
            type: Datatype.STRING,
            allowNull: false
        },
        position:{
            type: Datatype.STRING,
            allowNull: false
        }
    })
    return test;
}