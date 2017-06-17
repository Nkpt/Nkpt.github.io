/**
 * Created by Александр on 14.06.2017.
 */
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        console.log( this.step );
    }
};

/*ladder.up().up().up().up().up().up().down().down().down().down().down().down().down().down().down().down();
ladder.up();
ladder.down();
ladder.showStep(); // 1*/
ladder.up().up().down().up().down().showStep(); // 1