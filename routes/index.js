const route = require('express').Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

const lectureRoutes = require('./lecture');
const studentRoutes = require('./student');

route.use('/lecturers', lectureRoutes);
route.use('/students', studentRoutes);


module.exports = route;