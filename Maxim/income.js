 var myCha = echarts.init(document.getElementById('ma'));
 var data1 = [
     [74.4, "膀胱癌", 8],
     [80.5, "脑癌", 5],
     [56.3, "乳腺癌", 37],
     [68.4, "子宫颈癌", 49],
     [70.5, "结直肠癌", 23],
     [53.1, "淋巴瘤", 4],
     [62.7, "肾癌", 4],
     [64.4, "喉癌", 15],
     [84.8, "白血病", 20],
     [95.1, "肝癌", 85],
     [91.1, "肺癌", 88],
     [79, "骨髓瘤", 2],
     [67.5, "鼻咽癌", 12],
     [94, "食道癌", 47],
     [55.4, "口腔癌", 23],
     [76.1, "舌咽癌", 16],
     [62.1, "卵巢癌", 12],
     [78.6, "前列腺癌", 6],
     [81.6, "胃癌", 72],
     [42.4, "甲状腺癌", 9]
 ];
 var data2 = [
     [60.6, "膀胱癌", 100],
     [75.3, "脑癌", 113],
     [44, "乳腺癌", 374],
     [58.6, "子宫颈癌", 245],
     [62.4, "结直肠癌", 398],
     [44.8, "淋巴瘤", 24],
     [55.5, "肾癌", 58],
     [65.9, "喉癌", 52],
     [78, "白血病", 262],
     [93.7, "肝癌", 1566],
     [87.5, "肺癌", 1264],
     [80.9, "骨髓瘤", 25],
     [65.3, "鼻咽癌", 95],
     [81.3, "食道癌", 788],
     [54.3, "口腔癌", 108],
     [74.1, "舌咽癌", 48],
     [61, "卵巢癌", 80],
     [66, "前列腺癌", 37],
     [80.1, "胃癌", 1762],
     [33.6, "甲状腺癌", 108]
 ];
 var data3 = [
     [45.9, "膀胱癌", 194],
     [80.5, "脑癌", 183],
     [38.7, "乳腺癌", 754],
     [48.2, "子宫颈癌", 436],
     [60.4, "结直肠癌", 705],
     [42.1, "淋巴瘤", 67],
     [54, "肾癌", 192],
     [65.2, "喉癌", 143],
     [76.5, "白血病", 414],
     [92.9, "肝癌", 279],
     [91.8, "肺癌", 1468],
     [76, "骨髓瘤", 77],
     [63.3, "鼻咽癌", 30],
     [93.4, "食道癌", 242],
     [48.9, "口腔癌", 144],
     [68.3, "舌咽癌", 84],
     [54.5, "卵巢癌", 187],
     [46.7, "前列腺癌", 321],
     [81.2, "胃癌", 1249],
     [23.6, "甲状腺癌", 164]
 ]
 var data4 = [
     [26.7, "膀胱癌", 8081],
     [65.5, "脑癌", 4171],
     [23.9, "乳腺癌", 27263],
     [32.6, "子宫颈癌", 2249],
     [41.4, "结直肠癌", 32264],
     [17.6, "淋巴瘤", 1432],
     [39.2, "肾癌", 5465],
     [37.6, "喉癌", 2241],
     [58.8, "白血病", 13175],
     [91.2, "肝癌", 8349],
     [83.3, "肺癌", 50074],
     [65.7, "骨髓瘤", 4100],
     [45.9, "鼻咽癌", 372],
     [84.8, "食道癌", 5181],
     [27.5, "口腔癌", 3929],
     [42.4, "舌咽癌", 2573],
     [54.8, "卵巢癌", 4650],
     [22.5, "前列腺癌", 23647],
     [58.3, "胃癌", 16503],
     [10.1, "甲状腺癌", 3392]
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
         opacity: 0.6,
         shadowBlur: 10,
         shadowOffsetX: 0,
         shadowOffsetY: 0,
         shadowColor: 'rgba(0, 0, 0, 0.2)'
     }
 };

 option5 = {
     backgroundColor: '',
     color: [
         '#cf0000', '#90caf9', '#0288d1', "#0d47a1",
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
         x2: '20%',
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
         data: ["膀胱癌", "脑癌", "乳腺癌", "子宫颈癌", "结直肠癌", "淋巴瘤", "肾癌", "喉癌", "白血病", "肝癌", "肺癌", "骨髓瘤", "鼻咽癌", "食道癌", "口腔癌", "舌咽癌", "卵巢癌", "前列腺癌", "胃癌", "甲状腺癌"],
         nameGap: 16,
         nameTextStyle: {
             color: '#000',
             fontSize: 16
         },
         // max: 31,
         splitLine: {
             show: false
         },
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         min: 0,
         max: 19,
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
         name: "致死率",
         nameLocation: 'end',
         nameGap: 20,
         nameTextStyle: {
             color: '#000',
             fontSize: 16
         },
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         splitLine: {
             show: true,
             lineColor: "#eceff1",
         },
         splitNumber: 8
     },
     visualMap: [{
         left: 'right',
         top: '2%',
         dimension: 2,
         min: 0,
         max: 1000,
         itemWidth: 20,
         itemHeight: 120,
         calculable: true,
         precision: 0.1,
         text: ['圆形大小:支出'],
         textGap: 30,
         textStyle: {
             color: '#000'
         },
         inRange: {
             symbolSize: [10, 40]
         },
         outOfRange: {
             symbolSize: [10, 40],
             //  color: ['rgba(255,255,255,.2)']
         },
         controller: {
             inRange: {
                 color: ['#0288d1']
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