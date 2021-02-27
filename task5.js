/*
Переписать консольное приложение из предыдущего юнита на классы.
*/

class Appliance {
    constructor(name, is_on) {
        this.type = "electrical device";
        this.name = name;
        this.is_on = is_on;
    }

    get_stock_power_consumption() {
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
}
class Kettle extends Appliance {
    constructor(name, is_on, volume) {
        super(name,is_on);
        this.volume = volume;
    }
    get_power_consumption() {
        if (this.is_on) {
            let a = 50; // stock power
            console.log(`Kettle power if ${a*this.volume*0.1} watts`)
        } else {
            console.log("Your kettle is disabled. Turn on the power ")
        }
    }
}
class Lamp extends Appliance {
    constructor(name, is_on, glow) {
        super(name, is_on);
        this.glow = glow;
    }
    get_power_consumption() {
        if (this.is_on) {
            let a = 75; // stock power
            console.log(`Lamp power if ${a*this.glow*0.2} watts`)
        } else {
            console.log("Your lamp is disabled. Turn on the power ")
        }
    }
}

class Laptop extends Appliance {
    constructor(name, is_on, lp_type) {
        super(name, is_on);
        this.lp_type = lp_type;
    }
    get_power_consumption() {
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
}
const a = new Kettle("kettle", true, 100);
const b = new Lamp("lamp", false, 150)
const c = new Laptop("laptop", false, "gaming") // or office
console.log(c)
c.get_power_consumption()
// a.get_power_consumption()