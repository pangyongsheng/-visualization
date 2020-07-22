<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-22 17:06:43
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\al\a1.vue
--> 
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model.number="total" placeholder="请输入数"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model.number="num" placeholder="拆分个数"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model.number="min" placeholder="最小值"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model.number="max" placeholder="最大值"></el-input>
      </el-col>
    </el-row>
    <br>
     <el-row :gutter="20">
      <el-col :span="6">
        <el-button type="primary" @click.native="fun1">拆分方法1</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="fun1">拆分方法2</el-button>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <br/> <br/> <br/> <br/> <br/>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="aa">
          <ve-histogram :data="chartData" :extend="extend"></ve-histogram>
        </div>
       </el-col>
       <el-col :span="10">
        <div class="">
          <ve-pie :data="chartData"></ve-pie>
        </div>
       </el-col>
    </el-row>
  </div>
</template>
<script>
import veHistogram from 'v-charts/lib/histogram.common'
import vePie from 'v-charts/lib/pie.common'
export default {
  name:'',
  props:[''],
  components: {veHistogram, vePie },
  data () {
    this.extend = {
        series: {
          label: { show: true, position: "top" }
        }
    }
    return {
      total: 100,
      num: 10,
      min: '',
      max: '',
      result:[]
    };
  },
  computed: {
    chartData(){
      return{
        columns: ['x', 'y',],
        rows: this.result.map((d,i)=>{
          return {
            x: i, y:d
          }
        })
      }
    }
  },
  created(){
    this.fun1()
  },
  methods: {
    fun1(){
      let rest = this.total;
      let num = this.num;
      console.log(typeof n)
      let result = Array.apply(null, { length: num })
            .map((n, i) => num - i)
            .map(n => {
                const v = 1 + Math.floor(Math.random() * ( rest / n * 2 - 1));
                rest -= v;
                console.log(v)
                return v;
            });
        result[num - 1] += rest;
        this.result = result;
	  }
    
  }
}

</script>
<style lang='scss' scoped>
.aa{
  width: 400px;
  height: 400px;
}
</style>