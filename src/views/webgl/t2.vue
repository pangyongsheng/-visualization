<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-07-08 16:20:47
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <canvas id="t1" width="500" height="400" ref="thr"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  name: "earth",
  props: [""],
  data() {
    return {
      lastTime: 0,
      radius: 30,
    };
  },

  mounted() {
    this.init();
    //this.renderer.render(this.scene, this.camera);
  },

  methods: {
    init() {
      // 渲染器
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.thr
      });
      this.renderer.setClearColor(0xffffff);

      // 场景
      this.scene = new THREE.Scene();

      // 相机
      this.camera = new THREE.PerspectiveCamera(45, 500 / 400, 1, 500);
      this.camera.position.set(0, 0, 100);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      // 将相机添加到场景中
      this.scene.add(this.camera);

      this.group = new THREE.Group();

      let axisHelper = new THREE.AxisHelper(250);
      this.scene.add(axisHelper);

      this.light();

      this.draw();

      // this.drawLine(0.4, 0.7, 0.6, 0.9);
      // this.drawLine(0.4, 0.7, 0.5, 0.7);
      // this.drawLine(0.4, 0.7, 0.4, 1);
      // this.drawLine(0.4, 0.7, 0.1, 0.8);

      //   this.drawLine(116.4551,40.1439, 37.35,55.45);
      //  this.drawLine(116.4551,40.1439,-47.56,-15.47);
      //  this.drawLine(116.4551,40.1439,0.5, 51.3);


      this.drawPoint();
    },
    // 光照
    light() {
      let light = new THREE.HemisphereLight(0xffffff);
      light.position.set(0, 0, 200);
      this.scene.add(light);
    },
    draw() {
      const _this = this;
      // 球体
      let geometry = new THREE.SphereGeometry(30, 100, 100);
      // 纹理贴图
      let textureLoader = new THREE.TextureLoader();
      let texture = textureLoader.load(require("@/assets/map.jpg"), texture => {
        let material = new THREE.MeshLambertMaterial({
          map: texture,
          overdraw: 0.5,
          transparent: true,
          // 设置材质透明度
          opacity: 0.7
        });
        let mesh = new THREE.Mesh(geometry, material);
        _this.group.add(mesh);
        this.animate();
      });
    },
    // 绘制球面曲线
    drawLine(longitude, latitude, longitude2, latitude2) {

      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry

      let v0 = this.getPosition(longitude, latitude, 30)
      let v3 = this.getPosition(longitude2, latitude2 , 30)

      let {v1 , v2} = this.getBezierPoint(v0, v3)
      // let p1 = this.getSpherePoint(30, Math.PI * a, Math.PI* b);
      // let p3 = this.getSpherePoint(30, Math.PI * c, Math.PI* d);
      // let p2 = this.getSpherePoint(45, Math.PI * ((a + c) / 2), Math.PI* ((b + d) /2));
      console.log(v0, v1, v2, v3)
      // 三维二次贝赛尔曲线
      let curve = new THREE.QuadraticBezierCurve3(v0, v1, v2, v3);

      geometry.setFromPoints(curve.getPoints(50));

      let material = new THREE.LineBasicMaterial({
        color: 0xff7e41
      });

      let line = new THREE.Line(geometry, material);

      this.group.add(line);
    },
    getBezierPoint(v0, v3) {
      // 计算向量夹角
      let earthBallSize = 20;
      let angle = (v0.angleTo(v3) * 180) / Math.PI; // 0 ~ Math.PI
      let aLen = angle * 0.5 * (1 - angle / (Math.PI * earthBallSize * parseInt(earthBallSize / 10))),
        hLen = angle * angle * 1.2 * (1 - angle / (Math.PI * earthBallSize * parseInt(earthBallSize / 10)));
      let p0 = new THREE.Vector3(0, 0, 0);
      // 法线向量
      let rayLine = new THREE.Ray(p0, this.getVCenter(v0.clone(), v3.clone()));
      // 顶点坐标
      let vtop = rayLine.at(hLen / rayLine.at(1).distanceTo(p0));
      // 控制点坐标
      let v1 = this.getLenVcetor(v0.clone(), vtop, aLen);
      let v2 = this.getLenVcetor(v3.clone(), vtop, aLen);

      return {
        v1: v1,
        v2: v2
      };
    },

    // 计算v1,v2 的中点
    getVCenter(v1, v2) {
      let v = v1.add(v2);
      return v.divideScalar(2);
    },

    // 计算V1，V2向量固定长度的点
    getLenVcetor(v1, v2, len) {
      let v1v2Len = v1.distanceTo(v2);
      return v1.lerp(v2, len / v1v2Len);
    },

    // 经纬度转化为坐标
    getPosition(longitude, latitude, radius) {
      // 将经度，纬度转换为rad坐标
      let lg = THREE.Math.degToRad(longitude);
      let lt = THREE.Math.degToRad(latitude);
      let temp = radius * Math.cos(lt);
      // 获取x，y，z坐标
      let x = temp * Math.sin(lg);
      let y = radius * Math.sin(lt);
      let z = temp * Math.cos(lg);

      return new THREE.Vector3(x, y, z);
    },
    // 绘制小球动画
    drawSportPoint(){
      
    },
    // 绘制沿轨迹运动小球
    drawPoint() {
      const r = 3
      let dotGeo = new THREE.SphereGeometry(r, 10, 10);
      let dotMater = new THREE.MeshPhongMaterial({
          color: '#0ff'
      });
      let dotMesh = new THREE.Mesh(dotGeo, dotMater);
      let pos = this.getSpherePoint(this.radius-r , Math.PI * 2 * Math.random(), Math.PI * 2 * Math.random());
      dotMesh.position.set(pos.x , pos.y, pos.z);
      this.group.add(dotMesh);
    },
    // 获取球面坐标
    getSpherePoint(r, a, b) {
      let x = r * Math.sin(a) * Math.cos(b);
      let y = r * Math.sin(a) * Math.sin(b);
      let z = r * Math.cos(a);
      return new THREE.Vector3(x, y, z);
    },

    render() {
      this.scene.add(this.group);
      this.renderer.render(this.scene, this.camera);
    },
    animate() {
      let time = new Date().getTime();
      let timeDiff = time - this.lastTime;
      this.lastTime = time;
      let angleChange = (0.02 * timeDiff * 2 * Math.PI) / 750;
      this.group.rotateY(angleChange);
      this.render();
      requestAnimationFrame(this.animate);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>