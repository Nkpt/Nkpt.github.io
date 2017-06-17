/**
 * Created by Александр on 13.06.2017.
 */
function createSecretHolder(secret) {

    var obj = {};

    var hide = secret;

    function setSecret(sec){
        hide = sec;
    }

    function getSecret(){
        return hide;
    }

    obj.getSecret=getSecret;
    obj.setSecret=setSecret;

    return obj;
}


var obj1 = createSecretHolder(5);
console.log(obj1.getSecret());
obj1.setSecret(2);
console.log(obj1.getSecret());
/*
obj.getSecret() ;//returns 5
obj.setSecret(2);
obj.getSecret() ;//returns 2*/
