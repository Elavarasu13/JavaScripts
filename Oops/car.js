//modules

class car {
    drive()
    {
        console.log('driving');
    }
}

function fillGas()
{
    console.log("Filling Gas")
}
function repair()
{
    console.log('repairing')
}

export default car
export {fillGas , repair}