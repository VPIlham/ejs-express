const lectureRoute = require("express").Router();

const LectureController = require('../controllers/LectureController');

lectureRoute.get("/", LectureController.getLecture);
lectureRoute.get("/create", LectureController.createPage); 
lectureRoute.post("/create", LectureController.create); 
lectureRoute.get("/information/:id", LectureController.getId);
lectureRoute.get("/delete/:id", LectureController.delete);
lectureRoute.get("/edit/:id", LectureController.updatePage);
lectureRoute.post("/update/:id", LectureController.update);
lectureRoute.get("/search", LectureController.search);

module.exports = lectureRoute;
