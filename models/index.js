const Sequelize = require('sequelize')

const Express = require('express')

const allConfigs = require('../config/Sequelize')

const TeamsModel = require('./teams')

const config = allConfigs['development'] 

const connection = new Sequelize(config.host, config.database, config.username, config.password, config.dialect, {
    host: config.host,
    dialect: config.dialect,
})

const Teams = TeamsModel(connection, Sequelize)
connection.authenticate()

exports.TeamsModel = ('')