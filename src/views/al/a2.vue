<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-24 16:04:22
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
import {Queue, PriorityQueue } from './lib/queue'
export default {
  name: "",
  props: [""],
  data() {
    return {
      input1: "",
      cons1: ""
    };
  },
  created() {
    let a = new Queue();
    a.enqueue(9);
    a.enqueue(8);
    a.enqueue(7);
    console.log(a);
    console.log(a.dequeue());
    console.log(a.size());

    //
    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue("John", 2);
    priorityQueue.enqueue("Jack", 1);
    priorityQueue.enqueue("Camila", 1);
    priorityQueue.print(); // Jack, Camila, John

    //循环队列
  },
  methods: {
    hotP() {
      let queue = new Queue();
      let names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
      for (let i = 0; i < names.length; i++) {
        queue.enqueue(names[i]); // {2}
      }
      let eliminated = "";
      while (queue.size() > 1) {
        for (let i = 0; i < this.input1; i++) {
          queue.enqueue(queue.dequeue()); // {3}
        }
        eliminated = queue.dequeue(); // {4}
        console.log(eliminated + "在击鼓传花游戏中被淘汰。");
      }
      this.cons1 = queue.dequeue();
    }
  }
};
</script>
<style lang='scss' scoped>
</style>