<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-13 18:59:00
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
const HashTable = function(){
	var table = [];
	// 私有方法-散列函数
	let loseloseHashCode = function(key){
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};
	
	this.put = function(key, value){
		let position = loseloseHashCode(key);
		console.log(position + ' - ' + key); //{6}
		table[position] = value;
	};
	this.get = function(key){
		return table[loseloseHashCode(key)];
	};
	
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	};
}
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
    let t = new HashTable()
    t.put('aaaa',100)
    t.put('b','121')
    t.put('12',1100)
    console.log(t)
  },
  methods: {
    hotP(){
	
	}
    
  }
}

</script>
<style lang='scss' scoped>

</style>