/*
 * @Author       : your name
 * @Date         : 2020-07-27 16:56:54
 * @LastEditTime : 2020-07-27 18:25:04
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\lib\str.js
 */ 
// 转化为url
export function stringifyUrl(search = {}) {
    console.log(Object.entries(search))
    return Object.entries(search).reduce(
      (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
      Object.keys(search).length ? "?" : ""
    ).replace(/&$/, "");
}
// url转化为字符串
export function parseUrlSearch(search) {
    console.log(search.replace(/(^\?)|(&$)/g, ""))
    console.log(search.replace(/(^\?)|(&$)/g, "").split("&"))
    return search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
      const [key, val] = v.split("=");
      t[key] = decodeURIComponent(val);
      return t;
    }, {});
}
 