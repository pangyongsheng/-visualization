<!--
 * @Author       : your name
 * @Date         : 2020-06-19 14:14:04
 * @LastEditTime : 2020-07-16 11:17:21
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d13.vue
--> 
<template>
  <div id="d17">
    <svg width="100%" height="100%" />
  </div>
</template>

<script>
import * as d3 from "d3";
import treeDatas from "./tree";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dataset: []
    };
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      this.width = 600;
      this.height = 600;
      this.padding = { top: 30, right: 30, bottom: 30, left: 30 };
      const _this = this;

      this.main = d3
        .select("#d17 svg")
        .append("g")
        .classed("main", true)
        .attr(
          "transform",
          `translate(${_this.padding.top},${_this.padding.left})`
        );

      this.draw();
    },

    //绘制散点图
    draw() {
      // 创建一个层级布局
      const hierarchyData = d3.hierarchy(treeDatas).sum(function(d) {
        return d.value;
      });
      console.log(hierarchyData);
      // 创建一个树状图
      const tree = d3
        .tree()
        .size([this.width - 300, this.height - 300])
        .separation(function(a, b) {
          return (a.parent == b.parent ? 1 : 2) / a.depth;
        });

      // 初始化树状图，也就是传入数据,并得到绘制树基本数据
      const treeData = tree(hierarchyData);

      let nodes = treeData.descendants();
      let links = treeData.links();

      console.log(nodes);
      console.log(links);

      // 创建贝赛尔曲线
      const generator = d3
        .linkHorizontal()
        .x(function(d) {
          return d.y;
        })
        .y(function(d) {
          return d.x;
        });

      this.main
        .append("g")
        .selectAll("path")
        .data(links)
        .enter()
        .append("path")
        .attr("d", function(d) {
          var start = { x: d.source.x, y: d.source.y };
          var end = { x: d.target.x, y: d.target.y };
          return generator({ source: start, target: end });
        })
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-width", 1);

      const gs = this.main
        .append("g")
        .selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .attr("transform", function(d) {
          var cx = d.x;
          var cy = d.y;
          return "translate(" + cy + "," + cx + ")";
        });

      //绘制节点
      gs.append("circle")
        .attr("r", 6)
        .attr("fill", "white")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .on("mouseover", function(d) {
          //交互
          d3.select(this)
            .attr("stroke", "skyblue")
            .attr("stroke-width", 2);
        })
        .on("mouseout", function() {
          d3.select(this)
            .attr("stroke", "#000")
            .attr("stroke-width", 1);
        });

      //绘制文字
      gs.append("text")
        .attr("x", function(d) {
          return d.children ? -90 : 10;
        })
        .attr("y", -5)
        .attr("dy", 10)
        .text(function(d) {
          return d.data.name;
        })
        .on("mouseover", function(d) {
          //交互
          d3.select(this).attr("fill", "red");
        })
        .on("mouseout", function() {
          d3.select(this).attr("fill", "#000");
        });
    }
  }
};
</script>
<style lang='scss' scope>
#d17 {
  margin: 30px auto;
  width: 600px;
  height: 500px;
  border: 1px solid #000;
  .point {
    fill: #2ec7c9;
    fill-opacity: 0.5;
  }
}
</style> 