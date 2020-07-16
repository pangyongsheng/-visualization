/*
 * @Author       : your name
 * @Date         : 2020-07-15 16:49:59
 * @LastEditTime : 2020-07-16 11:01:40
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\tree.js
 */ 
export default{
  name: "垃圾分类",
  children: [
    {
      name: "可回收垃圾",
      children: [
        {
          name: "废纸",
          children:[
            {name:"报纸"},
            {name:"期刊"}
          ]
        },
        {
          name: "金属"
        },
        {
          name: "布料"
        },
        {
          name: "塑料"
        }
      ]
    },
    {
      name: "厨余垃圾",
      children: [
        {
          name: "剩菜剩饭"
        },
        {
          name: "骨头"
        },
        {
          name: "果皮"
        },
        {
          name: "菜根菜叶"
        }
      ]
    },
    {
      name: "其他垃圾",
      children: [
        {
          name: "纸巾"
        },
        {
          name: "尘土"
        },
        {
          name: "残叶"
        }
      ]
    },
    {
      name: "有害垃圾",
      children: [
        {
          name: "过期药物"
        },
        {
          name: "化妆品"
        },
        {
          name: "废弃灯泡"
        },
        {
          name: "蓄电池"
        }
      ]
    }
  ]
}
