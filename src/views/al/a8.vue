<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-13 17:03:10
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
        <el-button type="primary" @click.native="hotP">开始游戏</el-button>
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
  created(){
  
  },
  methods: {
    hotP(){
	
	}
    
  }
}

</script>
<style lang='scss' scoped>

</style>