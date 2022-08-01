const Lecture = require("../models/Lecture");

class LectureController {
  static getLecture(req, res) {
    Lecture.getAllLectures()
      .then((result) => {
        // res.send(result);
        res.render('lecturer.ejs', {lecturers : result});
      })
      .catch((err) => res.send(err));
  }

  static createPage(req, res) {
    res.render('lecturer_add.ejs');
  }

  static updatePage(req, res) {
    const id = Number(req.params.id);
    Lecture.getInformation(id)
      .then((result) => {
        res.render('lecturer_edit.ejs', {lecture : result});
        res.redirect('/lecturers');
      })
      .catch((err) => res.send(err));
    
  }

  static create(req, res) {
    Lecture.create(req.body)
      .then((result) => {
        res.redirect('/lecturers');
      })
      .catch((err) => res.send(err));
  }

  static getId(req, res) {
    const id = Number(req.params.id);

    Lecture.getInformation(id)
      .then((result) => {
        res.render('lecturer_info.ejs', {lecture : result});
      })
      .catch((err) => res.send(err));
  }

  static delete(req, res) {
    const id = Number(req.params.id);

    Lecture.delete(id)
      .then((result) => {
        res.redirect('/lecturers');
      })
      .catch((err) => res.send(err));
  }

  static update(req, res) {
    const id = Number(req.params.id);

    Lecture.update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  }

  static search(req, res) {
    Lecture.search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  }
}

module.exports = LectureController;
