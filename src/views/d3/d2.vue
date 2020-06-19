<template>
  <div>
    <p>dog</p>
    <p>cat</p>
    <p>pig</p>
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
    //选择元素
    // var p = d3.select("body").selectAll("p");
    // p.text("d3.js");
    // 选择元素和绑定数据
    var dataset = ["so cute", "cute", "fat"];
    var p = d3.select("body").selectAll("p");

    p.data(dataset).text(function(d, i) {
      return "第" + i + "个动物" + d;
    });
  }
};
</script>
<style lang='scss' scoped>
</style> */