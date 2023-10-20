const { Schema } = require('mongoose')

const employeeSchema = new Schema(
    {
        nameOfEmployee: {type: String, required: true},
        image: {type: String, required: true},
        status: {type: Boolean, required: true},
        employerTenure: {type: String, required: true},
        position: {type: String, ref: "Position", required: true},
        salary: {type: String, required: true}
    },
    {timestamps:true}
)

module.exports = employeeSchema