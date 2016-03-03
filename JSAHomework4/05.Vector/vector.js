var Vector = (function () {
    function Vector(dimensions) {
        if (!dimensions || !Array.isArray(dimensions) || dimensions.length === 0) {
            throw new Error("A vector must have dimensions.");
        }

        this.dimensions = dimensions;
    }

    Vector.prototype.toString = function () {
        var result = "(" + this.dimensions.join(", ") + ")";

        return result;
    };

    Vector.prototype.add = function (other) {
        if (!(other instanceof Vector)) {
            throw new Error("A vector can only be added with another vector.");
        }

        var currentVectorDimensionsCount = this.dimensions.length;
        if (currentVectorDimensionsCount !== other.dimensions.length) {
            throw new Error("The two vectors should have the same number of dimensions.");
        }

        var resultDimensions = [];

        for (var i = 0; i < currentVectorDimensionsCount; i++) {
            resultDimensions.push(this.dimensions[i] + other.dimensions[i]);
        }

        return new Vector(resultDimensions);
    };

    Vector.prototype.subtract = function (other) {
        if (!(other instanceof Vector)) {
            throw new Error("A vector can only be added with another vector.");
        }

        var currentVectorDimensionsCount = this.dimensions.length;
        if (currentVectorDimensionsCount !== other.dimensions.length) {
            throw new Error("The two vectors should have the same number of dimensions.");
        }

        var resultDimensions = [];

        for (var i = 0; i < currentVectorDimensionsCount; i++) {
            resultDimensions.push(this.dimensions[i] - other.dimensions[i]);
        }

        return new Vector(resultDimensions);
    };

    Vector.prototype.dot = function(other) {
        var result = 0;

        var currentVectorDimensionsCount = this.dimensions.length;
        if (currentVectorDimensionsCount !== other.dimensions.length) {
            throw new Error("The two vectors should have the same number of dimensions.");
        }

        for (var i = 0; i < currentVectorDimensionsCount; i++) {
            result += this.dimensions[i] * other.dimensions[i];
        }

        return result;
    };

    Vector.prototype.norm = function() {
        var result = Math.sqrt(this.dot(this));

        return result;
    };

    return Vector;
})();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

//var wrong = new Vector();
//var anotherWrong = new Vector([]);
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

//a.add(c);
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

//a.subtract(c);
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.dot(b);
console.log(result.toString());

//a.dot(c);
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
