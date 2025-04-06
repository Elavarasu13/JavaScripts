//Map Object is collection of key value pair
//A key in the map only occur once
//key or value can be object

let map1  = new Map()
map1.set('a',1)
map1.set('b',1)
map1.set('a',3)
map1.set('d','e')
map1.set('g',7)
console.log(map1)

for (let i of map1) {
    console.log(i)
}
for( let [k,v] of map1){
    console.log(k,v);
}

for(let k of map1.keys())
{
    console.log(k);
}

for(let v of map1.values())
    {
        console.log(v);
    }

    map1.forEach((k,v) =>{
        console.log('key of', k, 'values of', v);
    })
// creating array of key value pairs to map
    let kvArray = [['a', 1],['b',1]]
    let map2 = new Map(kvArray)
    console.log(map2)