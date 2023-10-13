const removeFromArray = function(...args) {


    let newArr = [];

    // args[0].forEach((item) => {
    //     if (!args.includes(item)) {
    //         newArr.push(item);
    //     }
    // });
    // // console.log(args[0]);
    // console.log(newArr);

    for(let i = 0; i < args[0].length;i++) {
        // console.log(args[0][i]);
        if (args.includes(args[0][i])) {
            continue;
        }
        else {
            newArr.push(args[0][i]);
        }
    }
    console.log(newArr);
    return newArr;
}



removeFromArray(["hey", 2, 3, "ho"], "hey", 3, ["hey", 2, 3, "ho"])

// Do not edit below this line
module.exports = removeFromArray;
