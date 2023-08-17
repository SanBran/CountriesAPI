const {
  getActivitiesHandler,
  createActivityHandler,
} = require("../handlers/activitiesHandlers");

const activityRoutes = require("express").Router();

activityRoutes.get("/", getActivitiesHandler);
activityRoutes.post("/", createActivityHandler);

module.exports = activityRoutes;
