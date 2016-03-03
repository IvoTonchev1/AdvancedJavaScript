function Solve() {
    var printArgsInfo = function() {
        for (var i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                console.log(arguments[i] + ' (array)');
            } else {
                console.log(arguments[i] + ' (' + typeof arguments[i] + ')');
            }
        }
    };

    playWithCall = function () {
        this.printArgsInfo.call(this);
        this.printArgsInfo.call(this, 'Calling with something', 'gosho');
        this.printArgsInfo.apply(this);
        this.printArgsInfo.apply(this, ['Applying with something', 1, 2, 3]);
    };

    return {
        printArgsInfo: printArgsInfo,
        playWithCall: playWithCall
    }
}

var solution = new Solve();
solution.printArgsInfo(2, 3, 2.5, -110.5564, false);
solution.printArgsInfo(null, undefined, "", 0, [], {});
solution.printArgsInfo([1, 2], ["string", "array"], ["single value"]);
solution.printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
solution.printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);

solution.playWithCall();