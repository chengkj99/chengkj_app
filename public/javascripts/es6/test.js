/**
 * Created by MaxCheng on 2016/8/15.
 */
require('../../stylesheets/test.css');

var array = [1, 2, 3];
array.forEach(v => console.log(v));
class Project {
    constructor(name) {
        this.name = name;
    }

    start() {
        return "Project " + this.name + " starting";
    }
}

function test() {
    var [a, b, c] = ['a', 'b', 'c'];
    console.log(a+b+c)
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
test();
var project = new Project("Journal");
project.start(); // "Project Journal starting"
console.log(project.start())