const { Schema } = require('mongoose')

const managerSchema = new Schema(
    {
        managerName: {type: String, required: true},
        managerLocation: {type: String, required: true},
        managerImage: {type: String, required: true},
        employees: [{type: String, ref:'Employee', required: true}]
    },
    {timestamps:true}
)

module.exports = managerSchema