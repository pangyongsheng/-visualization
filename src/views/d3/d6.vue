<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-19 14:09:20
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div>
    <svg width="500" height="400" />
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
      // 获取svg
      var marge = { top: 60, bottom: 60, left: 60, right: 60 };
      var svg = d3.select("svg"); //得到SVG画布
      var width = svg.attr("width"); //得到画布的宽
      var height = svg.attr("height"); //得到画布的长
      var g = svg
        .append("g")
        .attr("transform", "translate(" + marge.top + "," + marge.left + ")");
      // 数据
      var dataset = [10, 20, 30, 23, 13, 40, 27, 35, 20];
      // 绘制坐标轴
      var xScale = d3
        .scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, width - marge.left - marge.right]);
      var xAxis = d3.axisBottom(xScale);

      var yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - marge.top - marge.bottom, 0]);
      var yAxis = d3.axisLeft(yScale);

      g.append("g")
        .attr(
          "transform",
          "translate(0," + (height - marge.top - marge.bottom) + ")"
        )
        .call(xAxis);
      g.append("g")
        .attr("transform", "translate(0,0)")
        .call(yAxis);

      // 为每个矩形和对应的文字创建一个分组
      var gs = g
        .selectAll(".rect")
        .data(dataset)
        .enter()
        .append("g");
      //绘制矩形
      var rectPadding = 20; //矩形之间的间隙
      gs.append("rect")
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
          return yScale(d);
        })
        .attr("width", function() {
          return xScale.step() - rectPadding;
        })
        .attr("height", function(d) {
          return height - marge.top - marge.bottom - yScale(d);
        })
        .attr("fill", "blue")
        .on("mouseover",function(){
    			var rect = d3.select(this)
    				.transition()
    				.duration(1500)
    				.attr("fill","yellow");
    		})
    		.on("mouseout",function(){
    			var rect = d3.select(this)
    				.transition()
    				.delay(1500)
    				.duration(1500)
    				.attr("fill","blue");
    		});
      // 绘制文字
      gs.append("text")
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
          return yScale(d);
        })
        .attr("dx", function() {
          (xScale.step() - rectPadding) / 2;
        })
        .attr("dy", 20)
        .text(function(d) {
          return d;
        });
    },
    drawBar2() {
      // 获取svg
      var marge = { top: 60, bottom: 60, left: 60, right: 60 };
      var svg = d3.select("svg"); //得到SVG画布
      var width = svg.attr("width"); //得到画布的宽
      var height = svg.attr("height"); //得到画布的长
      var g = svg
        .append("g")
        .attr("transform", "translate(" + marge.top + "," + marge.left + ")");
      // 数据
      var dataset = [10, 20, 30, 23, 13, 40, 27, 35, 20];
      // 绘制坐标轴
      var xScale = d3
        .scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, width - marge.left - marge.right]);
      var xAxis = d3.axisBottom(xScale);

      var yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - marge.top - marge.bottom, 0]);
      var yAxis = d3.axisLeft(yScale);

      g.append("g")
        .attr(
          "transform",
          "translate(0," + (height - marge.top - marge.bottom) + ")"
        )
        .call(xAxis);
      g.append("g")
        .attr("transform", "translate(0,0)")
        .call(yAxis);

      // 为每个矩形和对应的文字创建一个分组
      var gs = g
        .selectAll(".rect")
        .data(dataset)
        .enter()
        .append("g");
      //绘制矩形
      var rectPadding = 20; //矩形之间的间隙
      gs.append("rect")
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
          //这里是要改变的，即初始状态
          var min = yScale.domain()[0];
          return yScale(min); //可以得知，这里返回的是最大值
        })
        .attr("width", function() {
          return xScale.step() - rectPadding;
        })
        .attr("height", function(d) {
          //这里要改变，即初始状态
          return 0;
        })
        .attr("fill", "blue")
        .transition() //添加过渡
        .duration(2000) //持续时间
        .delay(function(d, i) {
          //延迟
          return i * 400;
        })
        //.ease(d3.easeElasticInOut)//这里读者可以自己将注释去掉，看看效果（chrome浏览器会报错，但是不影响效果）
        .attr("y", function(d) {
          //回到最终状态
          return yScale(d);
        })
        .attr("height", function(d) {
          //回到最终状态
          return height - marge.top - marge.bottom - yScale(d);
        })
      // 绘制文字
      gs.append("text")
        .attr("x", function(d, i) {
          return xScale(i) + rectPadding / 2;
        })
        .attr("y", function(d) {
          var min = yScale.domain()[0];
          return yScale(min);
        })
        .attr("dx", function() {
          (xScale.step() - rectPadding) / 2;
        })
        .attr("dy", 20)
        .text(function(d) {
          return d;
        })
        .transition()
        .duration(2000)
        .delay(function(d, i) {
          return i * 400;
        })
        //.ease(d3.easeElasticInOut)
        .attr("y", function(d) {
          return yScale(d);
        });
    }
  }
};
</script>
<style lang='scss' scoped>
</style> 