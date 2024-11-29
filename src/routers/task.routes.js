const { authJwt } = require("../middlewares");
const controller = require("../controllers/task.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/tasks",
    [authJwt.verifyToken],
    controller.createTask
  );

  app.get("/api/tasks", [authJwt.verifyToken], controller.getAllTasks);

  app.get("/api/tasks/:id", [authJwt.verifyToken], controller.getTaskById);

  app.put("/api/tasks/:id", [authJwt.verifyToken], controller.updateTask);

  app.delete("/api/tasks/:id", [authJwt.verifyToken], controller.deleteTask);
};