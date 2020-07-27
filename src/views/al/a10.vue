<!--
 * @Author       : your name
 * @Date         : 2020-07-27 18:00:07
 * @LastEditTime : 2020-07-27 18:20:27
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\a10.vue
--> 
<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-27 15:49:49
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\a1.vue
--> 
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
       {{input1}}
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="tourl">json转化为url</el-button>
      </el-col>
      <el-col :span="6">{{cons1}}</el-col>
    </el-row>
    <br> <hr> <br>
    <el-row :gutter="20">
      <el-col :span="6">
       <el-input v-model="input2" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="toString">url转化为json</el-button>
      </el-col>
      <el-col :span="6">{{cons2}}</el-col>
    </el-row>
  </div>
</template>

<script>
import {stringifyUrl, parseUrlSearch } from './lib/str'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        input1: {a:1,b:'qw',c:true},
        cons1: '',
        input2: '',
        cons2: '',
      };
    },
    created() {
      this.ff()
    },
    methods: {
      ff(){
       
      },
      tourl() {
        this.cons1 = stringifyUrl(this.input1)
      },
      toString() {
        this.cons2 = parseUrlSearch(this.input2)
      }
    },
  }

</script>
<style lang='scss' scoped>

</style>