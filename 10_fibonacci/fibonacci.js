const fibonacci = function(n) {

    if (n < 0){
        return "OOPS";
    }
    prev = 1
    next = 1
    // [1,1,2]
    for(let i = 1; i < n; i++){
        let temp = next;
        next = next + prev;
        prev = temp;
        console.log([prev, next])
        console.log(i);
    }
    return prev;

};

// Do not edit below this line
module.exports = fibonacci;
