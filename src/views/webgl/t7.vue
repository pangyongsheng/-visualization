<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-08-11 17:10:24
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <el-row>
      <el-col :span="4"><el-button type="primary" @click="draw2">环境光</el-button></el-col>
      <el-col :span="4"><el-button type="success" @click="draw4">平行光</el-button></el-col>
      <el-col :span="4"><el-button type="info" @click="draw3">点光源</el-button></el-col>
      <el-col :span="4"><el-button type="warning" @click="draw5">聚光灯光源</el-button></el-col>
      <el-col :span="4"><el-button type="danger" @click="draw">添加cube</el-button></el-col>
    </el-row>
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
      this.camera.position.set(0, 0, 500); //设置相机位置
      this.camera.lookAt(new THREE.Vector3(0, 0, 0)); //设置相机方向(指向的场景对象)
      this.scene.add(this.camera);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);//创建控件对象
      
      let planeGeometry = new THREE.PlaneGeometry(300,450);
   		let planeMaterial = new THREE.MeshPhongMaterial({color:0xeeeeee});
   		let plane = new THREE.Mesh(planeGeometry,planeMaterial);
			plane.position.set(150,-20,225);
      plane.rotation.x = -0.5*Math.PI;
      plane.receiveShadow = true;
      this.scene.add(plane);
      this.planeGeometry = planeGeometry;
      
      for (var i = 0 ; i < 20; i++){
         this.draw(planeGeometry)
      }
     
      
      this.render();
    },
    render(){
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    draw(planeGeometry) {
      
      let cubeSize = Math.ceil(Math.random()*45);//大小1-3之间 1,2,3
      let cubeGeometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
      let cubeMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xffffff});
      let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      
      cube.castShadow = true;
      cube.name = "方块—" + this.scene.children.length;
      console.log(this.planeGeometry.parameters.width);
      cube.position.x = -16 + Math.round((Math.random() * this.planeGeometry.parameters.width));
      cube.position.y = 2 + Math.round(Math.random() * 20);
      cube.position.z = - 15 + Math.round((Math.random()*this.planeGeometry.parameters.height));
      console.log("添加方块："+cube.name);
      this.scene.add(cube);
    },
    // 环境光
    draw2(){
      this.scene.remove('ambient'); //点光源添加到场景中
      let ambient  = new THREE.AmbientLight(0x444444);
      ambient.name = 'ambient'
      ambient.position.set(400, 200, 300); //点光源位置
      this.scene.add(ambient); //点光源添加到场景中
    },
    // 点光源
    draw3() {
      var point = new THREE.PointLight(0xffffff);
      //设置点光源位置，改变光源的位置
      point.position.set(400, 200, 300);
      this.scene.add(point);
    },
    // 平行光
    draw4() {
      let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
      directionalLight.position.set(500, 100, 50);
      // 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
      // directionalLight.target = mesh2;
      directionalLight.castShadow = true;
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 300;
      directionalLight.shadow.camera.left = -50;
      directionalLight.shadow.camera.right = 50;
      directionalLight.shadow.camera.top = 200;
      directionalLight.shadow.camera.bottom = -100;
      this.scene.add(directionalLight);
    },
    // 聚光源
    draw5() {
      // 聚光光源
      let spotLight = new THREE.SpotLight(0xffffff);
      // 设置聚光光源位置
      spotLight.position.set(200, 200, 200);
      // 聚光灯光源指向网格模型mesh2、
      spotLight.castShadow = true;
      spotLight.shadow.camera.near = 1;
      spotLight.shadow.camera.far = 300;
      spotLight.shadow.camera.fov = 20;
      // 设置聚光光源发散角度
      spotLight.angle = Math.PI / 6
      this.scene.add(spotLight);//光对象添加到scene场景中
    }
  },  
};
</script>
<style lang='scss' scoped>
#t1{
  margin: 20px;
}
</style>