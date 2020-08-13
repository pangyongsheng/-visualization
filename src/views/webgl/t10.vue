<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-08-12 10:29:45
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <el-row>
      <el-col :span="4"><el-button type="primary" @click="draw2">1</el-button></el-col>
      <el-col :span="4"><el-button type="success" @click="draw4">2</el-button></el-col>
      <el-col :span="4"><el-button type="info" @click="draw3">3</el-button></el-col>
      <el-col :span="4"><el-button type="warning" @click="draw5">4</el-button></el-col>
      <el-col :span="4"><el-button type="danger" @click="draw">5</el-button></el-col>
    </el-row>
    <canvas id="t1" width="500" height="500" ref="thr"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "t8",
  data() {
    return {};
  },

  mounted() {
    this.init();
    //this.renderer.render(this.scene, this.camera);
  },
  methods: {
    init() {

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.thr
      });
      this.renderer.setClearColor(0xffffff);
     
      this.scene = new THREE.Scene();
       /**
       * 相机设置
       */
      let width = 500; //窗口宽度
      let height = 500; //窗口高度
      let k = width / height; //窗口宽高比
      let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(0, 0, 500); //设置相机位置
      this.camera.lookAt(new THREE.Vector3(0, 0, 0)); //设置相机方向(指向的场景对象)
      this.scene.add(this.camera);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);//创建控件对象

      
      let ambient  = new THREE.AmbientLight(0x444444);
      ambient.name = 'ambient'
      ambient.position.set(400, 200, 300); //点光源位置
      this.scene.add(ambient); //点光源添加到场景中

      
      this.draw()
      this.render();
    },
    render(){
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    draw() {
      let geometry = new THREE.SphereGeometry(50, 15, 15); //创建一个球体几何对象
      // 创建一个点材质对象
      let material = new THREE.PointsMaterial({
        color: 0x0000ff, //颜色
        size: 2, //点渲染尺寸
      });

      geometry.translate(-120, 120, 0);
      //点模型对象  参数：几何体  点材质
      let point = new THREE.Points(geometry, material);
      this.scene.add(point); 
     
    },
    // 
    draw2(){
      
    },
    // 
    draw3() {
     
    },
    // 
    draw4() {
    
    },
    // 
    draw5() {
  
    }
  },  
};
</script>
<style lang='scss' scoped>
#t1{
  margin: 20px;
}
</style>