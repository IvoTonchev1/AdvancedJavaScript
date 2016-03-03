var app = app || {};

(function (app) {
    function Hall(name, capacity) {
        this._name = name;
        this._capacity = capacity;
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.getName = function() {
        return this._name;
    };

    Hall.prototype.setName = function(name) {
        if (!/[^a-zA-Z/s]/.test(name)) {
            throw new Error('Name should contain only letters and whitespace.');
        }

        this_name = name;
    };

    Hall.prototype.getCapacity = function () {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function (capacity) {
        if (isNaN(capacity)) {
            throw new Error('Value must be a number.');
        }

        this._capacity = capacity;
    };

    Hall.prototype.addEvent = function(event) {
        if (event.type === 'lecture'){
            this.lectures.push(event);
        }
        else if (event.type === 'party') {
            this.parties.push(event);
        }
        else {
            throw new Error('Invalid event type!');
        }
    };

    app.hall = Hall;
}(app));