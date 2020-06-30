<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-29 15:20:55
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div id="warp">
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
        var dataset = [ 10,2 ]; 
        dataset = [ 10,2 ,3,3,3 ]; 


        var update = d3.select("#warp").selectAll("p").data(dataset);
        var enter  = update.enter();
        var exit  = update.exit();

        update.text(function(d,i){
			    return "update " + d;
        });

        // exit.text(function(d,i){
				//   return "exit";
        // })
        
        console.log(enter)
        enter.append("p").text(function(d){ return d; });
  }
};
</script>
<style lang='scss' scoped>
</style> 