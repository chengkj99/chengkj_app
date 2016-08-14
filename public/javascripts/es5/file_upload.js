
import { square, diag } from './lib';
console.log(square(11)); // 121
console.log(diag(4, 3));

// import $ from 'jquery';
// $(function () {
//     console.log('sssss')
// })
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

var project = new Project("Journal");
project.start(); // "Project Journal starting"
console.log(project.start())



// $(function () {
//     console.log('sss')
// })

function test() {
    var [a, b, c] = ['a', 'b', 'c'];
    console.log(a+b+c)
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
test();