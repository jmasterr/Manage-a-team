const { Schema } = require('mongoose')

const positionSchema = new Schema(
    {
        positionName: {type: String, required: true},
        positionSalary: {type: String, required: true},
        positionDescription: {type: String, required: true}
    },
    {timestamps:true}
)

module.exports = positionSchema