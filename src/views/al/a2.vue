<!--
 * @Author       : your name
 * @Date         : 2020-07-13 14:33:51
 * @LastEditTime : 2020-07-13 17:07:59
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
//队列 先进先出
const Queue = function() {
  // 保存数据
  let items = [];
  // enqueue方法
  this.enqueue = function(element) {
    items.push(element);
  };
  // dequeue 方法
  this.dequeue = function() {
    return items.shift();
  };
  // front 方法
  this.front = function() {
    return items[0];
  };
  // isEmpty 方法
  this.isEmpty = function() {
    return items.length === 0;
  };

  // size方法
  this.size = function() {
    return items.length;
  };

  // print 调试方法
  this.print = function() {
    console.log(items.toString());
  };
};
// 优先队列
function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    // {1}
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement); // {2}
    } else {
      var added = false;

      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement); // {3}
          added = true;
          break; // {4}
        }
      }

      if (!added) {
        //{5}
        items.push(queueElement);
      }
    }
  };
  this.print = function() {
    console.log(items);
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
}

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