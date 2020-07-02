<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-07-01 18:34:30
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div id="d12">
    <svg width="100%" height="100%" />
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

      const _this = this;
      const width = 500,
        height = 500;

      const main = d3
        .select("#d12 svg")
        .append("g")
        .classed("main", true)
        .attr(`transform`, `translate(${width / 2},${height / 2})`);

      const data = {
        fieldNames: [
          "语文",
          "数学",
          "外语",
          "物理",
          "化学",
          "生物",
          "政治",
          "历史"
        ],
        values: [[10, 20, 30, 40, 50, 60, 70, 80]]
      };

      const radius = 100, //半徑
        total = 8, // 指标的个数，即fieldNames的长度
        level = 4, // 需要将网轴分成几级，即网轴上从小到大有多少个正多边形
        rangeMin = 0, // 网轴的范围，类似坐标轴
        rangeMax = 100,
        arc = 2 * Math.PI,
        onePiece = arc / total;

      let polygons = {
        webs: [],
        webPoints: []
      };

      for (let k = level; k > 0; k--) {
        let webs = "",
          webPoints = [];
        let r = (radius / level) * k;
        for (let i = 0; i < total; i++) {
          let x = r * Math.sin(i * onePiece),
            y = r * Math.cos(i * onePiece);
          webs += x + "," + y + " ";
          webPoints.push({
            x: x,
            y: y
          });
        }
        polygons.webs.push(webs);
        polygons.webPoints.push(webPoints);
      }

      console.log(polygons);

      let webs = main.append("g").classed("webs", true);

      webs
        .selectAll("polygon")
        .data(polygons.webs)
        .enter()
        .append("polygon")
        .attr("points", d => d);

      let lines = main.append("g").classed("lines", true);

      console.log(polygons.webPoints);

      lines
        .selectAll("line")
        .data(polygons.webPoints[0])
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", d => d.x)
        .attr("y2", d => d.y);

      // 绘制雷达图
      let areasData = [];
      let values = data.values;

      for (let i = 0; i < values.length; i++) {
        let value = values[i],
          area = "",
          points = [];

        for (let k = 0; k < total; k++) {
          let r = (radius * (value[k] - rangeMin)) / (rangeMax - rangeMin);
          let x = r * Math.sin(k * onePiece),
            y = r * Math.cos(k * onePiece);
          area += x + "," + y + " ";
          points.push({
            x: x,
            y: y
          });
        }

        areasData.push({
          polygon: area,
          points: points
        });
      }

      var areas = main.append("g").classed("areas", true);
      // 添加g分组用来包含一个雷达图区域下的多边形以及圆点
      areas
        .selectAll("g")
        .data(areasData)
        .enter()
        .append("g")
        .attr("class", function(d, i) {
          return "area" + (i + 1);
        });
      for (var i = 0; i < areasData.length; i++) {
        // 依次循环每个雷达图区域
        var area = areas.select(".area" + (i + 1)),
          areaData = areasData[i];
        // 绘制雷达图区域下的多边形
        area
          .append("polygon")
          .attr("points", areaData.polygon)
          .attr("stroke", function(d, index) {
            return _this.getColor(i);
          })
          .attr("fill", function(d, index) {
            return _this.getColor(i);
          });
        // 绘制雷达图区域下的点
        var circles = area.append("g").classed("circles", true);
        circles
          .selectAll("circle")
          .data(areaData.points)
          .enter()
          .append("circle")
          .attr("cx", function(d) {
            return d.x;
          })
          .attr("cy", function(d) {
            return d.y;
          })
          .attr("r", 3)
          .attr("stroke", function(d, index) {
            return _this.getColor(i);
          });
      }
    },
    getColor(idx) {
      const palette = [
        "#2ec7c9",
        "#b6a2de",
        "#5ab1ef",
        "#ffb980",
        "#d87a80",
        "#8d98b3",
        "#e5cf0d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
        "#9a7fd1",
        "#588dd5",
        "#f5994e",
        "#c05050",
        "#59678c",
        "#c9ab00",
        "#7eb00a",
        "#6f5553",
        "#c14089"
      ];
      return palette[idx % palette.length];
    }
  }
};
</script>
<style lang='scss'>
#d12 {
  margin: 0px auto;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  polygon {
    fill: white;
    fill-opacity: 0.5;
    stroke: gray;
    stroke-dasharray: 10 5;
  }
  line {
    fill: white;
    fill-opacity: 0.5;
    stroke: gray;
    stroke-dasharray: 10 5;
  }
}
</style> 