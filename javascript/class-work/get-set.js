/**
 * Created by Александр on 18.06.2017.
 */
function User() {
    var firstName='';
    var surname='';

    this.setFirstName = function (str) {
        firstName = str;
    };

    this.setSurname = function (str) {
        surname = str;
    }

    this.getFullName = function () {
        return firstName+ ' ' + surname;
    }

}

var user = new User();
user.setFirstName('Василий');
user.setSurname('Петров');

console.log(user.getFullName());