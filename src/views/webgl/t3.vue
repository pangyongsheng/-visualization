<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-08-05 17:43:29
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
      var width = 500; //窗口宽度
      var height = 500; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(200, 300, 200); //设置相机位置
      this.camera.lookAt(new THREE.Vector3(0, 0, 0)); //设置相机方向(指向的场景对象)
      this.scene.add(this.camera);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);//创建控件对象

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
    draw() {
      //创建一个Buffer类型几何体对象
      let geometry = new THREE.BufferGeometry();
      //类型数组创建顶点数据
      const vertices = new Float32Array([
        0,0,0, //顶点1坐标
        50,0,0, //顶点2坐标
        0,100,0, //顶点3坐标
        0,0,10, //顶点4坐标
        0,0,100, //顶点5坐标
        50,0,10, //顶点6坐标
      ]);
      // 创建属性缓冲区对象
      let attribue = new THREE.BufferAttribute(vertices, 3);
      // 设置几何体attributes属性的位置属性
      geometry.attributes.position = attribue;

      // 顶点颜色的插值计算
      var colors = new Float32Array([
        1, 0, 0, //顶点1颜色
        0, 1, 0, //顶点2颜色
        0, 0, 1, //顶点3颜色

        1, 1, 0, //顶点4颜色
        0, 1, 1, //顶点5颜色
        1, 0, 1, //顶点6颜色
      ]);
      geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB

      // 顶点法向量
      let normals = new Float32Array([
        0, 0, 1, //顶点1法向量
        0, 0, 1, //顶点2法向量
        0, 0, 1, //顶点3法向量

        0, 1, 0, //顶点4法向量
        0, 1, 0, //顶点5法向量
        0, 1, 0, //顶点6法向量
      ]);
      // 设置几何体attributes属性的位置normal属性
      geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); 

      // 三角面(网格)渲染模式
      let material = new THREE.MeshBasicMaterial({
        color: 0x0000ff, //三角面颜色
        side: 10.0, //两面可见
      }); //材质对象
      let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      this.scene.add(mesh);

      // 点模型
      let material2 = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 10.0 //点对象像素尺寸
      }); //材质对象
      let points = new THREE.Points(geometry, material2); //点模型对象
      this.scene.add(points); //点对象添加到场景中

      // 线模型
      let material3 = new THREE.LineBasicMaterial({
          color:0x00fff00 //线条颜色
      });//材质对象
      let line=new THREE.Line(geometry,material3);//线条模型对象
      this.scene.add(line);//线条对象添加到场景中

    },

    draw2(){
      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
			let p1 = new THREE.Vector3(150, 0, 0); //顶点1坐标
			let p2 = new THREE.Vector3(100, 70, 0); //顶点2坐标
			let p3 = new THREE.Vector3(180, 70, 0); //顶点3坐标
			//顶点坐标添加到geometry对象
			geometry.vertices.push(p1, p2, p3);
			
			// Color对象表示顶点颜色数据
			let color1 = new THREE.Color(0x00ff00); //顶点1颜色——绿色
			let color2 = new THREE.Color(0xff0000); //顶点2颜色——红色
			let color3 = new THREE.Color(0x0000ff); //顶点3颜色——蓝色
			//顶点颜色数据添加到geometry对象
			geometry.colors.push(color1, color2, color3);
			
			//材质对象
			let material0 = new THREE.MeshLambertMaterial({
        // color: 0xffff00,
        vertexColors: THREE.VertexColors, //以顶点颜色为准
        side: THREE.DoubleSide, //两面可见
			});
			
			
 
			// // 点渲染模式
			let material = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 10.0 //点对象像素尺寸
      }); //材质对象
      
      var points = new THREE.Points(geometry, material); //点模型对象
      let mesh = new THREE.Mesh(geometry, material0)
			this.scene.add(points); //点对象添加到场景中
			this.scene.add(mesh)

    },

    draw3() {
      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry

      let p1 = new THREE.Vector3(100, 100, 0); //顶点1坐标
      let p2 = new THREE.Vector3(100, 200, 0); //顶点2坐标
      let p3 = new THREE.Vector3(150, 100, 0); //顶点3坐标
      let p4 = new THREE.Vector3(100, 100, 100); //顶点4坐标
      //顶点坐标添加到geometry对象
      geometry.vertices.push(p1, p2, p3, p4);

      // Face3构造函数创建一个三角面
      let face1 = new THREE.Face3(0, 1, 2);
      //三角面每个顶点的法向量
      let n1 = new THREE.Vector3(0, 0, -1); //三角面Face1顶点1的法向量
      let n2 = new THREE.Vector3(0, 0, -1); //三角面2Face2顶点2的法向量
      let n3 = new THREE.Vector3(0, 0, -1); //三角面3Face3顶点3的法向量
      // 设置三角面Face3三个顶点的法向量
      face1.vertexNormals.push(n1,n2,n3);

      // 三角面2
      let face2 = new THREE.Face3(0, 2, 3);
      // 设置三角面法向量
      face2.normal=new THREE.Vector3(0, -1, 0);

      geometry.faces.push(face1,face2);

      // // 点渲染模式
			let material = new THREE.PointsMaterial({
        color: 0xff00ff,
        side: THREE.DoubleSide, //两面可见
      }); //材质对象
      
      var points = new THREE.Points(geometry, material); //点模型对象
      let mesh = new THREE.Mesh(geometry, material)
			this.scene.add(points); //点对象添加到场景中
			this.scene.add(mesh)

    },

    draw4() {
      let geometry = new THREE.BoxGeometry(80, 80, 80); //创建一个立方体几何对象Geometry
      // 遍历几何体的face属性
      geometry.faces.forEach(face => {
        // 设置三角面face三个顶点的颜色
        face.vertexColors = [
          new THREE.Color(0xffff00),
          new THREE.Color(0xff00ff),
          new THREE.Color(0x00ffff),
        ]
      });

      let material = new THREE.MeshBasicMaterial({
        // color: 0x0000ff,
        vertexColors: THREE.FaceColors,
        // wireframe:true,//线框模式渲染
      }); //材质对象Material

      geometry.translate(0, -140, 0);

      let mesh = new THREE.Mesh(geometry, material)
      this.scene.add(mesh)

    },
  },
};
</script>
<style lang='scss' scoped>
</style>