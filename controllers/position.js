const { Position } = require('../models');

const getAllPositions = async (req, res) => {
    try {
        const positions = await Position.find()
        res.json(positions)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOnePosition(req, res) {
    try {
        const id = req.params.id
        const position = await Position.findById(id)
        if (position) {
            return res.json(position)
        }
        return res.status(404).send('The Position with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createPosition(req,res) {
    try {
        const position = await new Position (req.body)
        await position.save()
        return res.status(201).json({
            position
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updatePosition(req,res) {
    try {
        const id = req.params.id
        const position = await Position.findByIdAndUpdate(id, req.body, {new: true})
        if (position) {
            return res.status(200).json(position)
        }
        throw new Error('This Position was not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deletePosition(req,res) {
    try {
        const id = req.params.id
        const position =  await Position.findByIdAndDelete(id)
        if (position) {
            return res.status(200).json(Position)
        }
        throw new Error('position was not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllPositions,
    getOnePosition,
    createPosition,
    updatePosition,
    deletePosition
}