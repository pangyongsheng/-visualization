<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-07-21 16:59:13
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
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
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
      this.camera.position.set(10, 10, 300);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);//创建控件对象

      var light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 10, 5);
      this.scene.add(light);


      this.scene.add(this.camera);
    },
 
    render(){
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    draw() {
      const _this = this;
      let loader = new OBJLoader();
      loader.load('/lib/WaltHead.obj', function(obj) {
         obj.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material.side = THREE.DoubleSide;
            }
        });
          //储存到全局变量中
          _this.mesh = obj; 
          _this.scene.add(obj);
      });
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