const tasksmodel = require('../models-DataBase/taskModels');

const getAll = async (req, res) => {

  const tasks = await tasksmodel.getAll();

  return res.status(200).json(tasks);
};

const createtasks = async (req, res) => {

  const createdtask = await tasksmodel.createtasks(req.body);

  return res.status(201).json(createdtask);

};

const deletetasks = async (req, res) => {

const { id } = request.params;

await tasksmodel.deletetasks(id);

return res.status(204).json();

};

const updatetasks = async (req, res) => {

  const { id } = request.params;
  
  await tasksmodel.updatetasks(id, request.body);
  
  return res.status(204).json();
  
};

module.exports = {
  getAll,
  createtasks,
  deletetasks,
  updatetasks,
};