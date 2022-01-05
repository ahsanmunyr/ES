// Closure
var sum = function (a) {
    console.log(a)
    var c = 1; // lexical scope

    return function (b) {  // closure and
        return a + b + c
    }
}

var store = sum(2)
console.log(store(3))
// sum(12)



// var add = function ()