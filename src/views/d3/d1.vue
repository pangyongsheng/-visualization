<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:47:34
 * @LastEditTime : 2020-08-18 15:43:33
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d1.vue
--> 
<template>
  <svg width="500" height="270">
    <g style="transform: translate(0, 10px)">
      <path :d="line" />
    </g>
  </svg>
</template>
<script>
import * as d3 from 'd3';
export default {
  name: 'vue-line-chart',
  data() {
    return {
      data: [99, 71, 78, 25, 36, 92],
      line: '',
    };
  },
  mounted() {
    this.calculatePath();
  },
  methods: {
    getScales() {
      const x = d3.scaleTime().range([0, 430]);
      const y = d3.scaleLinear().range([210, 0]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
  },
};
</script>
<style lang="sass" scoped>
svg
  margin: 25px;
path
  fill: none
  stroke: #77BF8A
  stroke-width: 3px
</style>