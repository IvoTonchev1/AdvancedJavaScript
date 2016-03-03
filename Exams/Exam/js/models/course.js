var app = app || {};

(function (app) {
    function Course(name, numberOfLectures) {
        this._name = name;
        this._numberOfLectures = numberOfLectures;
    }

    Course.prototype.getName = function() {
        return this._name;
    };

    Course.prototype.setName = function(name) {
        if (!/[^a-zA-Z/s]/.test(name)) {
            throw new Error('Name should contain only letters and whitespace.');
        }

        this_name = name;
    };

    Course.prototype.getNumberOfLectures = function () {
        return this._numberOfLectures;
    };

    Course.prototype.setNumberOfLectures = function (numberOfLectures) {
        if (isNaN(numberOfLectures)) {
            throw new Error('Value must be a number.');
        }

        this._numberOfLectures = numberOfLectures;
    };

    app.course = Course;
}(app));