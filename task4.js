/*
    Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function Appliance(name, is_on) {
    this.type = "electrical device";
    this.name = name;
    this.is_on = is_on;

}
Appliance.prototype.get_stock_power_consumption = function() {
    if (this.is_on) {
        switch(this.name) {
            case "kettle": {
                console.log("50 watts");
                break
            }
            case "lamp": {
                console.log("75 watts");
                break
            }
            case "laptop": {
                console.log("150 watts");
                break
            }
            default: {
                console.log("Unknown device");
            }
        }
    } else {
        console.log("Your device is disabled. Turn on the power ")
    }
}


function Kettle(name, is_on, volume) {
    this.name = name;
    this.is_on = is_on;
    this.volume = volume;
}

Kettle.prototype = new Appliance();
Kettle.prototype.get_power_consumption = function() {
    if (this.is_on) {
        let a = 50; // stock power
        console.log(`Kettle power if ${a*this.volume*0.1} watts`)
    } else {
        console.log("Your kettle is disabled. Turn on the power ")
    }
}


function Lamp(name, is_on, glow) {
    this.name = name;
    this.is_on = is_on;
    this.glow = glow;
}
Lamp.prototype = new Appliance();
Lamp.prototype.get_power_consumption = function() {
    if (this.is_on) {
        let a = 75; // stock power
        console.log(`Lamp power if ${a*this.glow*0.2} watts`)
    } else {
        console.log("Your lamp is disabled. Turn on the power ")
    }
}


function Laptop(name, is_on, lp_type) {
    this.name = name;
    this.is_on = is_on;
    this.lp_type = lp_type;
}
Laptop.prototype = new Appliance();
Laptop.prototype.get_power_consumption = function() {
    if (this.is_on) {
        let a = 150; // stock power
        if (this.lp_type == "gaming") {
            console.log(`Laptop power if ${a*300*0.2} watts`)
        } else if (this.lp_type == "office") {
            console.log(`Laptop power if ${a*200*0.2} watts`)
        } else {
            console.log("Please, enter valid arguments")
        }
    } else {
        console.log("Your laptop is disabled. Turn on the power ")
    }
}

const a = new Appliance("laptop", false);
const b = new Kettle("kettle", true, 200);
const c = new Lamp("lamp", true, 150);
const d = new Laptop("laptop", true, "office");

// d.get_power_consumption()
// console.log(b)
// a.get_stock_power_consumption()
// b.get_power_consumption()
// c.get_power_consumption()

// console.log(a,b,c,d)

