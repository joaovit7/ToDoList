const express = require('express');
const taskscontroller = require('./controllers/taskscontroller');
const tasksmiddleware = require('./middlewares/tasksmiddleware');

const router = express.Router();

router.get('/tasks', taskscontroller.getAll);
router.post('/tasks', tasksmiddleware.validatetitle, taskscontroller.createtasks);
router.delete('/tasks/:id', taskscontroller.deletetasks);
router.put('/tasks/:id',

  tasksmiddleware.validatetitle,
  tasksmiddleware.validatestatus,
  taskscontroller.updatetasks);


module.exports = router;