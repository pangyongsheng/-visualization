<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-18 17:54:25
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
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
        var dataset = [ 10  ];

        var update = d3.select("body").selectAll("p").data(dataset);
        var enter  = update;
        var exit  = update;

        update.text(function(d,i){
			return "update " + d;
        });

        exit.exit()
			 .text(function(d,i){
				return "exit";

             })
        // enter.enter()
        //     .append("i")
        //     .text(function(d,i){
        //         return "enter " + d;
        //     });
  }
};
</script>
<style lang='scss' scoped>
</style> 