<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
       <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="tourl">判断类型</el-button>
      </el-col>
      <el-col :span="6">{{cons1}}</el-col>
    </el-row>
  </div>
</template>

<script>
import { dataTypeJudge } from '../untils/untils'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        input1: '1212',
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
        this.cons1 = dataTypeJudge(this.input1)
      },
      toString() {
        // this.cons2 = parseUrlSearch(this.input2)
      }
    },
  }

</script>
<style lang='scss' scoped>

</style>