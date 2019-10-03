const express = require("express");
const routes = express.Router();

const multer = require("multer");
const uploadConfig = require("./config/upload");
const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.get("/spots/:id/bookings", BookingController.store);

module.exports = routes;
