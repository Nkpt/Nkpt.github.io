/**
 * Created by Александр on 19.06.2017.
 */
var Ghost = function() {
    // your code goes here
    var arrColor = ['white', 'yellow', 'purple', 'red'];
    this.color = arrColor[Math.floor((Math.random()*4))];
};
var Gost1 = new Ghost();
console.log(Gost1.color);