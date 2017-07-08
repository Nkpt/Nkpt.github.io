/**
 * Created by Александр on 07.07.2017.
 */

(function (window) {

    function SetPlusIcon() {}

    SetPlusIcon.prototype.init = function () {

        this.hideAll();
        this.showMain();
        this.addPlusIcon();

        document.body.addEventListener('click', this.aClick.bind(this));
    };

    SetPlusIcon.prototype.toggleHide = function (elem) {
        elem.classList.toggle('hide');
        if (elem.parentNode.tagName === 'LI') {
            elem.parentNode.style.listStyleType = 'none';
            elem.parentNode.classList.toggle('plus');
            //elem.parentNode.classList.toggle('minus');
        }

    };

    SetPlusIcon.prototype.hideAll = function () {
        var allList = document.querySelectorAll('ul,ol');
        for (var i = 0; i < allList.length; i++) {
            this.toggleHide(allList[i]);
        }
    };

    SetPlusIcon.prototype.showMain = function () {
        var mainLists = document.querySelectorAll('body>ul,body>ol');
        for (var i = 0; i < mainLists.length; i++) {
            this.toggleHide(mainLists[i]);
        }
    };

    SetPlusIcon.prototype.addPlusIcon = function () {
        var liList = document.querySelectorAll('li');

        for (var i = 0; i < liList.length; i++) {
            if (liList[i].querySelectorAll('ul,ol').length) {
                liList[i].classList.add('plus');
            }
        }
    };

    SetPlusIcon.prototype.aClick = function (e) {
        var target = e.target;
        if (target.tagName === 'A') {
            if (target.parentNode.querySelectorAll('ul,ol').length) {
                e.preventDefault();
                this.toggleHide(target.parentNode.querySelector('ul,ol'));
                target.parentNode.classList.toggle('minus');
            }
        }
    };


    window.setPlusIcon = new SetPlusIcon();


    })(window);

