/*
 * @Author       : your name
 * @Date         : 2020-07-31 09:55:34
 * @LastEditTime : 2020-08-03 11:21:03
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\lib\promis.js
 */ 
export function promis(fn){
    const that = this;
    that.status = 'panding';
    that.value = '';
    that.succcallbacks = [];
    that.failcallbacks = [];       
        
    this.then =  function(fulfilled, rejected){
        succcallbacks.push(fulfilled)
        failcallbacks.psuh(rejected)
    }

    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'fulfilled'
            setTimeout(()=>{
                succcallbacks.forEach((callback)=> {
                    callback(value)
                })
            }, 0)
        }
    }

    function reject(value) {
        if (that.status === 'pending') {
            that.status = 'rejected'
            setTimeout(()=>{
                failcallbacks.forEach((callback)={
                    callback(value)
                })
            }, 0)
        }
    }

    fn(resolve, reject)
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
        promises.forEach(function(item){
            promises[i].then(resolver,rejecter)
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

function clone(obj){
    let target = {};
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            target[key] = obj[key]
        }
    }
    return target
}

function deepclone(obj){
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