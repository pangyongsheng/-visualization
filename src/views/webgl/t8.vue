<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-08-12 16:01:06
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <el-row>
      <el-col :span="4"><el-button type="primary" @click="draw">圆弧线</el-button></el-col>
      <el-col :span="4"><el-button type="success" @click="draw2">直线</el-button></el-col>
      <el-col :span="4"><el-button type="info" @click="draw3">取样曲线</el-button></el-col>
      <el-col :span="4"><el-button type="warning" @click="draw4">贝塞尔曲线</el-button></el-col>
      <el-col :span="4"><el-button type="danger" @click="draw5">组合曲线</el-button></el-col>
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
    // 绘制弧线
    draw() {
      let geometry = new THREE.Geometry(); 
      let arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
      let points = arc.getPoints(50)
      geometry.setFromPoints(points);
      let material = new THREE.LineBasicMaterial({
        color: 0x00ff00
      });
      let line = new THREE.Line(geometry, material);
      this.scene.add(line);
    },
    // 绘制直线
    draw2(){
      let geometry = new THREE.Geometry();
      let p1 = new THREE.Vector3(50, 0, 0);
      let p2 = new THREE.Vector3(0, 70, 120);
      geometry.vertices.push(p1, p2);
      let material = new THREE.LineBasicMaterial({
        color: 0xff0000,
      });//材质对象
      let line = new THREE.Line(geometry, material);
      this.scene.add(line);
    },
    // 取样曲线
    draw3() {
      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
      // 三维样条曲线  Catmull-Rom算法
      let curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-50, 20, 90),
        new THREE.Vector3(-10, 40, 40),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(60, -60, 0),
        new THREE.Vector3(70, 0, 80)
      ]);
      //getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数组
      let points = curve.getPoints(100); //分段数100，返回101个顶点
      // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      geometry.setFromPoints(points);
      //材质对象
      let material = new THREE.LineBasicMaterial({
        color: 0x000000
      });
      //线条模型对象
      let line = new THREE.Line(geometry, material);
      this.scene.add(line); //线条对象添加到场景中
    },
    //贝塞尔曲线 
    draw4() {
      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
      let p1 = new THREE.Vector3(-80, 0, 0);
      let p2 = new THREE.Vector3(20, 100, 0);
      let p3 = new THREE.Vector3(80, 0, 0);
      // 三维二次贝赛尔曲线
      let curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);
      let points = curve.getPoints(100); //分段数100，返回101个顶点
      geometry.setFromPoints(points);
      let material = new THREE.LineBasicMaterial({
        color: 0x0ff880
      });
      //线条模型对象
      let line = new THREE.Line(geometry, material);
      this.scene.add(line); //线条对象添加到场景中

    },
    // 组合曲线
    draw5() {
      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
      // 绘制一个U型轮廓
      let R = 80;//圆弧半径
      let arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true);
      // 半圆弧的一个端点作为直线的一个端点
      let line1 = new THREE.LineCurve(new THREE.Vector2(R, 200, 0), new THREE.Vector2(R, 0, 0));
      let line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0, 0), new THREE.Vector2(-R, 200, 0));
      // 创建组合曲线对象CurvePath
      let CurvePath = new THREE.CurvePath();
      // 把多个线条插入到CurvePath中
      CurvePath.curves.push(line1, arc, line2);
      //分段数200
      let points = CurvePath.getPoints(200);
      // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      geometry.setFromPoints(points);
      //材质对象
      let material = new THREE.LineBasicMaterial({
        color: 0x000000
      });
      //线条模型对象
      let line = new THREE.Line(geometry, material);
      this.scene.add(line); //线条对象添加到场景中
    }
  },  
};
</script>
<style lang='scss' scoped>
#t1{
  margin: 20px;
}
</style>