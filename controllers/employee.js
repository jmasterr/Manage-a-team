const { Employee } = require('../models');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneEmployee(req, res) {
    try {
        const id = req.params.id
        const employee = await Employee.findById(id)
        if (employee) {
            return res.json(employee)
        }
        return res.status(404).send('Employee with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewEmployeeProfile(req,res) {
    try {
        const employee = await new Employee (req.body)
        await employee.save()
        return res.status(201).json({
            employee
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateEmployee(req,res) {
    try {
        const id = req.params.id
        const employee = await Employee.findByIdAndUpdate(id, req.body, {new: true})
        if (employee) {
            return res.status(200).json(employee)
        }
        throw new Error('Employee not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteEmployee(req,res) {
    try {
        const id = req.params.id
        const employee =  await Employee.findByIdAndDelete(id)
        if (employee) {
            return res.status(200).json(Employee)
        }
        throw new Error('Employee not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllEmployees,
    getOneEmployee,
    createNewEmployeeProfile,
    updateEmployee,
    deleteEmployee
}