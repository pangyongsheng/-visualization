<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
export default {
    data () {
		this.chartSettings = {
			axisSite: { right: ['下单率'] },
			yAxisType: ['KMB', 'percent'],
			yAxisName: ['数值', '比率']
		}
		return {
			chartData: {
				columns: ['a', '月', '访问用户', '下单用户', '下单率'],
				rows: [
					{ 'a':'1','月': 100, '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
					{ 'a':'3','月': 200, '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
					{ 'a':'5','月': 300, '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
					{ 'a':'7','月': 400, '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
					{ 'a':'9','月': 500, '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
					{ 'a':'11','月':600, '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
				]
			}
		}
    }
  }
</script>