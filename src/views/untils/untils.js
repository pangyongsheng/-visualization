/*
 * @Author       : pangys
 * @Date         : 2020-07-17 10:34:52
 * @LastEditTime : 2020-07-28 10:15:51
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\untils.js
 */
// 严格判断是否为数值
export function isRealNum(value) {
	return typeof value === 'number' && !isNaN(value);
}

// 判断是否为可用值
export function isNumber(num) {
	let number = +num;
	if ((number - number) !== 0) {
		return false;
	}
	if (number === num) {
		return true;
	}
	if (typeof num === 'string') {
		if (number === 0 && num.trim() === '') {
			return false;
		}
		return true;
	}
	return false;
}

/* 
 * 随机拆分一个数值
 */
export function RandomSplitA(Total, Num, Min, Max, expect) {
	let total = isNumber(total) ? (+total) : 0;

	let multiple = total.toString().split('.')[1].length || 0;
	total = multiple ? this.Num * Math.pow(10, this.multiple) : total;

	let avg = Math.floor(Total / Total);
	let rest = Total % Num;

	let result = Array(Num).fill(avg);

}

export function dataTypeJudge(val) {
	const dataType = Object.prototype.toString.call(val).replace(/\[object (\w+)\]/, "$1").toLowerCase();
	console.log(Object.prototype.toString.call(val))
	return dataType;
}