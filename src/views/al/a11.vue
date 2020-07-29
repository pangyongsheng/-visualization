<!--
 * @Author       : your name
 * @Date         : 2020-07-27 18:31:39
 * @LastEditTime : 2020-07-29 18:07:24
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\a11.vue
--> 
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="tourl">判断类型</el-button>
      </el-col>
      <el-col :span="6">{{cons1}}</el-col>
    </el-row>
  </div>
</template>

<script>
import { dataTypeJudge } from "../untils/untils";
export default {
  name: "",
  props: [""],
  data() {
    return {
      input1: 11,
      cons1: "",
      input2: "123",
      cons2: "",
    };
  },
  created() {
    console.log(this.ff([0,1,2,3,4,5,6,7,9]));
  },
  methods: {
    ff(nums) {
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
    },
    tourl() {
      this.cons1 = dataTypeJudge(this.input1);
    },
    toString() {
      // this.cons2 = parseUrlSearch(this.input2)
    },
  },
};
</script>
<style lang='scss' scoped>
</style>