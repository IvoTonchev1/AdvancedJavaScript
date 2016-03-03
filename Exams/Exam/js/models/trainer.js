var app = app || {};

(function (app) {
    function Trainer(name, workHours) {
        app._Employee.apply(this, arguments);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.prototype.addCourse = function (course) {
        this.courses.push(course);
    };

    Trainer.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
    };

    Trainer.extend(app._Employee);

    app.trainer = Trainer;
}(app));