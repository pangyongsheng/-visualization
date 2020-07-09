<!--
 * @Author       : your name
 * @Date         : 2020-07-03 18:30:01
 * @LastEditTime : 2020-07-09 18:49:50
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\webgl\t1.vue
--> 
<template>
  <div id="t1">
    <canvas width="500" height="500" ref="thr"></canvas>
    <button @click="stop"></button>
  </div>
</template>

<script>
import * as THREE from "three";
export default {
  name: "earth",
  props: [""],
  data() {
    return {
      radius: 300,
      clock: null,
      start: [0, 40],
      destination: [
        [0, 0],
        [0, 180],
        [0, 90][(0, 0)],
        [45, 0],
        [90, 0],
        [180, 0],
        [-90, 0],
        [-100, 0]
      ],
      posTracks: []
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    stop() {
      window.cancelAnimationFrame(this.Anima);
    },
    init() {
      const _this = this;
      // 渲染器
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.thr
      });
      this.renderer.setClearColor(0xffffff);

      // 场景
      this.scene = new THREE.Scene();

      // 相机
      this.camera = new THREE.PerspectiveCamera(45, 500 / 500, 1, 1500);
      this.camera.position.set(100, 100, 1000);
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.scene.add(this.camera);

      // 添加光照
      this.light();

      // 创建编组
      this.group = new THREE.Group();
      this.groupBall = new THREE.Group();

      //声明一个时钟对象
      this.clock = new THREE.Clock();

      this.x = new THREE.Vector3(1, 0, 0);
      this.y = new THREE.Vector3(0, 1, 0);
      this.z = new THREE.Vector3(0, 0, 1);

      this.drawEarth();

      let axisHelper = new THREE.AxesHelper(250);
      this.scene.add(axisHelper);

      this.drawPoint(
        this.getPosition(this.start[0], this.start[1], this.radius + 3)
      );

      this.destination.forEach((ele, index) => {
        let pos = this.getPosition(ele[0], ele[1], this.radius + 3);
        this.drawPoint(pos);
        this.drawLine(this.start[0], this.start[1], ele[0], ele[1], index);
      });
    },
    // 光照
    light() {
      let light = new THREE.HemisphereLight(0xffffff);
      light.position.set(0, 0, 200);
      this.scene.add(light);
    },
    // 绘制地球
    drawEarth() {
      const _this = this;
      const geometry = new THREE.SphereGeometry(this.radius, 100, 100); // 球体
      const textureLoader = new THREE.TextureLoader(); // 纹理贴图
      const texture = textureLoader.load(
        require("@/assets/map.jpg"),
        texture => {
          const material = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true,
            opacity: 1
          });
          let mesh = new THREE.Mesh(geometry, material);
          _this.group.add(mesh);
          this.animate();
        }
      );
    },
    // 绘制球面曲线
    drawLine(longitude, latitude, longitude2, latitude2, index) {
      let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry

      let v0 = this.getPosition(longitude, latitude, this.radius);
      let v3 = this.getPosition(longitude2, latitude2, this.radius);

      let { v1, v2 } = this.getBezierPoint(v0, v3);

      // console.log(v0, v1, v2, v3);
      // 三维二次贝赛尔曲线
      let curve = new THREE.CubicBezierCurve3(v0, v1, v2, v3);

      let curvePoints = curve.getPoints(100);

      geometry.setFromPoints(curvePoints);

      let material = new THREE.LineBasicMaterial({
        color: 0x00ced1
      });

      let line = new THREE.Line(geometry, material);

      this.group.add(line);

      this.sport(curvePoints, index);
    },
    // 绘制运动的点
    drawSportPoint(position, name) {
      let box = new THREE.SphereGeometry(6, 6, 6);
      let material = new THREE.MeshLambertMaterial({
        color: 0x00bfff
      });
      //材质对象
      let mesh = new THREE.Mesh(box, material);

      mesh.name = name;
      mesh.position.set(position.x, position.y, position.z);
      this.groupBall.add(mesh);
      this.group.add(this.groupBall);
      return mesh;
    },
    // 绘制运动点的路径
    sport(curvePoints, index) {
      const Ball = this.drawSportPoint(curvePoints[0], `Ball${index}`);
      let arr = Array.from(Array(101), (v, k) => k);
      // 生成一个时间序列
      let times = new Float32Array(arr);

      let posArr = [];
      curvePoints.forEach(elem => {
        posArr.push(elem.x, elem.y, elem.z);
      });
      // 创建一个和时间序列相对应的位置坐标系列
      let values = new Float32Array(posArr);
      // 创建一个帧动画的关键帧数据，曲线上的位置序列对应一个时间序列
      let posTrack = new THREE.KeyframeTrack(
        `Ball${index}.position`,
        times,
        values
      );
      this.posTracks.push(posTrack);
      if (index == this.destination.length - 1) {
        this.inputAnimate();
      }
    },
    // 插入帧动画
    inputAnimate() {
      let duration = 101;
      let clip = new THREE.AnimationClip("default", duration, this.posTracks);
      this.mixer = new THREE.AnimationMixer(this.groupBall);
      let AnimationAction = this.mixer.clipAction(clip);
      AnimationAction.timeScale = 30;
      AnimationAction.play();
    },
    // 获取贝塞尔控制点
    getBezierPoint(v0, v3) {
      // 计算向量夹角
      let angle = (v0.angleTo(v3) * 180) / Math.PI; // 0 ~ Math.PI

      let aLen = angle * 2.5,
        hLen = angle * angle * 50;

      let p0 = new THREE.Vector3(0, 0, 0);
      // 法线向量
      let rayLine = new THREE.Ray(p0, this.getVCenter(v0.clone(), v3.clone()));
      // 顶点坐标
      let vtop = rayLine.at(hLen / rayLine.at(1).distanceTo(p0), vtop); // 几倍位置
      // 控制点坐标
      let v1 = this.getLenVcetor(v0.clone(), vtop, aLen);
      let v2 = this.getLenVcetor(v3.clone(), vtop, aLen);

      return {
        v1: v1,
        v2: v2
      };
    },
    //  求的中点
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
    getPosition(longitude, latitude, radius = this.radius) {
      // 经度，纬度转换为坐标
      let lg = THREE.Math.degToRad(longitude);
      let lt = THREE.Math.degToRad(latitude);
      // 获取x，y，z坐标
      let temp = radius * Math.cos(lt);
      let x = temp * Math.sin(lg);
      let y = radius * Math.sin(lt);
      let z = temp * Math.cos(lg);
      return new THREE.Vector3(x, y, z);
    },
    // 绘制球面上的点
    drawPoint(pos) {
      let groupPoint = new THREE.Group();
      //console.log(pos)
      const r = 10;
      let geometryLine = new THREE.Geometry();
      let arc = new THREE.ArcCurve(0, 0, r, 0, 2 * Math.PI);
      let points = arc.getPoints(40);

      let spherical = new THREE.Spherical();
      spherical.setFromCartesianCoords(pos.x, pos.y, pos.z);
      console.log(spherical.theta / Math.PI);

      geometryLine.setFromPoints(points);
      let LineMateri = new THREE.LineBasicMaterial({ color: 0x20b2aa });
      let line = new THREE.Line(geometryLine, LineMateri);

      let shapePoint = new THREE.Shape();
      shapePoint.absarc(0, 0, r - 4, 0, 2 * Math.PI, false);
      let arcGeometry = new THREE.ShapeGeometry(shapePoint);
      let arcMaterial = new THREE.MeshBasicMaterial({ color: 0x008080 });
      let point = new THREE.Mesh(arcGeometry, arcMaterial);

      //   let color1 = new THREE.Color(0x444444),
      //     color2 = new THREE.Color(0xff0000);
      //   let geometry = new THREE.Geometry();
      //   let material = new THREE.LineBasicMaterial({
      //     // 使用顶点颜色
      //     vertexColors: true
      //   });
      //   let p0 = new THREE.Vector3(0, 0, 0);
      //   geometry.vertices.push(p0);
      //   geometry.vertices.push(pos);
      //   geometry.colors.push(color1, color2);
      //   let line2 = new THREE.Line(geometry, material, THREE.LineSegments);
      //   this.group.add(line2);

      groupPoint.add(line);
      groupPoint.add(point);

      groupPoint.rotateX(spherical.phi - Math.PI / 2);
      groupPoint.rotateY(spherical.theta);
      groupPoint.position.set(pos.x, pos.y, pos.z);

      this.group.add(groupPoint);
    },
    // 渲染
    render() {
      this.scene.add(this.group);
      this.renderer.render(this.scene, this.camera);
    },
    // 动画
    animate() {
      this.render();
      this.Anima = requestAnimationFrame(this.animate);
      let time = this.clock.getDelta();
      this.group.rotateY((time * Math.PI) / 8);
      // console.log(time)
      this.mixer.update(time);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>