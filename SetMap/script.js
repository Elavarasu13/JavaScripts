//Set --Object // collection unique values 
//we cannot stored a duplicate values in set but we can store duplicate 
//objects in set because obeject is reference so it will stored different memory


let arr = [1,1,2,3,4,5,5,5,5,10,8]
let myset1 = new Set(arr)
console.log(arr)
console.log(myset1)

let myset2 = new Set();
myset2.add(1);
myset2.add(2);
myset2.add({a:1,b:2});
myset2.add({a:1,b:2});
console.log(myset2);

//change array from set

 let newArray = Array.from(myset2);
 console.log(newArray);