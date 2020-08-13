<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-08-13 18:05:29
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <el-row>
      <el-col :span="4"><el-button type="primary" @click="draw">曲线路径管道成型</el-button></el-col>
      <el-col :span="4"><el-button type="success" @click="draw2">旋转造型</el-button></el-col>
      <el-col :span="4"><el-button type="info" @click="draw3">Shape对象和轮廓填充</el-button></el-col>
      <el-col :span="4"><el-button type="warning" @click="draw4">拉伸扫描成型</el-button></el-col>
      <!-- <el-col :span="4"><el-button type="danger" @click="draw">5</el-button></el-col> -->
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

      
     // this.draw2()
      this.render();
    },
    render(){
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
    },
    // 曲线路径管道成型
    draw() {
      // 创建多段线条的顶点数据
      let p1 = new THREE.Vector3(-185.35, -135.36)
      let p2 = new THREE.Vector3(-150, 0, 0);
      let p3 = new THREE.Vector3(0, 150, 0);
      let p4 = new THREE.Vector3(150, 0, 0);
      let p5 = new THREE.Vector3(185.35, -135.36);
      // 创建线条一：直线
      let line1 = new THREE.LineCurve3(p1,p2);
      // 重建线条2：三维样条曲线
      let curve = new THREE.CatmullRomCurve3([p2, p3, p4]);
      // 创建线条3：直线
      let line2 = new THREE.LineCurve3(p4,p5);
      let CurvePath = new THREE.CurvePath();// 创建CurvePath对象
      CurvePath.curves.push(line1, curve, line2);// 插入多段线条
      //通过多段曲线路径创建生成管道
      //通过多段曲线路径创建生成管道，CCurvePath：管道路径
      let geometry = new THREE.TubeGeometry(CurvePath, 100, 10, 25, false);
     let material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        specular:0x444444,//高光部分的颜色
        shininess:20,//高光部分的亮度，默认30
      });

      let mash = new THREE.Mesh(geometry, material);
      this.scene.add(mash); 
      
    },
    // 旋转造型
    draw2(){

      let shape = new THREE.Shape();
      let points = [
          new THREE.Vector2(50,60),
          new THREE.Vector2(25,0),
          new THREE.Vector2(50,-60)
      ];
      shape.splineThru(points);
      let splinePoints = shape.getPoints(20);
      let geometry = new THREE.LatheGeometry(splinePoints,30);
      let material=new THREE.MeshPhongMaterial({
          color:0x0000ff,//三角面颜色
          side:THREE.DoubleSide//两面可见
      });//材质对象
      material.wireframe = true;//线条模式渲染(查看细分数)
      let mesh=new THREE.Mesh(geometry,material);//旋转网格模型对象
      this.scene.add(mesh);//旋转网格模型添加到场景中
    },
    // Shape对象和轮廓填充
    draw3() {
    //  let points = [
    //     new THREE.Vector2(-50, -50),
    //     new THREE.Vector2(-60, 0),
    //     new THREE.Vector2(0, 50),
    //     new THREE.Vector2(60, 0),
    //     new THREE.Vector2(50, -50),
    //     new THREE.Vector2(-50, -50),
    //   ]
      // 通过顶点定义轮廓
      let shape = new THREE.Shape();
      shape.absarc(0,0,80,0,2*Math.PI);


      let shape2 =new THREE.Shape();//Shape对象
      //外轮廓
      shape.moveTo(200,0);//起点
      shape.lineTo(300,100);//第2点
      shape.lineTo(300,100);//第3点
      shape.lineTo(300,0);//第4点
      shape.lineTo(200,0);//第5点


      // shape可以理解为一个需要填充轮廓
      // 所谓填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
      let geometry = new THREE.ShapeGeometry([shape, shape2], 15);
      let material=new THREE.MeshPhongMaterial({
          color:0x0000ff,//三角面颜色
          side:THREE.DoubleSide//两面可见
      });//材质对象
      // material.wireframe = true;//线条模式渲染(查看细分数)
      let mesh=new THREE.Mesh(geometry,material);//旋转网格模型对象
      this.scene.add(mesh);//旋转网格模型添加到场景中
    },
    // 拉伸扫描成型
    draw4() {
      let shape = new THREE.Shape();
      /**四条直线绘制一个矩形轮廓*/
      shape.moveTo(0,0);//起点
      shape.lineTo(0,30);//第2点
      shape.lineTo(30,30);//第3点
      shape.lineTo(30,0);//第4点
      shape.lineTo(0,0);//第5点
      /**创建轮廓的扫描轨迹(3D样条曲线)*/
      let curve = new THREE.SplineCurve3([
        new THREE.Vector3( -10, -50, -50 ),
        new THREE.Vector3( 10, 0, 0 ),
        new THREE.Vector3( 8, 50, 50 ),
        new THREE.Vector3( -5, 0, 100)
      ]);
      let geometry = new THREE.ExtrudeGeometry(//拉伸造型
        shape,//二维轮廓
        //拉伸参数
        {
            bevelEnabled:false,//无倒角
            extrudePath:curve,//选择扫描轨迹
            steps:50//扫描方向细分数
        }
      );
      let material=new THREE.MeshPhongMaterial({
          color:0x0000ff,//三角面颜色
          side:THREE.DoubleSide//两面可见
      });//材质对象
      material.wireframe = true;
      // material.wireframe = true;//线条模式渲染(查看细分数)
      let mesh=new THREE.Mesh(geometry,material);//旋转网格模型对象
      this.scene.add(mesh);//旋转网格模型添加到场景中
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