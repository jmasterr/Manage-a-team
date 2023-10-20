const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')

//controllers vvv
const employeeController = require('./controllers/employee')
const managerController = require('./controllers/manager')
const positionController = require('./controllers/position')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(logger('dev'))

//vvv ROUTES
app.get('/employee', employeeController.getAllEmployees)
app.get('/manager', managerController.getAllManagers)
app.get('/position', positionController.getAllPositions)

app.get('/employee/:id', employeeController.getOneEmployee)
app.get('/manager/:id', managerController.getOneManager)
app.get('/position/:id', positionController.getOnePosition)

app.post('/employee', employeeController.createNewEmployeeProfile)
app.post('/manager', managerController.createNewManagerProfile)
app.post('/position', positionController.createPosition)

app.put('/employee/:id', employeeController.updateEmployee)
app.put('/manager/:id', managerController.updateManager)
app.put('/position/:id', positionController.updatePosition)

app.delete('/employee/:id', employeeController.deleteEmployee)
app.delete('/manager/:id', managerController.deleteManager)
app.delete('/position/:id', positionController.deletePosition)



app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  