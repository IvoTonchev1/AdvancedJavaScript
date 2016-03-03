var app = app || {};
var eventsSystem = eventsSystem || {};

(function (app) {
    function Event(options) {
        this._title = options.title;
        this._type = oprions.type;
        this._date = options.date;
        this._duration = options.duration;
    }

    Event.prototype.getTitle = function() {
        return this._title;
    };

    Event.prototype.setTitle = function(title) {
        if (!/[^a-zA-Z/s]/.test(title)) {
            throw new Error('Title should contain only letters and whitespace.');
        }

        this._title = title;
    };

    Event.prototype.getType = function() {
        return this._type;
    };

    Event.prototype.setType = function(type) {
        if (!/[^a-zA-Z/s]/.test(type)) {
            throw new Error('Type should contain only letters and whitespace.');
        }

        this._type = type;
    };

    Event.prototype.getDuration = function() {
        return this._duration;
    };

    Event.prototype.setDuration = function(duration) {
        if (isNaN(duration)) {
            throw new Error('Value must be a number.');
        }

        this._duration = duration;
    };

    Event.prototype.getDate = function() {
        return this._date;
    };

    Event.prototype.setDate = function(date) {
        if (date instanceof Date) {
            this._date = date;
        }
        else {
            throw new Error('Date should be a valid date');
        }
    };

    app._Event = Event;

    app.event = Event;
}(app));