/**
 * Created by Александр on 07.07.2017.
 */
(
    function (window) {

        function UndoForm() {
            this.objUndo = {};
            this.changes = [];
        }

        UndoForm.prototype.writeChange = function(e) {
            var elem = e.target;
            //console.dir(changes);
            this.changes.push(elem.name);

            function pushSelectedOPt(options) {
                var selectedOptions = [];
                for(var i=0; i<options.length;i++){
                    if(options[i].selected){
                        selectedOptions.push(options[i].value);
                    }
                }
                return selectedOptions;
            }

            if(elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA'){

                //console.log(elem.value);

                if(elem.type === 'checkbox'){
                    if (elem.name in this.objUndo) {
                        this.objUndo[elem.name].push(elem.checked);
                    } else {
                        this.objUndo[elem.name] = [elem.checked];
                    }
                } else if(elem.type === 'radio'){
                    if (elem.name in this.objUndo) {
                        this.objUndo[elem.name].push(elem.value);
                    } else {
                        this.objUndo[elem.name] = [elem.value];
                    }
                } else {
                    if (elem.name in this.objUndo) {
                        this.objUndo[elem.name].push(elem.value);
                    } else {
                        this.objUndo[elem.name] = [elem.value];
                    }
                }


            } else if (elem.tagName === 'SELECT'){
                if (elem.name in this.objUndo) {
                    this.objUndo[elem.name].push(pushSelectedOPt(elem.options));
                } else {
                    this.objUndo[elem.name] = [pushSelectedOPt(elem.options)];
                }
            }


        };

        UndoForm.prototype.undoChange = function() {
            if(this.changes.length!==0){
                var myChange = this.changes.pop();
                var ourTarget = document.querySelector('[name = '+myChange+']');

                this.objUndo[myChange].pop();

                if(ourTarget.tagName === 'INPUT'|| ourTarget.tagName === 'TEXTAREA'){

                    if(ourTarget.type === 'checkbox'){
                        if(this.objUndo[myChange].length!==0){
                            ourTarget.checked = this.objUndo[myChange][this.objUndo[myChange].length-1];
                        } else {
                            ourTarget.checked = (typeof ourTarget.getAttribute('checked') === 'string');
                        }
                    } else if(ourTarget.type === 'radio'){
                        if(this.objUndo[myChange].length!==0){

                            var prevCheck = document.querySelector('[name=' + myChange + '][value='+ this.objUndo[myChange][this.objUndo[myChange].length-1] +']');
                            prevCheck.checked = true;

                            //ourTarget.checked = objUndo[myChange][objUndo[myChange].length-1];
                        } else {
                            //ourTarget.checked = (typeof ourTarget.getAttribute('checked') === 'string');
                            var defaultRad = document.querySelector('[name=' + myChange + '][checked]');
                            if(defaultRad){
                                defaultRad.checked = true;
                            } else {
                                ourTarget.checked = false;
                            }
                            //console.log(document.querySelector('[name=' + myChange + '][checked]'));
                        }
                    } else {

                        if(this.objUndo[myChange].length!==0){
                            ourTarget.value = this.objUndo[myChange][this.objUndo[myChange].length-1];
                        } else {
                            ourTarget.value = ourTarget.getAttribute('value');
                        }
                    }
                } else if(ourTarget.tagName === 'SELECT'){
                    if(this.objUndo[myChange].length!==0){
                        var arrOfSelected = this.objUndo[myChange][this.objUndo[myChange].length-1];
                        for(var j =0; j<ourTarget.options.length; j++){
                            ourTarget.options[j].selected = (arrOfSelected.indexOf(ourTarget.options[j].value)!==-1);
                        }
                    } else {
                        var opti = ourTarget.options;
                        for(var i=0; i<opti.length; i++){
                            opti[i].selected =(typeof opti[i].getAttribute('selected') === 'string');
                        }
                    }
                }


            } else {
                alert('Все! Больше некуда возращаться((');
            }
        };

        UndoForm.prototype.init = function () {
            var myForm = document.querySelector('form');
            var but = document.querySelector('button');
            // this.objUndo = {};
            // this.changes = [];


            myForm.addEventListener('change', this.writeChange.bind(this));
            but.addEventListener('click', this.undoChange.bind(this));
        };

        window.undoThisForm = new UndoForm();

    }

)(window);