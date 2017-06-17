/**
 * Created by Александр on 16.06.2017.
 */
function pattern(n){
    var output='';
for (var j=0; j<n; j++) {
    for (var i = 0; i < 2 * n; i++) {
        if (i < n - 1-j) {
            output += ' ';
        } else if (i===2*n-1){
            if(j!=n-1){output +='\n';}
        } else if(i<2*n-1-j) {
            output += ((i - n + 2+j) % 10);
        } else {
            output += ' ';
        }
    }
 }

    // Happy Coding ^_^
    return output;
}

console.log(pattern(15));