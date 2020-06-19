<!--
 * @Author       : your name
 * @Date         : 2020-06-18 15:54:06
 * @LastEditTime : 2020-06-19 18:32:40
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\d3.vue
--> 
<template>
  <div>
    <svg width="600" height="500" />
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
      var marge = {top:10,bottom:10,left:10,right:10}
    	var svg = d3.select("svg")
    	var width = svg.attr("width")
    	var height = svg.attr("height")
    	var g = svg.append("g")
    		.attr("transform","translate("+marge.top+","+marge.left+")");
    		
    	//准备数据
    	var nodes = [//节点集
    		{name:"马超"},
    		{name:"傻子"},
    		{name:"大傻子"},
    		{name:"张琦"},
    		{name:"席春娇"},
    		{name:"二傻子"},
    		{name:"三傻子"},
    		{name:"明山"},
    		{name:"班长"}
    	];
    	
    	var edges = [//边集
    		{source:0,target:4,relation:"籍贯",value:4},
    		{source:4,target:5,relation:"舍友",value:1},
    		{source:4,target:6,relation:"舍友",value:1},
    		{source:4,target:7,relation:"舍友",value:1},
    		{source:1,target:6,relation:"籍贯",value:2},
    		{source:2,target:5,relation:"籍贯",value:0.9},
    		{source:3,target:7,relation:"籍贯",value:1},
    		{source:5,target:6,relation:"同学",value:1.6},
    		{source:6,target:7,relation:"朋友",value:0.7},
    		{source:6,target:8,relation:"职责",value:2}
        ];
        
        //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    	var colorScale = d3.scaleOrdinal()
    		.domain(d3.range(nodes.length))
            .range(d3.schemeCategory10);
            
        var forceSimulation = d3.forceSimulation()
    		.force("link",d3.forceLink())
    		.force("charge",d3.forceManyBody())
            .force("center",d3.forceCenter());
        //生成节点数据
    	forceSimulation.nodes(nodes)
            .on("tick",ticked);//这个函数很重要，后面给出具体实现和说明
        //生成边数据
    	forceSimulation.force("link")
    		.links(edges)
    		.distance(function(d){//每一边的长度
    			return d.value*100;
            })
console.log(nodes);
        //设置图形的中心位置	
    	forceSimulation.force("center")
    		.x(width/2)
            .y(height/2);     
        console.log(nodes);
    	console.log(edges);   
         //绘制边
    	var links = g.append("g")
    		.selectAll("line")
    		.data(edges)
    		.enter()
    		.append("line")
    		.attr("stroke",function(d,i){
    			return colorScale(i);
    		})
            .attr("stroke-width",1);

           var linksText = g.append("g")
    		.selectAll("text")
    		.data(edges)
    		.enter()
    		.append("text")
    		.text(function(d){
    			return d.relation;
            })    
            
            var gs = g.selectAll(".circleText")
    		.data(nodes)
    		.enter()
    		.append("g")
    		.attr("transform",function(d,i){
    			var cirX = d.x;
    			var cirY = d.y;
    			return "translate("+cirX+","+cirY+")";
    		})
    		.call(d3.drag()
    			.on("start",started)
    			.on("drag",dragged)
    			.on("end",ended)
            );
            
            //绘制节点
    	gs.append("circle")
    		.attr("r",10)
    		.attr("fill",function(d,i){
    			return colorScale(i);
    		})
    	//文字
    	gs.append("text")
    		.attr("x",-10)
    		.attr("y",-20)
    		.attr("dy",10)
    		.text(function(d){
    			return d.name;
            })
            
       function ticked(){
    		links
    			.attr("x1",function(d){return d.source.x;})
    			.attr("y1",function(d){return d.source.y;})
    			.attr("x2",function(d){return d.target.x;})
    			.attr("y2",function(d){return d.target.y;});
    			
    		linksText
    			.attr("x",function(d){
    			return (d.source.x+d.target.x)/2;
    		})
    		.attr("y",function(d){
    			return (d.source.y+d.target.y)/2;
    		});
    			
    		gs
    			.attr("transform",function(d) { return "translate(" + d.x + "," + d.y + ")"; });
        }
        
        function started(d){
    		if(!d3.event.active){
    			forceSimulation.alphaTarget(0.8).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
    		}
    		d.fx = d.x;
    		d.fy = d.y;
    	}
    	function dragged(d){
    		d.fx = d3.event.x;
    		d.fy = d3.event.y;
    	}
    	function ended(d){
    		if(!d3.event.active){
    			forceSimulation.alphaTarget(0);
    		}
    		d.fx = null;
    		d.fy = null;
        }
        


    }
  }
};
</script>
<style lang='scss' scoped>
</style> 