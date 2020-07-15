/*
 * @Author       : your name
 * @Date         : 2020-07-15 16:49:59
 * @LastEditTime : 2020-07-15 16:50:20
 * @LastEditors  : your name
 * @Description  : In User Settings Edit
 * @FilePath     : \vd\src\views\d3\tree.js
 */ 
export default{
    "name":"中国",
    "children":
    [
      {
        "name":"浙江" ,
        "children":
        [
          {"name":"杭州" },
          {"name":"宁波" },
          {"name":"温州" },
          {"name":"绍兴" }
        ]
      },
  
      {
        "name":"广西" ,
        "children":
        [
          {
            "name":"桂林",
            "children":
            [
              {"name":"秀峰区"},
              {"name":"叠彩区"},
              {"name":"象山区"},
              {"name":"七星区"}
            ]
          },
          {"name":"南宁"},
          {"name":"柳州"},
          {"name":"防城港"}
        ]
      },
  
      {
        "name":"黑龙江",
        "children":
        [
          {"name":"哈尔滨"},
          {"name":"齐齐哈尔"},
          {"name":"牡丹江"},
          {"name":"大庆"}
        ]
      },
  
      {
        "name":"新疆" ,
        "children":
        [
          {"name":"乌鲁木齐"},
          {"name":"克拉玛依"},
          {"name":"吐鲁番"},
          {"name":"哈密"}
        ]
      }
    ]
  }