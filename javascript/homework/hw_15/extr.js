/**
 * Created by Александр on 20.06.2017.
 */
Object.prototype.hash = function(string) {
    //return eval('this'+'.'+string);
    var arrKey = string.split('.');
    var path = this;
    for(var i =0; i<arrKey.length; i++){

        if(arrKey[i] in path){
            path = path[arrKey[i]];
        } else {return undefined;}

    }
    //console.log('genm' + path);
    return path;

};

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log('name' in obj.person);
console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined