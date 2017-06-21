/**
 * Created by Александр on 19.06.2017.
 */
function NamedOne(first, last) {
// -- SHOULD be changed --

    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },
        set: function (str) {
            arr = str.split(' ');
            if(arr.length===2){
                this.firstName = arr[0];
                this.lastName = arr[1];
                return str;
            }
        }
    });

}



var namedOne = new NamedOne("Naomi","Wang");
console.log(namedOne.fullName);
namedOne.firstName = "John";
namedOne.lastName = "Doe";
// ...then...
console.log(namedOne.fullName); // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith";
// ...then...
console.log(namedOne.firstName); // -> "Bill"
console.log(namedOne.lastName);  // -> "Smith"
console.log(namedOne.fullName);