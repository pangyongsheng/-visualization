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
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click.native="divideBy2">转化为二进制</el-button>
      </el-col>
      <el-col :span="6">{{cons1}}</el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <br> <hr> <br>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="input3" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">{{result}}</el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-button type="primary" @click.native="intersection">交集</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click.native="union">并集</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click.native="diff">差集</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click.native="difference">补集</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click.native="unique">去重</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { intersection, intersection2, intersection3, 
union, diff, difference, unique, unique2, unique3} from './lib/arr'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        input1: '',
        cons1: 'q',
        input2: '1,3,5,7',
        input3: '2,4,6,8',
        result: 'null',
        a: [1,2,3,4,5,6,7,8,9],
        b: [1,3,5,7,9],
        c: [0,2,4,6,8],
        d: [1,2,3,4,5],
        e: [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }],
        f: [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }],
        g: [0,1,2,3,4,4,5,0,3,4,5,7,9,1]
      };
    },
    computed: {
      arr1(){
        return this.input2.split(',')
      },
      arr2(){
        return this.input3.split(',')
      },
    },
    created() {
      this.arrf()
    },
    methods: {
      arrf(){
        // console.log(intersection(this.a, this.b))
        // console.log(intersection2(this.a, this.b))
        // console.log(intersection3(this.e, this.f))
        // console.log(union(this.c, this.b))
        // console.log(diff(this.a, this.b))
        // console.log(difference(this.c, this.d))
        // console.log(unique(this.g))
        // console.log(unique2(this.g))
        // console.log(unique3(this.g))
      },
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
      },
      intersection(){
        this.result = intersection(this.arr1, this.arr2)
      },
      union(){
        this.result = union(this.arr1, this.arr2)
      },
      diff(){
        this.result = diff(this.arr1, this.arr2)
      },
      difference(){
        this.result = difference(this.arr1, this.arr2)
      },
      unique(){
        this.result = unique(this.arr1)
      },

    },
  }

</script>
<style lang='scss' scoped>

</style>