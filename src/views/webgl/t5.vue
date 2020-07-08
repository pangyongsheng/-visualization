<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-07-06 14:57:00
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
import * as Three from "three";
export default {
  name: "earth",
  props: [""],
  data() {
    return {};
  },

  mounted() {
    this.init();
    // this.draw();
    this.draw3();

    this.renderer.render(this.scene, this.camera);
  },

  methods: {
    init() {
      // 渲染器
      this.renderer = new Three.WebGLRenderer({
        canvas: this.$refs.thr
      });
      this.renderer.setClearColor(0x000000);

      // 场景
      this.scene = new Three.Scene();

      // 相机
      this.camera = new Three.PerspectiveCamera(45, 4 / 4, 1, 100);
      this.camera.position.set(0, 0, 10);

      // 将相机添加到场景中
      this.scene.add(this.camera);
    },
    draw() {
      let geometry = new Three.CubeGeometry(1, 2, 3);
      let material = new Three.MeshBasicMaterial({
        color: 0xff0000
      });
      let cube = new Three.Mesh(geometry, material);
      this.scene.add(cube);
    },
    draw2() {
      let geometry = new Three.Geometry();

      let material = new Three.LineBasicMaterial({
        // 使用顶点颜色
        vertexColors: true
      });

      let color1 = new Three.Color(0x444444),
        color2 = new Three.Color(0xff0000);

      // 新建两个点
      let p1 = new Three.Vector3(-1, 0, 1);
      let p2 = new Three.Vector3(1, 0, -1);

      // 将新建的两个点添加到几何体中
      geometry.vertices.push(p1);
      geometry.vertices.push(p2);

      geometry.colors.push(color1, color2);

      let line = new Three.LineSegments(geometry, material, Three.LinePieces);
      this.scene.add(line);
    },
    draw3(callb) {
      
    }
  }
};
</script>
<style lang='scss' scoped>
</style>