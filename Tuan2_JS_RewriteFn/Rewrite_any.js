Array.prototype.any = function(callback, thisArg) {
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + " is not a function");
    }
    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            return true; 
        }
    }

    return false;
};

const numbers = [1, 3, 7, 9, 11];

const hasNumberGreaterThanTen = numbers.any(num => num > 10);

console.log(hasNumberGreaterThanTen);