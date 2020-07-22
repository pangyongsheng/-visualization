<!--
 * @Author       : your name
 * @Date         : 2020-04-21 18:27:26
 * @LastEditTime : 2020-07-22 17:11:05
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\echart\e5.vue
--> 
<template>
  <ve-ring :data="chartData"></ve-ring>
</template>

<script>
import veRing from 'v-charts/lib/ring.common'
  export default {
    components: {veRing },
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