var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + 'hello';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething("yooyoyoy");
//# sourceMappingURL=magic.js.map