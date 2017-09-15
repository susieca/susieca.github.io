 var myCha = echarts.init(document.getElementById('ma'));
 var data1 = [
     ["甲状腺癌", 42.4, 9],
     ["淋巴瘤", 53.1, 4],
     [78.6, "前列腺癌", 6],
     [55.4, "口腔癌", 23],
     [70.5, "结直肠癌", 23],
     [62.7, "肾癌", 4],
     [68.4, "子宫颈癌", 49],
     [56.3, "乳腺癌", 37],
     [74.4, "膀胱癌", 8],
     [76.1, "舌咽癌", 16],
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
     [33.6, "甲状腺癌", 108],
     [44.8, "淋巴瘤", 24],
     [66, "前列腺癌", 37],
     [54.3, "口腔癌", 108],
     [62.4, "结直肠癌", 398],
     [55.5, "肾癌", 58],
     [58.6, "子宫颈癌", 245],
     [44, "乳腺癌", 374],
     [60.6, "膀胱癌", 100],
     [74.1, "舌咽癌", 48],
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
     [23.6, "甲状腺癌", 164],
     [42.1, "淋巴瘤", 67],
     [46.7, "前列腺癌", 321],
     [48.9, "口腔癌", 144],
     [60.4, "结直肠癌", 705],
     [54, "肾癌", 192],
     [48.2, "子宫颈癌", 436],
     [38.7, "乳腺癌", 754],
     [45.9, "膀胱癌", 194],
     [68.3, "舌咽癌", 84],
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
     [10.1, "甲状腺癌", 3392],
     [17.6, "淋巴瘤", 1432],
     [22.5, "前列腺癌", 23647],
     [27.5, "口腔癌", 3929],
     [41.4, "结直肠癌", 32264],
     [39.2, "肾癌", 5465],
     [32.6, "子宫颈癌", 2249],
     [23.9, "乳腺癌", 27263],
     [26.7, "膀胱癌", 8081],
     [42.4, "舌咽癌", 2573],
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
     text: '死亡率'
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
         shadowColor: 'rgba(0, 0, 0, 0.2)'
     }
 };

 option5 = {
     backgroundColor: '',
     color: ['#393836', '#44929f', '#0d47a1', '#C29400'],
     legend: {
         data: ["低收入", "中低收入", "中高收入", "高收入"],
         textStyle: {
             color: '#000',
             fontSize: 10
         },
         bottom: 0
     },
     grid: {
         x: '16%',
         x2: '16%',
         y: '8%',
         y2: '8%',
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
     xAxis: {
         type: 'category',
         name: '癌症类型',
         data: ["肝癌", "食道癌", "肺癌", "骨髓瘤", "脑癌", "白血病", "胃癌", "卵巢癌", "舌咽癌", "结直肠癌", "肾癌", "子宫颈癌", "口腔癌", "膀胱癌", "乳腺癌", "前列腺癌", "淋巴瘤", "甲状腺癌"],
         nameGap: 20,
         nameTextStyle: {
             color: '#000',
             fontSize: 14
         },
         // max: 31,
         splitLine: {
             show: true,
             linecolor: "#eceff1",
             lineStyle: {
                 type: "dashed",
                 color: ["#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#b71c1c", "#eceff1", "#eceff1", "#eceff1", "#eceff1"]
             },
         },
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         min: 0,
         max: 17,
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
     yAxis: {
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
                 color: ["#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#b71c1c", "#eceff1", "#eceff1", "#eceff1"]
             },
         },
         splitNumber: 10
     },
     visualMap: [{
         left: 'right',
         top: '2%',
         dimension: 2,
         min: 4,
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
 myCha.setOption(option5)