<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-13 17:56:06
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
        <el-button type="primary" @click.native="hotP">开始</el-button>
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
    let s = new Set([1,2,3,4,5,6,6,6])
    let ss = new Set('12344a')
    console.log(s)
    console.log(ss)
    let arr1 = [1,1,2,3,4,5,6,7,8]
    let arr2 = [2,4,6,8,10]
    // 并集
    console.log(new Set([...arr1,...arr2]))
    // 交集
    let b = new Set(arr2)
    console.log(arr1.filter(x=>b.has(x)))
    // 差集
    console.log(arr1.filter(x=>!b.has(x)))
  },
  methods: {
    hotP(){
	
	}
    
  }
}

</script>
<style lang='scss' scoped>

</style>