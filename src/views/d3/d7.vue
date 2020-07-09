<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-19 16:26:26
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div>
    <svg width="300" height="300" />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      var marge = { top: 10, bottom: 10, left: 10, right: 10 };
      var svg = d3.select("svg");
      var width = svg.attr("width");
      var height = svg.attr("height");
      var g = svg
        .append("g")
        .attr("transform", "translate(" + marge.top + "," + marge.left + ")");

      var dataset = [32, 10, 43, 55, 40]; //数据

      //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
      var colorScale = d3
        .scaleOrdinal()
        .domain(d3.range(dataset.length))
        .range(d3.schemePastel1  );


      var pie = d3.pie();

      //新建一个弧形生成器

      var arc_generator = d3
        .arc()
        .innerRadius(0)//内半径
        .outerRadius(100); //外半径

      //将原始数据变成可以绘制饼状图的数据，
      var pieData = pie(dataset);

      //在浏览器的控制台打印pieData
      console.log(pieData);

      var gs = g
        .selectAll(".g")
        .data(pieData)
        .enter()
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); //位置信息

      //绘制饼状图的各个扇形
      gs.append("path")
        .attr("d", function(d) {
          return arc_generator(d); //往弧形生成器中出入数据
        })
        .attr("fill", function(d, i) {
            console.log(colorScale(i))
          return colorScale(i); //设置颜色
        });

      //绘制饼状图上面的文字信息
      gs.append("text")
        .attr("transform", function(d) {
          //位置设在中心处
          return "translate(" + arc_generator.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d) {
          return d.data;
        });
    }
  }
};
</script>
<style lang='scss' scoped>
</style> 