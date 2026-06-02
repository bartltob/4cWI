interface HeatingStrategy{
    regTemperature(currentTemperature:number):void
}

class Eco implements HeatingStrategy{
    regTemperature(currentTemperature: number) {
        console.log("Eco Mode "+currentTemperature);
    }
}

class Comf implements HeatingStrategy{
    regTemperature(currentTemperature: number) {
        console.log("Comf Mode "+currentTemperature);
    }
}

class SmartHomeController{
    private currentStrategy:HeatingStrategy;
    constructor(currentStrategy:HeatingStrategy){
        this.currentStrategy=currentStrategy;
    }
    setHeatingStrategy(newStrategy:HeatingStrategy){
        this.currentStrategy=newStrategy;
    }
    startHeatingStrategy(currentTemperature:number):void{
        this.currentStrategy.regTemperature(currentTemperature);
    }
}

const eco: Eco = new Eco();
const comf:Comf = new Comf();
const SMC:SmartHomeController = new SmartHomeController(eco);
SMC.startHeatingStrategy(18);
SMC.setHeatingStrategy(comf);
SMC.startHeatingStrategy(40);

