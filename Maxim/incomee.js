 var chaaa = echarts.init(document.getElementById('chaa'));
 var data1 = [
     [80.5, "脑癌", 5],

     [84.8, "白血病", 20],
     [95.1, "肝癌", 85],
     [91.1, "肺癌", 88],
     [79, "骨髓瘤", 2],
     [94, "食道癌", 47],
     [62.1, "卵巢癌", 12],
     [81.6, "胃癌", 72],
 ];
 var data2 = [
     [75.3, "脑癌", 113],

     [78, "白血病", 262],
     [93.7, "肝癌", 1566],
     [87.5, "肺癌", 1264],
     [80.9, "骨髓瘤", 25],
     [81.3, "食道癌", 788],
     [61, "卵巢癌", 80],
     [80.1, "胃癌", 1762],
 ];
 var data3 = [
     [80.5, "脑癌", 183],

     [76.5, "白血病", 414],
     [92.9, "肝癌", 279],
     [91.8, "肺癌", 1468],
     [76, "骨髓瘤", 77],
     [93.4, "食道癌", 242],
     [54.5, "卵巢癌", 187],
     [81.2, "胃癌", 1249],
 ]
 var data4 = [
     [65.5, "脑癌", 4171],

     [58.8, "白血病", 13175],
     [91.2, "肝癌", 8349],
     [83.3, "肺癌", 50074],
     [65.7, "骨髓瘤", 4100],
     [84.8, "食道癌", 5181],
     [54.8, "卵巢癌", 4650],
     [58.3, "胃癌", 16503],
 ]
 var schema = [{
     name: 'fatality',
     index: 0,
     text: '致死率'
 }, {
     name: 'cancer',
     index: 1,
     text: '癌症'
 }, {
     name: "cost",
     index: 2,
     text: '支出'
 }];


 var itemStyle = {
     normal: {
         opacity: 0.8,
         shadowBlur: 10,
         shadowOffsetX: 0,
         shadowOffsetY: 0,
         shadowColor: 'rgba(0, 0, 0, 0.1)'
     }
 };

 option10 = {
     backgroundColor: '',
     color: [
         '#0d47a1', '#5cb85c', '#5bc0de', '#b71c1c',
     ],
     legend: {
         data: ["低收入", "中低收入", "中高收入", "高收入"],
         textStyle: {
             color: '#000',
             fontSize: 10
         },
         bottom: 0
     },
     grid: {
         x: '18%',
         x2: '18%',
         y: '10%',
         y2: '10%',
     },
     tooltip: {
         padding: 10,
         backgroundColor: '#222',
         borderColor: '#777',
         borderWidth: 0,
         formatter: function(obj) {
             var value = obj.value;
             return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                 obj.seriesName + '国家' + '<br>' +
                 '</div>' +
                 schema[1].text + '：' + value[1] + '<br>' +
                 schema[0].text + '：' + value[0] + '<br>' +
                 schema[2].text + '：' + value[2] + '<br>'

         }
     },
     yAxis: {
         type: 'category',
         name: '癌症类型',
         data: ["骨髓瘤", "白血病", "胃癌", "食道癌", "卵巢癌", "肺癌", "肝癌", "脑癌"],
         nameGap: 20,
         nameTextStyle: {
             color: '#000',
             fontSize: 14
         },
         // max: 31,
         splitLine: {
             lineStyle: {
                 type: "dashed"
             },
             show: true,
             linecolor: "#eceff1",

         },
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         min: 0,
         max: 7,
         // boundaryGap: true,
         axisTick: {
             show: true,
             alignWithLabel: false,
             interval: 0
         },
         axisLabel: {
             show: true,
             interval: 0,
             textStyle: {
                 fontSize: 10
             },
             rotate: 0
         }
     },
     xAxis: {
         type: 'value',
         name: "死亡率",
         nameLocation: 'end',
         nameGap: 20,
         nameTextStyle: {
             color: '#000',
             fontSize: 14
         },
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         splitLine: {
             show: true,
             lineColor: "#eceff1",
             lineStyle: {
                 type: "dashed",
                 color: ["#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#b71c1c", "#eceff1", "#eceff1", "#eceff1", "#eceff1"]
             },
         },
         splitNumber: 8
     },
     visualMap: [{
         left: 'right',
         top: '2%',
         dimension: 2,
         min: 2,
         max: 10000,
         itemWidth: 20,
         itemHeight: 100,
         calculable: true,
         precision: 0.1,
         text: ['圆形大小:支出'],
         textGap: 30,
         textStyle: {
             color: '#000'
         },
         inRange: {
             symbolSize: [12, 40]
         },
         outOfRange: {
             symbolSize: [12, 40],
             color: ['rgba(255,255,255,.2)']
         },
         controller: {
             inRange: {
                 color: ['#0d47a1']
             },
             outOfRange: {
                 color: ['#444']
             }
         }
         // }, {
         //     left: 'right',
         //     bottom: '5%',
         //     dimension: 2,
         //     min: 0,
         //     max: 50,
         //     itemHeight: 120,
         //     calculable: true,
         //     precision: 0.1,
         //     textGap: 30,
         //     textStyle: {
         //         color: '#fff'
         //     },
         //     inRange: {
         //         colorLightness: [1, 0.5]
         //     },
         //     outOfRange: {
         //         color: ['rgba(255,255,255,.2)']
         //     },
         //     controller: {
         //         inRange: {
         //             color: ['#c23531']
         //         },
         //         outOfRange: {
         //             color: ['#444']
         //         }
         //     }
     }],
     series: [{
         name: '低收入',
         type: 'scatter',
         itemStyle: itemStyle,
         data: data1
     }, {
         name: '中低收入',
         type: 'scatter',
         itemStyle: itemStyle,
         data: data2
     }, {
         name: '中高收入',
         type: 'scatter',
         itemStyle: itemStyle,
         data: data3
     }, {
         name: '高收入',
         type: 'scatter',
         itemStyle: itemStyle,
         data: data4

     }]
 }
 chaaa.setOption(option10)