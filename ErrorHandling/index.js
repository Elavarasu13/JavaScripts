try{
    num  =  prompt("Enter a   number")
    if(num==='')
        throw 'cannot be empty'
    if(isNaN(num))
        throw "Enter a valid number"
    console.log(num**2)
}
catch(error){
    console.log(error)
}
finally
{
    console.log("try again")
}