/**
 * Created by Александр on 08.07.2017.
 */

(function (window) {

    var but = document.getElementsByName('send')[0];
    var myForm = document.getElementsByName('myForm')[0];

    function createSignal() {
        var reqElem = document.querySelectorAll('input[required][type="text"],input[required][type="tel"],input[required][type="email"]');
        var signal = document.createElement('div');
        signal.style.display = 'none';
        for (var i=0; i<reqElem.length;i++){
            reqElem[i].parentNode.insertBefore(signal.cloneNode(true),reqElem[i].nextSibling);
            //Добавим звездочки у обязательных
            reqElem[i].parentNode.insertBefore(document.createTextNode('*'),reqElem[i]);
        }
    }

    function redColorSignal(node) {
        node.nextSibling.style.display = 'inline-block';
        node.nextSibling.style.width = '15px';
        node.nextSibling.style.height = '15px';
        node.nextSibling.style.borderRadius = '100%';
        node.nextSibling.style.backgroundColor = 'red';
        node.nextSibling.style.verticalAlign = 'middle';
    }

    function greenColorSignal(node) {
        node.nextSibling.style.display = 'inline-block';
        node.nextSibling.style.width = '15px';
        node.nextSibling.style.height = '15px';
        node.nextSibling.style.borderRadius = '100%';
        node.nextSibling.style.backgroundColor = 'green';
        node.nextSibling.style.verticalAlign = 'middle';
    }

    function validData(e) {

        var allText = document.querySelectorAll('input[type="text"][required]');
        var notValid = false;

        for(var i=0; i< allText.length; i++){
            if(allText[i].value === ''){
                redColorSignal(allText[i]);
                notValid = true;

            }
        }

        var allTel = document.querySelectorAll('input[type="tel"][required]');
        var regTel = /\D/;

        for(var j=0; j< allTel.length; j++){

            if(regTel.test(allTel[j].value) || allTel[j].value===''){
                redColorSignal(allTel[j]);
                notValid = true;
            }

        }
        var allEmail = document.querySelectorAll('input[type="email"][required]');
        var emailReg = /[0-9a-z]+@[0-9a-z]+\.[a-z]/i;
        for(var k=0; k< allEmail.length; k++){
            console.log(emailReg.test(allEmail[k].value));

            if(!emailReg.test(allEmail[k].value)){
                redColorSignal(allEmail[k]);
                notValid = true;
            }
        }

        if(notValid){
            e.preventDefault();
            alert('Проверьте правильность заполнения обязательных полей!');
        }


    }

    function validChange(e) {

        var target = e.target;
        console.dir(target);
        if(target.tagName === 'INPUT' && target.required){
            if(target.type === 'text'){
                if(target.value === ''){
                    redColorSignal(target);
                }else {
                    greenColorSignal(target);
                }
            } else if(target.type === 'tel'){
                var regTel = /\D/;
                if(regTel.test(target.value) || target.value===''){
                    redColorSignal(target);
                }else {
                    greenColorSignal(target);
                }

            } else if (target.type === 'email'){
                var emailReg = /[0-9a-z]+@[0-9a-z]+\.[a-z]/i;
                if(!emailReg.test(target.value)){
                    redColorSignal(target);
                }else {
                    greenColorSignal(target);
                }
            }
        }
    }


    createSignal();
    but.addEventListener('click', validData);
    myForm.addEventListener('change', validChange);

})(window);
