class Greeter {
    saySomething(message: string = 'whats up'){
        return message + 'hello';
    }
}

var greeter = new Greeter();
greeter.saySomething("yooyoyoy");