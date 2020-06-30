<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-30 15:52:54
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div>
    <svg width="960" height="600" />
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
    var marge = { top: 60, bottom: 60, left: 60, right: 60 }; //设置边距
    var dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];  //数据（表示矩形的宽度）

    var scaleLinear =  d3.scaleLinear()
      .domain([0,d3.max(dataset)])
      .range([0, 300])

    var index = [0,1,2,3,4];
    var color = ["red","blue","yellow","black","green"];
    var scaleOrdinal = d3.scaleOrdinal()
    		.domain(index)
    		.range(color);

    var svg = d3.select("svg"); //得到svg画布
    var g = svg
      .append("g") //定义一个用来装整个图表的一个分组，并设置他的位置
      .attr("transform", "translate(" + marge.top + "," + marge.left + ")");

    var rectHeight = 30; //设置每一个矩形的高度

    g.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", 20) //设置左上点的x
      .attr("y", function(d, i) {
        //设置左上点的y
        return i * rectHeight;
      })
      .attr("width", function(d) {
        //设置宽
        return scaleLinear(d);
      })
      .attr("height", rectHeight - 5) //设置长
      .attr("fill", function(d, i) {
        //设置左上点的y
        return scaleOrdinal(i);
      }); //颜色填充


      //坐标轴
      var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, 300])

      var xAxis = d3.axisBottom(xScale)
        .ticks(10)
      
      g.append('g')
        .attr("transform", "translate("+20+","+(dataset.length*rectHeight)+")")
        .call(xAxis)
  }
};
</script>
<style lang='scss' scoped>
</style> 