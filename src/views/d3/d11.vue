<template>
  <div id="d11">
    <svg width="500" height="400">
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  mounted() {
    //this.drawBar();
  },
  methods: {
    drawBar() {
      const _this = this;
      const svg = d3.select("#d svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        g = svg.append("g").attr("transform", `translate(32,${height / 2})`);

      this.update(g, alphabet);

      d3.interval(function() {
        _this.update(g, d3.shuffle(alphabet)
            .slice(0, Math.floor(Math.random() * 26))
            .sort());
      }, 1500);
    },
    update(g, data) {
      const t = g.selectAll("text").data(data);

      t.attr("class", "updata");

      t.enter()
        .append("text")
        .attr("class", "enter")
        .attr("x", (d, i) => i * 32)
        .attr("dy", ".35em")
        .merge(t)
        .text(d => d);

      t.exit().remove();
    }
  }
};
</script>
<style lang='scss'>
#d11{
  .enter{
    fill: #000;
   
  }
  .updata {
    fill: green;
  }
}
</style> 