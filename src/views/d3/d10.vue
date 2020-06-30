<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-30 18:49:40
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div class="container">
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
      const  dataset = [
        {x: 0, y: 11}, {x: 1, y: 35},
        {x: 2, y: 23}, {x: 3, y: 78},
        {x: 4, y: 55}, {x: 5, y: 18},
        {x: 6, y: 98}, {x: 7, y: 100},
        {x: 8, y: 22}, {x: 9, y: 65}
      ];

      const width = 600, height = 300;
      // SVG画布边缘与图表内容的距离
      const padding = { top: 50, right: 50, bottom: 50, left: 50 };
      // 创建一个分组用来组合要画的图表元素
      const main = d3.select('.container svg').append('g')
          // 给这个分组加上main类
        main.classed('main',true)
          // // 设置该分组的transform属性
        main.attr('transform', "translate(" + padding.top + ',' + padding.left + ')');

      const xScale = d3.scaleLinear()
        .domain(d3.extent(dataset, (d)=> d.x))
        .range([0, width - padding.left - padding.right])
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, d => d.y)])
        .range([height - padding.top - padding.bottom, 0])

      const xAxis = d3.axisBottom(xScale)
      const yAxis = d3.axisLeft(yScale);

      main.append('g')
        .attr(
            "transform",
            "translate(0," + (height - padding.top - padding.bottom) + ")"
        )
        .call(xAxis)

      main.append('g')
        .call(yAxis)
 
      const line = d3.line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))

      main.append('path')
        .attr('d', line(dataset))
        .attr('stroke', '#f00')
        .attr('fill', 'none');
      

      var colorScale = d3
        .scaleOrdinal()
        .domain(d3.range(dataset.length))
        .range(d3.schemeCategory10);

      main.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', function(d) {
            return xScale(d.x);
        })
        .attr('cy', function(d) {
            return yScale(d.y);
        })
        .attr('r', 5)
        .attr('fill', function(d, i) {
            return colorScale(i);
        });
    }
  }
};
</script>
<style lang='scss' scoped>
.main{
  color: red;
}
</style> 