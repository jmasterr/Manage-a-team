const mongoose = require('mongoose')
const employeeSchema = require('./employee')
const managerSchema = require('./manager')
const positionSchema = require('./position')

const Position = mongoose.model('Position', positionSchema)
const Employee = mongoose.model('Employee', employeeSchema)
const Manager = mongoose.model("Manager", managerSchema)

module.exports = {
    Position,
    Employee,
    Manager
}