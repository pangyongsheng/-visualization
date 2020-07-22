<!--
 * @Author       : your name
 * @Date         : 2020-04-21 18:27:19
 * @LastEditTime : 2020-07-22 17:10:06
 * @LastEditors  : your name
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\echart\e4.vue
--> 
<template>
  <ve-pie :data="chartData"></ve-pie>
</template>

<script>
import vePie from 'v-charts/lib/pie.common'
  export default {
    components: { vePie },
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    }
  }
</script>