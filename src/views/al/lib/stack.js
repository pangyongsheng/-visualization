/*
 * @Author       : your name
 * @Date         : 2020-07-24 11:40:57
 * @LastEditTime : 2020-07-24 16:06:31
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\lib\queue.js
 */ 
class Stack{

    constructor(){
        this.items = [];
    }

    push (element) {
        this.items.push(element);
    }

    pop () {
        return this.items.pop();
    }

    peek () {
        return this.items[this.items.length-1];
    }

    isEmpty () {
        return this.items.length == 0;
    }

    size () {
        return this.items.length;
    }

    clear () {
        this.items = [];
    }

    print () {
        console.log(items.toString());
    }

    toString () {
        return items.toString();
    }
}

export default Stack