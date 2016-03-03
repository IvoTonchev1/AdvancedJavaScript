var app = app || {};

(function (app) {
    function Party(options) {
        app._Event.apply(this, arguments);
        this._isCatered = options.isCatered;
        this._isBirthday = options.isBirthday;
        this._organiser = options.organiser
    }

    Party.prototype.getIsCatered = function() {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function(isCatered) {
        this._isCatered = !!isCatered;
    };

    Party.prototype.getIsBirthday = function() {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function(isBirthday) {
        this._isBirthday = !!isBirthday;
    };

    Party.prototype.getOrganiser = function() {
        return this._organiser;
    };

    Party.prototype.setOrganiser = function(organiser) {
        if (organiser instanceof Employee) {
            this._organiser = organiser;
        }
        else {
            throw new Error('Organiser must be an instance of Employee object.');
        }
    };

    Party.extend(app._Event);

    app.party = Party;
}(app));