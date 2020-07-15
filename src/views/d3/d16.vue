<!--
 * @Author       : your name
 * @Date         : 2020-06-19 14:14:04
 * @LastEditTime : 2020-07-15 15:10:39
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d13.vue
--> 
<template>
  <div id="d16">
    <svg width="100%" height="100%" />
  </div>
</template>

<script>
import * as d3 from "d3";
import geoDate from "./china.geo"
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
      this.width = 700;
      this.height = 500;
      this.padding = { top: 50, right: 50, bottom: 50, left: 50 };
      const _this = this;

      this.main = d3
        .select("#d16 svg")
        .append("g")
        .classed("main", true)
        .attr(
          "transform",
          `translate(${_this.padding.top},${_this.padding.left})`
        );

      this.drawMap();
    },

    //绘制地图
    async drawMap() {

      const _this = this;
      // 投影函数
      const projection = d3
        .geoMercator()
        .scale(550)
        .center([105, 38])
        .translate([(this.width -this.padding.left -this.padding.right) / 2,( this.height-this.padding.top -this.padding.bottom)/ 2]);

      // 创建路径生成器
      const path = d3.geoPath().projection(projection);

      // 设置颜色比例尺
      const colors = d3.schemeCategory10;

      
      this.main
        .selectAll('g')
        .data(geoDate.features)
        .enter()
        .append('g')
        .append('path')
        .attr('d', path)
        .attr('stroke', '#000')
        .attr('stroke-width', 1)
        .attr('opacity', 0.6)
        .attr('fill', function(d, i) {
          return colors[i % 10];
        })
        .on('mouseover', function(d) {
          d3.select(this).attr('opacity', 1);
          _this.showText(d)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.6);
          d3.select("#name").remove();
        });
     
    },
    // 显示文字
    showText(d){
      let e=e||window.event;
      let pos = { "x": e.offsetX, "y": e.offsetY };
      this.main
        .append('text')
        .attr('id',"name")
        .attr('x', pos.x)
        .attr('y', pos.y)
        .attr("text-anchor", "middle")
			  .attr("font-family", "sans-serif")
			  .attr("font-size", "14px")
			  .attr("font-weight", "bold")
			  .attr("fill", "#000")
        .text(d.properties.name)
    }
  }
};
</script>
<style lang='scss' scope>
#d16 {
  margin: 30px auto;
  width: 700px;
  height: 500px;
  border: 1px solid #000;
  .point {
    fill: #2ec7c9;
    fill-opacity: 0.5;
  }
}
</style> 