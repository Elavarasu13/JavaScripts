
//type1:
let PriceUsd = [25 , 35 , 15];

let PriceInr = PriceUsd.map(x => x * 83)
console.log(PriceInr);

//type2:
let Inr =  PriceUsd.map(convert)

function convert(num)
{
    return num * 83;
}
console.log(Inr);

//Objects usig map

const input  = [
    { name:"Ela" , age : 27},
    {name : "Aravi", age : 35},
    {name : "Dhruv" , age : 25}]

    const ages = input.map(x => x.age)
    console.log(ages);

    const names =  input.map(x => x.name)
    console.log(names);

    //filter

    const cost = [35,234, 12,34,54,123];
    let lessthan100 = cost.filter(x => x<100)
    console.log(lessthan100);

    //reduce

    const reducer =  lessthan100.reduce((total,el) => total + el)
   console.log(reducer);