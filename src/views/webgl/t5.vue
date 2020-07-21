<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-07-21 16:25:40
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <canvas id="t1" width="500" height="500" ref="thr"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls, OBJLoader } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "earth",
  props: [""],
  data() {
    return {};
  },

  mounted() {
    this.init();
    // this.draw();
    this.draw();
    this.render();
    
  },

  methods: {
    init() {
      // 渲染器
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.thr
      });
      this.renderer.setClearColor(0x000000);

      // 场景
      this.scene = new THREE.Scene();

      // 相机
      this.camera = new THREE.PerspectiveCamera(45, 500 / 500, 1, 2000);
      this.camera.position.set(100, 100, 1000);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);//创建控件对象

      this.scene.add(this.camera);
    },
 
    render(){
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    draw() {
      let ball = new THREE.SphereGeometry(300, 20, 20);
      let pMaterial = new THREE.PointsMaterial({
        // 粒子颜色
        color: 0xf10ffa,
        // 粒子大小
        size: 20
      });
      // 创建粒子系统
      this.particleSystem = new THREE.Points(ball, pMaterial);
      this.scene.add(this.particleSystem);
    },
    draw2() {
      console.log(1)
    },
    draw3() {}
  }
};
</script>
<style lang='scss' scoped>
</style>