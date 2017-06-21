/**
 * Created by Александр on 19.06.2017.
 */
//переписать CoffeeMachine в виде класса с использованием прототипа.

function CoffeeMachine(power) {
    this._waterAmount = 0;
    this._power = power;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function () {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        console.log( 'Кофе готов!' );
    }, this.getTimeToBoil());
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();



