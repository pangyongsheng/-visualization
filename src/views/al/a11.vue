<!--
 * @Author       : your name
 * @Date         : 2020-07-27 18:31:39
 * @LastEditTime : 2020-08-06 14:18:35
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
    <el-button type="primary" @click.native="test">测试</el-button>
  </div>
</template>

<script>
import { dataTypeJudge } from "../untils/untils";
import { averageSplit, rob } from "./lib/al"
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
    //console.log(this.ff([0,1,2,3,4,5,6,7,9]));
  },
  methods: {
    ff(data) {
      const result = [];
      let queue = data;
      while(queue.length > 0){
        [...queue].forEach(item => {
          queue.shift();
          result.push(item.name); 
          item.children && queue.push(...item.children)
        });
      }
      return result;
    },
    tourl() {
      this.cons1 = dataTypeJudge(this.input1);
    },
    test() {
      
      console.log(rob([0,1,0,1,0,0]));
    },
  },
};
</script>
<style lang='scss' scoped>
</style>