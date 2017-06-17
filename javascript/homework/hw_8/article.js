/**
 * Created by Александр on 14.06.2017.
 */

function Article() {

    this.created = new Date();

    Article.count++;

    // Article.LastDoc = new Date();

    Article.LastDoc = this.created;

    Article.showStats = function () {
        console.log('Всего: ', Article.count,' последняя: ', Article.LastDoc);
    }

}
Article.count=0;


var art = new Article();
var art1 = new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

var art2 = new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)

console.log(+art.created);

console.log(art.created);
console.log(art1.created);
console.log(art2.created);
