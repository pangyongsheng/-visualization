<!--
 * @Author       : your name
 * @Date         : 2020-07-27 18:31:39
 * @LastEditTime : 2020-07-30 14:46:05
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
import { averageSplit } from "./lib/al"
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
    //  let a = averageSplit([1,2,5,9,3,1,6,21,5,8,9,4,10])
    //  console.log(a)
     var a = [0];
      if (a) {
        console.log(a)
        console.log(a == true);
        console.log(a)
      } else {
        console.log(a);
      }
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