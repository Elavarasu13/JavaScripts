
import C , {fillGas as fill, fillGas, repair} from './car.js'
let car1 = new C()
//get && set
class Temparature
{
    constructor(temp)
    {
        //private 
        this._temp = temp
    }
    get temp()
    {
        return  `${this._temp}deg celcius` 
    }
    set temp(temp)
    {
        if(temp > 100){
            temp = 100
            this._temp = temp
        }
    }

}
let temp1 =  new Temparature(25)
temp1.temp = 150;
console.log(temp1.temp)

car1.drive()
fillGas()
repair()
