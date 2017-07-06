/**
 * Created by Александр on 05.07.2017.
 */

(function (window) {



    function Plitka() {
        this.goods = [];
    }

    Plitka.prototype.addGoods = function (someGoods) {
        this.goods = this.goods.concat(someGoods);
    };

    Plitka.prototype.renderGoods = function () {
        var length = this.goods.length;

        var fragment = document.createDocumentFragment(),
        tempNode;

        for(var i=0; i<length; i++){

            tempNode = document.createElement('div');
            tempNode.classList.add('goods__item');
            tempNode.innerHTML = this.goods[i];


            fragment.appendChild(tempNode);
            //lineBreak=document.createElement('br');
            //lineBreak.classList.add('lineBreak');
            //fragment.appendChild(lineBreak);

        }
        //console.log(fragment);

        // document.body.appendChild(fragment);
        if(document.getElementsByClassName){
        document.getElementsByClassName('goods')[0].appendChild(fragment);
        } else{
            document.querySelector('.goods').appendChild(fragment);
        }

        //console.log(document.getElementsByClassName('goods')[0]);

    };

    Plitka.prototype.specialRender = function () {

        var allGoods = document.querySelectorAll('.goods ')[0];
        var goodsItem = allGoods.querySelectorAll('.goods__item');
        //console.log(goodsItem);
        //var lineBreak = document.querySelectorAll('.lineBreak');
        var windowSize = document.documentElement.clientWidth;
        //console.log(windowSize);
        for(var i=0; i<goodsItem.length;i++){

            if(windowSize>1024) {
                //если больше 1024
                if (i % 3 === 0) {
                    //lineBreak[i].style.display='none';
                    if(goodsItem[i].style.cssFloat){
                    goodsItem[i].style.cssFloat = 'left';
                    }else {goodsItem[i].style.float = 'left';}
                } else if (i % 3 === 2) {
                    //lineBreak[i].style.display='inline-block';
                    if(goodsItem[i].style.cssFloat){
                    goodsItem[i].style.cssFloat = 'right';
                    } else {goodsItem[i].style.float = 'right';}

                } else {
                    //lineBreak[i].style.display='none';
                    if(goodsItem[i].style.cssFloat){
                    goodsItem[i].style.cssFloat = '';
                    }else {goodsItem[i].style.float = '';}
                }
                goodsItem[i].style.width = '30%';
            } else if(windowSize>=768) {

                //если больше 768 и меньше 1024
                if (i % 2 === 1) {
                    //lineBreak[i].style.display='inline-block';
                    if(goodsItem[i].style.cssFloat){
                    goodsItem[i].style.cssFloat = 'right';
                    }else {goodsItem[i].style.float = 'right';}

                } else {
                    //lineBreak[i].style.display='none';
                    if(goodsItem[i].style.cssFloat){
                    goodsItem[i].style.cssFloat = '';
                    }else {goodsItem[i].style.float = '';}

                }
                goodsItem[i].style.width = '45%';
                // добавить texAlign left для allGoods
            } else {
                //если меньше 768
                //lineBreak[i].style.display='inline-block';
                if(goodsItem[i].style.cssFloat){
                goodsItem[i].style.cssFloat = '';
                }else {goodsItem[i].style.float = '';}
                goodsItem[i].style.width = '100%';
            }



            allGoods.appendChild(goodsItem[i]);
            //allGoods.appendChild(lineBreak[i]);

        }

        //document.body.removeChild(allGoods);
        document.body.appendChild(allGoods);

    };

    Plitka.prototype.changeShowGoods = function () {
        var but = document.querySelector('.showChange');
        var allItem = document.querySelectorAll('.goods__item');
        for(var i=0;i<allItem.length; i++){
            allItem[i].classList.toggle('spisok');
        }
    };

    Plitka.prototype.init = function () {

        var butSh = document.querySelector('.showChange');
        var goodsFromAnywhere = ['Товар_1','Товар_2','Товар_3','Товар_4','Товар_5','Товар_6','Товар_7','Товар_8','Товар_9','Товар_10','Товар_11'];

        if(butSh.addEventListener){
            butSh.addEventListener('click', plitka.changeShowGoods);
        } else {
            butSh.attachEvent('onclick', plitka.changeShowGoods);
        }

        this.addGoods(goodsFromAnywhere);
        this.renderGoods();
    };

    //var plitka = new Plitka();
    //plitka.addGoods(goodsFromAnywhere);



    //window.addEventListener('resize',changeListStyle);

    window.plitka = new Plitka();

})(window);


