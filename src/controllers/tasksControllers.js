const tasksModels = require("../models/tasksModels");

const getAll = async (_req, res) => {
  try {
    const tasks = await tasksModels.getAll();

    return res.status(200).json(tasks);
  } catch (error) {
    return res
      .status(500)
      .send(`Aconteceu este erro mo servidor: ${error.message}`);
  }
};

const createdTasks = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(404).json({ message: "Title é obrigatorio" });
    return;
  }

  try {
    const createdTask = await tasksModels.createTasks(req.body);

    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).send(`Aconteceu este erro mo servidor: ${error.message}`);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await tasksModels.deleteTasks(id);

    return res.status(204).json();
  } catch (error) {
    return res
      .status(500)
      .send(`Aconteceu este erro no servidor: ${error.message}`);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  if (!title) return res.status(404).json({ message: "adicione um title" });
  if (!status) return res.status(404).json({ message: "adicione um status" });

  try {
    await tasksModels.updateTasks(id, req.body);

    return res.status(204).json();
  } catch (error) {
    return res
      .status(500)
      .send(`Aconteceu este erro no servidor: ${error.message}`);
  }
};

module.exports = {
  getAll,
  createdTasks,
  deleteTask,
  updateTask,
};
