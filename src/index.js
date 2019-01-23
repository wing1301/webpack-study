import $ from 'jquery'

import './css/index.css'
import './css/index.scss'
import './css/index.less'

import 'bootstrap/dist/css/bootstrap.css'

$(function (){
    $('li:odd').css('backgroundColor', '#ff0000')
    $('li:even').css('backgroundColor', 'yellow')
})

class Person {
    constructor (name, sex){
        this.name = name;
        this.sex = sex;
    }
    static info = {name: 'tom', age: 18 }
}

const person = new Person('jack','male')

document.write(Person.info.name);
document.write(person.name);