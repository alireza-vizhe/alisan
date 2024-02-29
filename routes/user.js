const express = require("express");

const usController = require("../controller/usController");

const route = express.Router();

route.post("/register-user", usController.register);
route.post("/login-user", usController.handleLogin);
route.get("/users", usController.getUsers);
route.post("/send-task", usController.snzMessages);
route.get("/get-tasks", usController.getTasks)
route.post("/complete-task", usController.completeTask)
route.post("/delete-task", usController.deleteMessage)
// route.get("/users", usController.getUsers);

module.exports = route;