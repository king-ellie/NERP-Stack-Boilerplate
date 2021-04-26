const { Sequelize, DataTypes } = require('sequelize')

const dbName
const db = new Sequelize(`postgres://localhost/${dbName}`, {logging: false})

// Define models here or move them to other files in the db directory
const SampleModel = db.define('nameOfModel', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = {
    db,
    models: {
        SampleModel,
    }
}