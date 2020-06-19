<!--
 * @Author       : your name
 * @Date         : 2020-04-20 17:53:45
 * @LastEditTime : 2020-06-18 15:57:05
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\page\navList.vue
--> 
<template>
    <div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>echart图表</span>
                        </template>
                        <el-menu-item-group>
                            <!-- <template slot="title">基本统计图</template> -->
                            <el-menu-item v-for="(item, key) in echartList" :key="key" >
                                 <router-link :to="{path: '/echart/'+ item.path}" tag="li">{{item.name}}</router-link>
                            </el-menu-item>
                            <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">D3图表</span>
                        </template>
                        <el-menu-item-group>
                            <!-- <template slot="title">基本统计图</template> -->
                            <el-menu-item v-for="(item, key) in d3List" :key="key" >
                                 <router-link :to="{path: '/d3/'+ item.path}" tag="li">{{item.name}}</router-link>
                            </el-menu-item>
                            <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="4">
                        <i class="el-icon-menu"></i>
                        <span slot="title">G2图表</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "",
    props: [""],
    data() {
        return {
            echartList:[
                {name:'折线图', path: 'e1'},
                {name:'柱状图', path: 'e2'},
                {name:'条形图', path: 'e3'},
                {name:'饼图', path: 'e4'},
                {name:'环图', path: 'e5'},
            ],
            d3List:[
                {name:'d1', path: 'd1'},
                {name:'d2', path: 'd2'},
                {name:'d3', path: 'd3'},
                {name:'d4', path: 'd4'},
                {name:'d5', path: 'd5'},
                {name:'d6', path: 'd6'},
                {name:'d7', path: 'd7'},
                {name:'d8', path: 'd8'},
                {name:'d9', path: 'd9'},
            ],
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
.el-menu-vertical-demo{
    height: 100vh;
    text-align: left;
}
</style>