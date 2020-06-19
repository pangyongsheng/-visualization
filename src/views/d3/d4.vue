<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-18 18:00:20
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div>
    <p>dog</p>
    <p>cat</p>
    <p id="myP3">pig</p>
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

      var p = d3.select(".about").select("div")
    		.insert("p","#myP3")
    		.text("insert an animal")
    		.style("color","red");

    //   var p = d3.select(".about").select("div")
    // 		.append("p")
    // 		.text("another animal")
    // 		.style("color","red");

    //    var dataset = [3,6,9,12];
    // 	var p = d3.select("body")
    // 		.selectAll("p")
    // 		.data(dataset)
    // 		.text(function(d,i){
    //             console.log(i)
    // 			if(i==3){
    // 				d3.select(this).style("color","red");
    // 			}
    // 			return d;
    // 		})
      
  }
};
</script>
<style lang='scss' scoped>
</style> 