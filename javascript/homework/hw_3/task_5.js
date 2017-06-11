/**
 * Created by Александр on 11.06.2017.
 */
var lineOfBoard;
var numberOfColumns=8;
var numberOfRows=8;

for(var i=0; i<numberOfRows; i++){
    lineOfBoard='';
    for(var j=0; j<numberOfColumns; j++){
        (i+j)%2?lineOfBoard+='_':lineOfBoard+='#';
    }
    console.log(lineOfBoard);
}