/**
 * Created by Александр on 19.06.2017.
 */
//При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
//В чём дело? Как поправить?

function Hamster() {
    this.food = [];
}

//Hamster.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log( speedy.food.length ); // 2
console.log( lazy.food.length ); // 2 (!??)