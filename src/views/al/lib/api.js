/*
 * @Author       : your name
 * @Date         : 2020-07-31 09:55:34
 * @LastEditTime : 2020-09-11 18:29:02
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\lib\promis.js
 */ 
export function promis(fn){
    const that = this;
    that.status = 'panding';
    that.value = '';
    this.reason = '';
    that.succcallbacks = [];
    that.failcallbacks = [];       
        
    this.then =  function(fulfilled, rejected){
        if (this.status === 'RESOLVED') {
            resolve(this.value);
        }
        if (this.status === 'REJECTED') {
            reject(this.reason);
        }
        if (this.status === 'PENDDING') {
            that.succcallbacks.push(fulfilled)
            that.failcallbacks.psuh(rejected)
        }
        
    }

    function resolve(value) {
        this.value = value
        if (that.status === 'pending') {
            that.status = 'fulfilled'
            setTimeout(()=>{
                that.succcallbacks.forEach((callback)=> {
                    callback(this.value)
                })
            }, 0)
        }
    }

    function reject(reason) {
        this.value = reason
        if (that.status === 'pending') {
            that.status = 'rejected'
            setTimeout(()=>{
                that.failcallbacks.forEach((callback)=>{
                    callback(this.value)
                })
            }, 0)
        }
    }
    
    try{
        fn(resolve, reject)
    }catch(e){
        reject(e)
    }
    
}

promis.all = function(promises) {
    let results = [];
    return new Promise(function(resolve,reject){
        promises.forEach(function(item){
            item.then(function(res){
                results.push(res);
            }).catch(()=>{
                reject()
            })
        })
        resolve(results)
    })
}

promis.race = function(promises){
    if(!Array.isArray(promises)){
        throw new TypeError('You must pass array')
    }
    return new Promise(function(resolve,reject){
        promises.forEach(function(item,i){
            promises[i].then(resolve,reject)
        })
    })
}

const Fn = {};

Fn.prototype.mybind = function (context) {
    return () => {
        return context.call(context)
    }
}

Fn.prototype.mycall = function (context) {
    context.fn = this;
    context.fn();
    delete context.fn
}

function _new(fn, arg) {
    let obj = {};
    
    obj.__proto__ = fn.prototype;

    fn.apply(obj, arg);

    return obj;

}
// 浅拷贝
function clone(obj){
    let target = {};
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            target[key] = obj[key]
        }
    }
    return target
}
const shallClone = (target) => {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {};
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) { // 遍历对象自身可枚举属性（不考虑继承属性和原型对象）
                cloneTarget[prop] = target[prop];
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}
// 深拷贝
function deepclone(obj){
    if (obj === null) return null
    if (typeof obj !== 'object') return obj;
    let target = {};
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
           if(typeof obj[key] == Object){
                deepclone(obj)
           }else{
                target[key] = obj[key]
           }
        }
    }
    return target
}


  