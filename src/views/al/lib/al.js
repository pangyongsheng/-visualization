/*
 * @Author       : your name
 * @Date         : 2020-07-28 18:02:05
 * @LastEditTime : 2020-07-29 18:06:46
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\lib\al.js
 */ 
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
const twoSum = function(nums, target) {
    let a, b;
    for(let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i];
        let arr = nums.slice(i+1);
        let ind = arr.indexOf(tmp);
        if(ind > -1){
            a = i;
            b = i + 1 + ind;
            break;
        }
    }
    return [a, b];
};
// 请你找出其中不含有重复字符的 最长子串 的长度。
const lengthOfLongestSubstring = function(s) {
    let max = 0, temp =[];
    for(let i = 0; i<s.length; i++){
        let str = s.charAt(i);
        let ind = temp.indexOf(str);
        if(ind !== -1){
            temp.splice(0,ind+1)
        }
        temp.push(s.charAt(i))
        max = Math.max(max, temp.length)
    }
    return max;
};
// 求数组中位数
const findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort()
    arr.sort((a,b) => a - b);
    let center = arr.length/2;
    if(arr.length%2 == 0){
        return (arr[center]+arr[center-1])/2
    }else{
        return arr[Math.round(center-1)]
    }
};
// 获取最长回文
const longestPalindrome = function(str) {
    // 判断是否为回文
       const isHuwen = (s) => {
         for(let i =0; i<s.length; i++){
           console.log(s.charAt(i), s.charAt(s.length-1-i))
           if(s.charAt(i) === s.charAt(s.length-1-i)){
             if(i == s.length-1){
               return true;
             }
           }else{
             return false;
           }
         }
       }
       let hw = '';
       for(let j=0; j<str.length; j++){
         let temp=str.charAt(j);
         for(let k=0; k < str.length-j; k++){
           if(k>0){
             temp = temp + str.charAt(j+k)
           }
           console.log(temp)
           console.log(isHuwen(temp))
           if(isHuwen(temp) && temp.length > hw.length){
             hw = temp;
           }
         }
       }
       return hw;
 };

// 贪心
// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。
const canJump = function(nums) {
    let k = 0;
    for(let i=0; i < nums.length; i++){
        if(i > k) return false;
        k = Math.max(k, nums[i] + i)
    }
    return true
}

// 二分
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字

const missNumber = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        if( middle == nums[middle]){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    return left;
}
