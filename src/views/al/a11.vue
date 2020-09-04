<!--
 * @Author       : your name
 * @Date         : 2020-07-27 18:31:39
 * @LastEditTime : 2020-09-03 16:07:32
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\a11.vue
--> 
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="btn1">match</el-button>
      </el-col>
      <el-col :span="6">{{cons1}}</el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="btn2">test</el-button>
      </el-col>
      <el-col :span="6">{{cons2}}</el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input3" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="btn3">replace</el-button>
      </el-col>
      <el-col :span="6">{{cons3}}</el-col>
    </el-row>
    <!-- <el-button type="primary" @click.native="test">测试</el-button> -->
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
      input1: '',
      cons1: "",
      input2: "",
      cons2: "",
      input3: "",
      cons3: "",
    };
  },
  created() {
    //console.log(this.ff([0,1,2,3,4,5,6,7,9]));
  },
  methods: {
    ff(data) {
     
    },
    btn1() {
      let regex = /good|nice/g;
      regex = /id="[^"]*"/ //匹配id
      this.cons1 = this.input1.match(regex)
      console.log(this.cons1)
    },
    btn2() {
      let regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
      regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
      this.cons2 = regex.test(this.input2)
    },
    btn3() {
      let regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
      //\b是单词边界，具体就是\w和\W之间的位置，也包括\w和^之间的位置，也包括\w和$之间的位置。
      // regex = /^|$/gm;
      // regex = /\b/g; 
      //  (?=p)和(?!p)
      // regex = /(?=l)/g;
      // regex = /(?!l)/g;
      // 金额表示
      // regex = /(?=\d{3}$)/g;
      // regex = /(?=(\d{3})+$)/g;
      // regex = /(?!^)(?=(\d{3})+$)/g;
      // 密码长度6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符
      regex = /^[0-9A-Za-z]{6,12}$/;
      //  判断是否包含有某一种字符 
      regex = /(?=.*[0-9])^[0-9A-Za-z]{6,12}$/;
      // 包含两种字符
      regex = /(?=.*[0-9])(?=.*[a-z])^[0-9A-Za-z]{6,12}$/;
      // 将每个单词的首字母转换为大写
      regex = /(?:^|\s)\w/g;


      this.cons3 = this.input3.replace(regex, function(c) {
        return c.toUpperCase();
      })
    },
    test() {
      console.log(rob([0,1,0,1,0,0]));
    },
  },
};
</script>
<style lang='scss' scoped>
</style>