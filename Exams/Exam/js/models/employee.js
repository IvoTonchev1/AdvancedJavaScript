var app = app || {};

(function (app) {
    function Employee(name, workHours) {
        this._name = name;
        this._workHours = workHours;
    }

    Employee.prototype.getName = function() {
        return this._name;
    };

    Employee.prototype.setName = function(name) {
        if (!/[^a-zA-Z/s]/.test(name)) {
            throw new Error('Name should contain only letters and whitespace.');
        }

        this_name = name;
    };

    Employee.prototype.getWorkHours = function () {
        return this._workHours;
    };

    Employee.prototype.setWorkHourss = function (workHours) {
        if (isNaN(workHours)) {
            throw new Error('Value must be a number.');
        }

        this._workHours = workHours;
    };

    app._Employee = Employee;

    app.employee = Employee;

}(app));