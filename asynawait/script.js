function fn(){
    return 'hello'
}

console.log(fn() ,`Bro`)

//await is only valid in async function()

let reachA =  new Promise((resolve,reject) => {
    const reached = false
    if(reached)
        setTimeout(resolve,3000,"Elavarasu reached")
    else
        reject("Elavarasu not reached")

})
//if we cannot using try na it throw uncaught error
async function asyncstatus(){
    try{
    console.log('hi...')
    let res = await reachA
    console.log(res);
    console.log('bye'); 
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Try Again..!")
    }
}
asyncstatus()

// if ela is  not reached it throw error