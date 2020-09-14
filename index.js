//ES 5 class Person
function Person(arg) {
    if (arg !== 0) {
        this.arg = arg;
    }

    Person.prototype.plus = function (...n) {
        let sum = this.arg;
        for (let i = 0; i < arguments.length; i++) {
            sum += n[i];
        }
        return this.arg = sum;
    };

    Person.prototype.minus = function (...n) {
        let residual = this.arg;
        for (let i = 0; i < arguments.length; i++) {
            residual -= n[i];
        }
        return this.arg = residual;
    };

    Person.prototype.multiply = function (n) {
        let mult = this.arg;
        mult = this.arg * n;
        return this.arg = mult;
    };

    Person.prototype.divide = function (n) {
        let divide = this.arg;
        divide /= n;
        return this.arg = divide;
    };

    Person.prototype.mod = function (n) {
        let mod = this.arg % n;
        return this.arg = mod;
    };

    Person.prototype.get = function () {
        return `-> ${this.arg}`;
    };

    Person.prototype.random = function (from, to) {
        from = Math.ceil(from);
        to = Math.floor(to);
        return Math.floor(Math.random() * (to - from)) + from;
    };
};

function Admin(arg) {
    Person.call(this, arg);
}
Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.login = function () {
    return `This is you login "${this.arg}"`;
}

function User(arg) {
    Person.call(this, arg);
}
User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;
User.prototype.aler = function () {
    return alert(this.arg);
}

const thirdUser = new User(0);
const admin = new Admin(10);
const secondAdmin = new Admin(20);
const mainUser = new User(25);
const secondUSer = new User(35);


//ES 6 StringBuilder
class StringWith {
    constructor(str) {
        if (str[0] !== '') {
            this.str = str;
        }
    }

    plus(...str) {
        let sum = this.str;
        for (let i = 0; i < arguments.length; i++) {
            sum += str[i];
        }
        return this.str = sum;
    }

    minus(n) {
        let str = this.str;
        str = str.substr(0, str.length - n);
        return this.str = str;
    }

    multiply(int) {
        let str = this.str;
        str = str.repeat(int);
        return this.str = str;
    }

    divide(n) {
        let str = this.str;
        let k = Math.floor(str.length / n);
        str = str.substring(0, k);
        return this.str = str;
    }

    remove(str) {
        let string = this.str,
            result = "";
        for (let i = 0; i <= string.length - 1; i++) {
            if (string[i].toLowerCase() !== str.toLowerCase()) {
                result = `${result}${string[i]}`;
            }
        }
        return this.str = result;
    }

    sub(from, n) {
        let str = this.str;
        str = str.substr(from, n);
        return this.str = str;
    }

    get() {
        return `-> '${this.str}'`;
    }

}

let element = new StringWith("Hello");


class StringWithAuthor extends StringWith {
    constructor(str, authorName) {
        super(str);
        this.authorName = authorName;
    }

    setName(newName) {
        return this.authorName = newName;
    }

}

let childElement = new StringWithAuthor("Hello", "Michael Richarlson");


class StringAndSumOfCopies extends StringWith {
    constructor(str, sumOfCopies){
        super(str,sumOfCopies);
        this.sumOfCopies = sumOfCopies;
    }

    getAllCopiesInTheWolrd(numberOfСountries) {
        let mult = this.sumOfCopies;
        mult *= numberOfСountries;
        return mult;
    }

}

let copies = new StringAndSumOfCopies("How are you?",50);
