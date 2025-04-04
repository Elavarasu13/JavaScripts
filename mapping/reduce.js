arr2d = [
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"],
];
console.log(arr2d);
//convert 2dimension to single dimension
console.log(arr2d.flat());

let count = arr2d.flat().reduce((accum ,currval) =>
    {
        if(accum[currval])
            // if the currval is present na
            //true then it will increacse
            accum[currval]++
            //otherwise it wll add 1
        else
        accum[currval] = 1
    return accum;
}
,{})

console.log(count);