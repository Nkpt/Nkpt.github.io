/**
 * Created by Александр on 16.06.2017.
 */
var Calculator = {
    average: function() {
        // Your code here...
        var sum = [].reduce.call(arguments, function(arSum, currentItem){
            return arSum+=currentItem;
        });
        return sum/arguments.length;
    }
};

console.log(Calculator.average(3,4,5));