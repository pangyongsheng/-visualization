<!--
 * @Author       : your name
 * @Date         : 2020-06-19 14:14:04
 * @LastEditTime : 2020-07-02 15:16:29
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d13.vue
--> 
<template>
  <div id="d13">
    <svg width="100%" height="100%" />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dataset:  [
      ]
    };
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      this.width = 600;
      this.height = 300;
      this.padding = { top: 50, right: 50, bottom: 50, left: 50 };
      const _this = this;

      this.main = d3.select('#d13 svg')
        .append('g')
        .classed('main', true)
        .attr('transform',`translate(${_this.padding.top},${_this.padding.left})`);
      
      this.drawAxis()
      this.drawPlot()

    },
    // 坐标系
    drawAxis(){
      const _this = this;
      this.xScale = d3.scaleLinear()
        .domain([140, 190])
        .range([0, _this.width - _this.padding.left - _this.padding.right]);

      this.yScale = d3.scaleLinear()
        .domain([40, 120])
        .range([0, _this.height - _this.padding.top - _this.padding.bottom]);

      const xAxis = d3.axisBottom(this.xScale);
      const yAxis = d3.axisLeft(this.yScale);

      this.main.append('g')
        .attr("transform",`translate(0, ${_this.height - _this.padding.top - _this.padding.bottom})`)
        .call(xAxis)
      
      this.main.append('g')
        .call(yAxis)
    },
    //绘制散点图
    drawPlot() {
      
    }
  }
};
</script>
<style lang='scss'>
#d13 {
    margin: 30px auto;
    width: 600px;
    height: 300px;
    border: 1px solid #000;
    .point{
      fill: #2ec7c9;
      fill-opacity: 0.5;
    }
}
</style> 