/**
 * Created by Александр on 17.06.2017.
 */
var typer = (function() {

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    return {
        isNumber: function (some){
            if(isNumeric(some)){return true;}
            else {return false;}
        },
        isString: function (some){
            console.log(some);
            if(typeof some === 'string'){return true;}
            else {return false;}
        },
         isArray:function (some) {
             if({}.toString.call(some) ==='[object Array]'){return true;}
             else {return false;}
         },
         isFunction: function (some) {
             if({}.toString.call(some) ==='[object Function]'){return true;}
             else {return false;}
         },
         isDate: function (some) {
             if({}.toString.call(some) ==='[object Date]'){return true;}
             else {return false;}
         },
         isRegExp: function (some) {
            if({}.toString.call(some) ==='[object RegExp]'){return true;}
    else {return false;}
},
         isBoolean: function (some) {
             if({}.toString.call(some) ==='[object Boolean]'){return true;}
             else {return false;}
         },
         isError: function (some) {
            if({}.toString.call(some) ==='[object Error]'){return true;}
    else {return false;}
},
         isNull: function (some) {
             if({}.toString.call(some) ==='[object Null]'){return true;}
             else {return false;}
         },
        isUndefined: function (some) {
            if({}.toString.call(some) ==='[object Undefined]'){return true;}
            else {return false;}
        }
    };
}(null));

console.log(typer.isString('hfydfs'));

console.log(typer.isString('21'));

var da = new Error();

console.log({}.toString.call(12) );