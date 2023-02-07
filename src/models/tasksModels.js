const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");

  return tasks;
};

const createTasks = async (tasks) => {
  const { title } = tasks;

  const dateUtc = new Date(Date.now()).toUTCString();

  const query = "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";

  const [createdTasks] = await connection.execute(query, [
    title,
    "pendente",
    dateUtc,
  ]);

  return createdTasks;
};

const deleteTasks = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  const [removedTasks] = await connection.execute(query, [id]);

  return removedTasks;
};

const updateTasks = async (id, task) => {
  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
  const [updateTask] = await connection.execute(query, [
    task.title,
    task.status,
    id,
  ]);

  return updateTask;
};

module.exports = {
  getAll,
  createTasks,
  deleteTasks,
  updateTasks,
};
