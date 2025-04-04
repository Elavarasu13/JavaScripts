 let a = 200;

 function outer(name)
 {
    //we can access this outervar to inner() this is lexical scoping
    //and we can access the global scope var from inner()
    //but we cannot access the inner from outer();
   let OuterVariable = 'Bread'

   function inner()
   {
    let innerVariable = "Butter"
    console.log(innerVariable);
    console.log(OuterVariable);
    console.log(a);
    console.log("Welcome",name);
   }
  return inner
 }
let call1 =  outer('Elavarasu')
call1()
let call2 = outer("Kaviya");
// in javascript parameters are not deleted onec it will be accessced
// beacuse of the name as a parameter it will bind to the 
//inner function so it will bind with the inner()
//This is closure ... whenvevr we call a function it will recall the paramete
call2()
call1()
 
//closure...
function makeAdder(x)
{
    return function(y)
    {
       return  x+y;
    }
}

// add5 is a full of inner function in makeadder()
let add5 = makeAdder(5)
console.log(add5(10));
let add100 = makeAdder(20)
    console.log()