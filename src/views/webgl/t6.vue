<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-08-10 16:44:48
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

export default {
  name: "t",
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
      this.renderer.shadowMapEnabled = true;

      this.scene = new THREE.Scene();
       /**
       * 相机设置
       */
      let width = 500; //窗口宽度
      let height = 500; //窗口高度
      let k = width / height; //窗口宽高比
      let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(0, 0, 200); //设置相机位置
      this.camera.lookAt(new THREE.Vector3(0, 0, 0)); //设置相机方向(指向的场景对象)
      this.scene.add(this.camera);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);//创建控件对象
      

      let point = new THREE.PointLight(0xffffff);
      point.position.set(400, 200, 300); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      //环境光
      let ambient = new THREE.AmbientLight(0x444444);
      this.scene.add(ambient);


      this.draw()
      this.draw2()
      this.draw3()
      this.draw4()
      
      this.render();
    },
    render(){
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    // 点材质
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
    // 线材质
    draw2(){
      let geometry = new THREE.SphereGeometry(50, 15, 15);
      // 虚线材质对象：产生虚线效果
      let material = new THREE.LineDashedMaterial({
        color: 0x0000ff,
        dashSize: 10,//显示线段的大小。默认为3。
        gapSize: 5,//间隙的大小。默认为1
      });
      let line = new THREE.Line(geometry, material); //线模型对象
      //  computeLineDistances方法  计算LineDashedMaterial所需的距离数组
      geometry.translate(0, 120,0);
      line.computeLineDistances();
      this.scene.add(line); 

      let geometry2 = geometry.clone()
      // 虚线材质对象：产生虚线效果
      let material2 = new THREE.LineBasicMaterial({
        color: 0x0000ff,
      });
      let line2 = new THREE.Line(geometry2, material2); //线模型对象
      //  computeLineDistances方法  计算LineDashedMaterial所需的距离数组
      geometry2.translate(120, 0, 0);
  
      this.scene.add(line2); 
    },

    draw3() {
      let geometry = new THREE.BoxGeometry(50, 50, 50); //创建一个立方体几何对象Geometry
      let material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
        wireframe: true
      }); //材质对象Material
      let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      mesh.translateY (-100);
      mesh.scale.set(0.5, 1.5, 2)
      mesh.rotateY(Math.PI/1.5);
      this.scene.add(mesh); 
    },

    draw4() {
    
    },
  },
};
</script>
<style lang='scss' scoped>
</style>