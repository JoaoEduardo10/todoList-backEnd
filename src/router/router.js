const router = require("express").Router();
const tasksControllers = require("../controllers/tasksControllers");

router.get("/tasks", tasksControllers.getAll);
router.post("/tasks", tasksControllers.createdTasks);
router.delete("/tasks/:id", tasksControllers.deleteTask);
router.put("/tasks/:id", tasksControllers.updateTask);

module.exports = router;
