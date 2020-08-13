<!--
 * @Author       : your name
 * @Date         : 2020-04-20 17:53:45
 * @LastEditTime : 2020-08-13 11:34:21
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\page\navList.vue
--> 
<template>
  <div style="height:100%">
    
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(81, 86, 90)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- d3 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">D3图表</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">基本统计图</template> -->
              <el-menu-item v-for="(item, key) in d3List" :key="key">
                <router-link :to="{path: '/d3/'+ item.path}" tag="li">{{item.name}}</router-link>
              </el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- webgl -->
					<el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">webGL</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">基本统计图</template> -->
              <el-menu-item v-for="(item, key) in wList" :key="key">
                <router-link :to="{path: '/webgl/'+ item.path}" tag="li">{{item.name}}</router-link>
              </el-menu-item>
              <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- echart -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>其他</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(item, key) in echartList" :key="key">
                <router-link :to="{path: '/echart/'+ item.path}" tag="li">{{item.name}}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(item, key) in aList" :key="key">
                <router-link :to="{path: '/al/'+ item.path}" tag="li">{{item.name}}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

  </div>
</template>

<script>
import dList from "@/config/d3.js";
import wList from "@/config/webgl.js";
import eList from "@/config/echart.js";
import aList from "@/config/algorithm.js";
export default {
  name: "",
  props: [""],
  data() {
    return {
			d3List: dList,
			wList: wList,
      echartList: eList,
      aList: aList
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  watch: {}
};
</script>
<style lang='scss' scoped>
.el-menu-vertical-demo {
  text-align: left;
  height: 100%;
}
</style>