var app = app || {};

(function (app) {
    function Lecture(options) {
        app._Event.apply(this, arguments);
        this._trainer = options.trainer;
        this._course = options.course;
    }

    Lecture.prototype.getTrainer = function() {
        return this._trainer;
    };

    Lecture.prototype.setTrainer = function(trainer) {
        if (trainer instanceof Trainer) {
            this._trainer = trainer;
        }
        else {
            throw new Error('Trainer must be instance of Trainer object.');
        }
    };

    Lecture.prototype.getCourse = function() {
        return this._course;
    };

    Lecture.prototype.setCourse = function(course) {
        if (course instanceof Course) {
            this._course = course;
        }
        else {
            throw new Error('Course must be inastance of Course object.');
        }
    };

    Lecture.extend(app._Event);

    app.lecture = Lecture;
}(app));