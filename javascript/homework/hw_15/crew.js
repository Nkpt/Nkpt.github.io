/**
 * Created by Александр on 19.06.2017.
 */
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function(){
    return (this.draft - 1.5*this.crew)>20;
};

var titus = new Ship(45,10);

console.log(titus.isWorthIt());