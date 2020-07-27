/*
 * @Author       : your name
 * @Date         : 2020-07-27 10:36:35
 * @LastEditTime : 2020-07-27 16:15:50
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\lib\arr.js
 */

import { sum } from "d3"

//  交集
export function intersection(arr1, arr2) {
	return arr1.filter((val) => arr2.indexOf(val) > -1)
}
export function intersection2(arr1, arr2) {
	return arr1.filter((val) => arr2.includes(val))
}
// 对象数组交集
export function intersection3(arr1, arr2) {
	return arr1.filter(function (v) {
		return arr2.some(n => JSON.stringify(n) === JSON.stringify(v))
	})
}
// 并集
export function union(arr1, arr2) {
	return arr1.concat(arr2.filter(v => !arr1.includes(v)))
}
// 差集
export function diff(arr1, arr2) {
	return arr1.filter(v => !arr2.includes(v))
}
// 补集
export function difference(arr1, arr2) {
	return diff(arr1, arr2).concat(diff(arr2, arr1))
}
// 去重
export function unique(arr) {
	let rs = [];
	for (let i = 0; i < arr.length; i++) {
		if (rs.indexOf(arr[i]) === -1) {
			rs.push(arr[i])
		}
	}
	return rs
}
export function unique2(arr) {
	return Array.from(new Set(arr))
}
export function unique3(arr) {
	return arr.filter((element, index, self) => self.indexOf(element) === index)
}
// 求和
export function sum(arr) {
	return arr.reduce((prev, cur)=> {
		return prev + cur
	}, 0)
}