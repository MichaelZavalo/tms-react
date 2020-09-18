//Basic class InitialClass
function InititalClass(arg) {
    this.arg = arg;
}
//method setSum
InititalClass.prototype.setSum = function (newSum) {
    this.arg = newSum
    return this;
}
// объявление переменной от класс InitialClass
let init = new InititalClass(2);


//ES 5 class Person child InitialClass
function IntBuilder(arg = 0) {
    InititalClass.call(this, arg);
};

IntBuilder.prototype = Object.create(InititalClass.prototype);
IntBuilder.prototype.constructor = IntBuilder;
//method plus
IntBuilder.prototype.plus = function (...n) {
    let sum = this.arg;
    for (let i = 0; i < arguments.length; i++) {
        sum += n[i];
    }
    this.arg = sum
    return this;
};
//method minus
IntBuilder.prototype.minus = function (...n) {
    let residual = this.arg;
    for (let i = 0; i < arguments.length; i++) {
        residual -= n[i];
    }
    this.arg = residual
    return this;
};
//method myltiply
IntBuilder.prototype.multiply = function (n) {
    let mult = this.arg;
    mult = this.arg * n;
    this.arg = mult
    return this;
};
//method divide
IntBuilder.prototype.divide = function (n) {
    let divide = this.arg;
    divide /= n;
    this.arg = divide;
    return this;
};
//method mod
IntBuilder.prototype.mod = function (n) {
    let mod = this.arg % n;
    this.arg = mod;
    return this;
};
//method get
IntBuilder.prototype.get = function () {
    return `-> ${this.arg}`;
};
//static method random
IntBuilder.prototype.random = function (from, to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from)) + from;
};

let build = new IntBuilder(10);
build
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get();

//ES 6 StringBuilder child class InitialClass
class StringBuilder extends InititalClass {
    constructor(arg = "") {
        super(arg)
    }

    plus(...str) {
        let sum = this.arg;
        for (let i = 0; i < arguments.length; i++) {
            sum += str[i];
        }
        this.arg = sum;
        return this;
    }

    minus(n) {
        let str = this.arg;
        str = str.substr(0, str.length - n);
        this.arg = str;
        return this;
    }

    multiply(int) {
        let str = this.arg;
        str = str.repeat(int);
        this.arg = str;
        return this;
    }

    divide(n) {
        let str = this.arg;
        let k = Math.floor(str.length / n);
        str = str.substring(0, k);
        this.arg = str;
        return this;
    }

    remove(str) {
        let string = this.arg,
            result = "";
        for (let i = 0; i <= string.length - 1; i++) {
            if (string[i].toLowerCase() !== str.toLowerCase()) {
                result = `${result}${string[i]}`;
            }
        }
        this.arg = result;
        return this;
    }

    sub(from, n) {
        let str = this.arg;
        str = str.substr(from, n);
        this.arg = str;
        return this;
    }

    get() {
        return `-> '${this.arg}'`;
    }

}

let element = new StringBuilder("Hello");
element
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 1)
    .get();
