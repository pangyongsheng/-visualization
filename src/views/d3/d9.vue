<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-07-01 15:15:04
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div>
    <div class="a" style="width:400px" ref="dom"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import DragArc from "drag-arc";
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
      const dom = this.$refs.dom;
      new DragArc({
        el: dom,
        startDeg: 0.5,
        endDeg: 2.5,
        innerColor: "#585858",
        outColor: "#00695C",
        innerLineWidth: 1,
        outLineWidth: 14,
        counterclockwise: true,
        slider: 10,
        color: ["#FF9400", "#FFEC00"],
        sliderColor: "#A69900",
        sliderBorderColor: "#FFEC00",
        value: 0,
        textShow: true,
        change: v => {
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style> 