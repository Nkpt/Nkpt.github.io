$(function() {
    var ToDo = function() {

        this.model = [
            { text: 'Купить молоко' },
            { text: 'Одеть трусы' },
            { text: 'Сходить на работу' }
        ];

        this.inputField = $('.task-form__text');
        this.form = $('.task-form');
        this.todoList = $('.table__body');

        this.init();
    };

    // Получить размер нашей модели - колличество элементов на текущий момент
    ToDo.prototype.getLength = function() {
        return this.model.length;
    };

    // Сгененрировать html для новой строки с элементом
    ToDo.prototype.getItemHtml = function (position, item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" data-index=":index" class="btn btn-info up">&#8593;</button></td><td><button type="button" data-index=":index" class="btn btn-info down">&#8595;</button></td><td><button type="button" data-index=":index" class="btn btn-danger">☓</button></td></tr>';

        return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position - 1);
    };

    // Добавить новый элемент в список
    ToDo.prototype.addItem = function (todoText) {
        var newTodo = { text: todoText };
        this.model.push(newTodo);

        this.appendRenderItem(this.getLength(), newTodo);
    };

    // Добавить в DOM новый элемент в низ списка
    ToDo.prototype.appendRenderItem = function (index, item) {
        this.todoList.append(this.getItemHtml(index, item.text));
    };

    // Отрендерить весь список полностью
    ToDo.prototype.renderList = function () {
        var list = '',
            __self = this;

        $.each(this.model, function(index, item) {
            list += __self.getItemHtml(index + 1, item.text);
        });

        this.todoList.html(list);
    };

    // на Сабмит формы
    ToDo.prototype.onFormSubmit = function (e) {
        e.preventDefault();

        this.addItem(this.inputField.val());

        this.form.trigger('reset');
        this.disButton();
    };

    // Удаление элемента
    ToDo.prototype.removeItem = function (index) {
        this.model.splice(index, 1);

        this.toLocalStor();
        this.renderList();
    };

    ToDo.prototype.downTask = function (index) {
        if(index<this.getLength()-1){
        var tmpArr = this.model.splice(index,1);

        this.model.splice(index+1,0, tmpArr[0]);

        this.toLocalStor();
        this.renderList();

        }
    };

    ToDo.prototype.upTask = function (index) {

        if(index>0){

        var tmpArr = this.model.splice(index,1);

        this.model.splice(index-1,0, tmpArr[0]);

            this.toLocalStor();
            this.renderList();
        }
    };

    // дизэйблим кнопку
    ToDo.prototype.disButton = function () {
        if(this.inputField.val()===''){
            $('.btn-primary').prop('disabled', true);
        } else {
            $('.btn-primary').prop('disabled', false);
        }

    };

    //записываем в локал сторэдж
    ToDo.prototype.toLocalStor = function () {
        var serialModel = JSON.stringify(this.model); //сериализуем его

        localStorage.setItem("ToDo", serialModel); //запишем его в хранилище
    };

    //достаем из локал сторэдж
    ToDo.prototype.fromLocalStor = function () {
        this.model = JSON.parse(localStorage.getItem("ToDo"));
    };



    // Инициализация
    ToDo.prototype.init = function () {
        var __self = this;

        //вставка если есть модель в локал стор берем от туда
        if(localStorage.getItem('ToDo')){
            this.fromLocalStor();
        }

        this.renderList();

        this.todoList.on('click','.btn-danger', function (e) {
            var index = $(e.target).data('index');

            __self.removeItem(index);
        });

        this.todoList.on('click','.btn-info.down', function (e) {
            var index = $(e.target).data('index');

            __self.downTask(index);
        });

        this.todoList.on('click','.btn-info.up', function (e) {
            var index = $(e.target).data('index');

            __self.upTask(index);
        });

        this.form.submit(function (e) {
            __self.onFormSubmit(e);
        });

        //при пустом инпуте неактивна кнопка отправки
        //this.inputField.addEventListener('input', function (e) {__self.disButton;});
        this.inputField.on('input blur focus', function () {
            __self.disButton();
        });

        this.disButton();


    };

    window.todo = new ToDo();
});



// //создадим объект
// var obj = {
//     item1: 1,
//     item2: [123, "two", 3.0],
//     item3:"hello"
// };
//
// var serialObj = JSON.stringify(obj); //сериализуем его
//
// localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"
//
// var returnObj = JSON.parse(localStorage.getItem("myKey")) //спарсим его обратно объект