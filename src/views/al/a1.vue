<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-13 17:08:30
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\a1.vue
--> 
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="divideBy2">转化为二进制</el-button>
      </el-col>
      <el-col :span="6">{{cons1}}</el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        input1: '',
        cons1: 'q'
      };
    },
    methods: {

      divideBy2(){
        let remStack = [],
          rem,
          binaryString = '';
          console.log(remStack)
        while (this.input1 > 0){ //{1}
          rem = Math.floor(this.input1 % 2); //{2}
          remStack.push(rem); //{3}
          this.input1 = Math.floor(this.input1 / 2); //{4}
        }
        
        while (!remStack.length ==0){ //{5}
          binaryString += remStack.pop().toString();
        }
        
        this.cons1 = binaryString
      }
    },

   

  }

</script>
<style lang='scss' scoped>

</style>