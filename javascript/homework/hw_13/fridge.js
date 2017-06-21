/**
 * Created by Александр on 18.06.2017.
 */
function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    
    this.addFood = function () {

        if(!this._enabled){throw new Error('Холодильник выключен')}
        if((arguments.length+food.length)>=(power/100)){throw new Error('В холодильнике не хватает места')}

        for(var i=0; i<arguments.length; i++){
            food.push(arguments[i]);
        }
    };

    this.getFood = function () {
        return food.slice();
    };

    this.filterFood = function (func) {
        var filtered = [];
        filtered = food.filter(func);
        return filtered;
    };

    this.removeFood = function (item) {
        var indexDel = food.indexOf(item);
        if(indexDel!==-1){
            food.splice(indexDel,1);
        }

    };

    this.disable = function () {
        if(food.length !==0){throw new Error('В холодильнике есть еда');}
        this._enabled = false;
    }


}

/*
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
*/

/*var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2*/


/*var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() );*/

/*
var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен*/

// создать холодильник мощностью 500 (не более 5 еды)
/*var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды*/
