/**
 * Created by Александр on 19.06.2017.
 */
Array.prototype.reverse1 = function() {
    // ...
    var arrLength = this.length;
    for(var i = arrLength-1; i>=0; i--){
        this.push(this[i]);
    }
    this.splice(0,arrLength);
    return this;

};

console.log([3,2,1].reverse1());
