/**
 * Created by Александр on 18.06.2017.
 */
function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var idTime;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        console.log('Кофе готово!');
    }

    this.run = function() {

        if(this._enabled){
            idTime = setTimeout(onReady, 1000);
        } else{
            throw new Error("Оборудование должно быть включенным");
        }
    };

    this.disable = function () {
        this._enabled = false;
        clearTimeout(idTime);
    }

}

/*var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!*/

// throw new Error("Значение должно быть положительным");

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
var coffeeMachine1 = new CoffeeMachine(100);
coffeeMachine1.enable();
coffeeMachine1.run();