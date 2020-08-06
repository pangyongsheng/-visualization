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