## 变量

### 1、实现let

> - var声明的变量会挂到window上，而let和const不会
> - var声明的变量存在变量提升，而let和const不会
> - let和const声明形成块作用域，只能在块作用域里访问，不能跨块访问，也不能跨函数访问
> - 同一作用域下let和const不能声明同名变量，而var可以
> - 暂时性死区，let和const声明的变量不能在声明前被使用

- 修改变量名-添加下划线，避免外部访问
- 使用iif包裹，形成函数作用域

```
let a = 1
```
转化为
```
(function(){
    var _a = 1;
})
```

## 2、实现const

> Object.defineProperty(obj, prop, desc)

 |参数  | 说明 |
 ---|--|
 obj|	要在其上定义属性的对象|
prop|	要定义或修改的属性的名称|
descriptor|	将被定义或修改的属性描述符|


属性描述符 | 说明 |
 --|--| --|
value| 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）
get | 一个给属性提供 getter 的方法
set | 一个给属性提供 setter 的方法
writable | 当且仅当该属性的writable为true时，value才能被赋值运算符改变
enumerable | 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举
Configurable| 特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改

```
function _const(key, value){
    const desc = {
        value,
        writable: false
    }
    Object.defineProperty(window, key, desc)
}
```
## api实现

### 1.call

> call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
语法：function.call(thisArg, arg1, arg2, ...)

```
Function.prototype.myCall = function(thisArg, ...args) {
    thisArg.fn = this // this指向调用call的对象,即我们要改变this指向的函数
    return thisArg.fn(...args)     // 执行函数并return其执行结果
}

```
改进
```
Function.prototype.myCall = function(thisArg, ...args) {
    const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
    thisArg = thisArg || window // 若没有传入this, 默认绑定window对象
    thisArg[fn] = this // this指向调用call的对象,即我们要改变this指向的函数
    const result = thisArg[fn](...args)  // 执行当前函数
    delete thisArg[fn] // 删除我们声明的fn属性
    return result  // 返回函数执行结果
}

```
### 2、apply

同上修改入参即格式
Function.prototype.myApply = function(thisArg, args)

### 3、bind
```
Function.prototype.myBind = function(thisArg, ...args) {
    return () => {
        this.apply(thisArg, args)
    }
}
```
改进

- bind()除了this还接收其他参数，bind()返回的函数也接收参数，这两部分的参数都要传给返回的函数
- new会改变this指向：如果bind绑定后的函数被new了，那么this指向会发生改变，指向当前 函数的实例
- 没有保留原函数在原型链上的属性和方法
```
Function.prototype.myBind = function (thisArg, ...args) {
    var self = this
    // new优先级
    var fbound = function () {
        self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
    }
    // 继承原型上的属性和方法
    fbound.prototype = Object.create(self.prototype);

    return fbound;
}

```

### 4、promise
#### （1） 观察者模式：收集依赖 -> 触发通知 -> 取出依赖执行
- Promise的构造方法接收一个executor()，在new Promise()时就立刻执行这个executor回调
- executor()内部的异步任务被放入宏/微任务队列，等待执行
- then()被执行，收集成功/失败回调，放入成功/失败队列
- executor()的异步任务被执行，触发resolve/reject，从成功/失败队列中取出回调依次执行
#### （2） Promise A+规范
- Promise本质是一个状态机，且状态只能为以下三种：Pending（等待态）、Fulfilled（执行态）、Rejected（拒绝态），状态的变更是单向的，只能从Pending -> Fulfilled 或 Pending -> Rejected，状态变更不可逆
- then方法接收两个可选参数，分别对应状态改变时触发的回调。then方法返回一个promise。then 方法可以被同一个 promise 调用多次。

略...

### 5、new
> - 创建一个新对象，并继承其构造函数的prototype，这一步是为了继承构造函数原型上的属性和方法
>  - 执行构造函数，方法内的this被指定为该新实例，这一步是为了执行构造函数内的赋值操作
> - 返回新实例（规范规定，如果构造方法返回了一个对象，那么返回该对象，否则返回第一步创建的新对象）

```
function mynew(foo,...args){
    let obj = Object.create(foo.prototype)
    let result = foo.apply(obj, args)
    return Object.prototype.toString.call(result) == '[object Object]' ? result : obj
}

```


## 三、方法
### 1、防抖
- 短时间内大量触发同一事件，只会执行一次函数
- 设置一个定时器，约定在xx毫秒后再触发事件处理，每次触发事件都会重新设置计时器，直到xx毫秒内无第二次操作
- 防抖常用于搜索框/滚动条的监听事件处理，如果不做防抖，每输入一个字/滚动屏幕，都会触发事件处理，造成性能浪费。
```
function debounce(fun, wait){
    let timeout = null;
    return function() {
        let context = this;
        let args = aguments;
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func = apply(context, args)
        })
    }
}
```
### 2、节流
- 函数节流即每隔一段时间就执行一次
- 设置一个定时器，约定xx毫秒后执行事件，如果时间到了，那么执行函数并重置定时器
- 和防抖的区别在于，防抖每次触发事件都重置定时器，而节流在定时器到时间后再清空定时器

```
function throttle(func, wait){
     let timeout = null;
     return function() {
         let context = this;
         let args = aguments;
         if(!timeout){
            timeout = null;
            func = apply(context, args)
         }
     }
}
```

### 3、继承的实现

#### （1）原型链
直接让子类的原型对象指向父类实例，当子类实例找不到对应的属性和方法时，就会往它的原型对象，也就是父类实例上找，从而实现对父类的属性和方法的继承

```
// 父类
function Parent() {
    this.name = '写代码像蔡徐抻'
}
// 父类的原型方法
Parent.prototype.getName = function() {
    return this.name
}
// 子类
function Child() {}

// 让子类的原型对象指向父类实例, 这样一来在Child实例中找不到的属性和方法就会到原型对象(父类实例)上寻找
Child.prototype = new Parent()
Child.prototype.constructor = Child // 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要

// 然后Child实例就能访问到父类及其原型上的name属性和getName()方法
const child = new Child()
child.name          // '写代码像蔡徐抻'
child.getName()     // '写代码像蔡徐抻'

```
由于所有Child实例原型都指向同一个Parent实例, 因此对某个Child实例的父类引用类型变量修改会影响所有的Child实例
在创建子类实例时无法向父类构造传参, 即没有实现super()的功能
#### (2)构造函数
构造函数继承，即在子类的构造函数中执行父类的构造函数，并为其绑定子类的this，让父类的构造函数把成员属性和方法都挂到子类的this上去，这样既能避免实例之间共享一个原型实例，又能向父类构造方法传参
```
function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    Parent.call(this, 'zhangsan')   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}

```
继承不到父类原型上的属性和方法

#### (3)组合式继承
既然原型链继承和构造函数继承各有互补的优缺点, 那么我们为什么不组合起来使用呢, 所以就有了综合二者的组合式继承
```
function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承
    Parent.call(this, 'zhangsan') 
}
//原型链继承
Child.prototype = new Parent()
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhangsan']
child2.getName()                  // ['zhangsan']

```
每次创建子类实例都执行了两次构造函数(Parent.call()和new Parent())，虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，这并不优雅

#### (4)寄生式组合继承
```
function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承
    Parent.call(this, 'zhangsan') 
}
//原型链继承
Child.prototype = Object.create(Parent.prototype)   //将`指向父类实例`改为`指向父类原型`
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhangsan']
child2.getName()                  // ['zhangsan']

```