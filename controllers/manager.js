const { Manager } = require('../models');


const getAllManagers = async (req, res) => {
    try {
        const managers = await Manager.find()
        res.json(managers)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneManager(req, res) {
    try {
        const id = req.params.id
        const manager = await Manager.findById(id)
        if (manager) {
            return res.json(manager)
        }
        return res.status(404).send('Manager with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewManagerProfile(req,res) {
    try {
        const manager = await new manager (req.body)
        await manager.save()
        return res.status(201).json({
            manager
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateManager(req,res) {
    try {
        const id = req.params.id
        const manager = await Manager.findByIdAndUpdate(id, req.body, {new: true})
        if (manager) {
            return res.status(200).json(manager)
        }
        throw new Error('Manager not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteManager(req,res) {
    try {
        const id = req.params.id
        const manager =  await Manager.findByIdAndDelete(id)
        if (manager) {
            return res.status(200).json(Manager)
        }
        throw new Error('Manager not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllManagers,
    getOneManager,
    createNewManagerProfile,
    updateManager,
    deleteManager
}