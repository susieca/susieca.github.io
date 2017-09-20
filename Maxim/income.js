 var myCha = echarts.init(document.getElementById('ma'));
 var data1 = [
     ["甲状腺癌", 42.4, 9],
     ["淋巴瘤", 53.1, 4],
     ["前列腺癌", 78.6, 6],
     ["口腔癌", 55.4, 23],
     ["结直肠癌", 70.5, 23],
     ["肾癌", 62.7, 4],
     ["子宫颈癌", 68.4, 49],
     ["乳腺癌", 56.3, 37],
     ["膀胱癌", 74.4, 8],
     ["舌咽癌", 76.1, , 16],
     ["脑癌", 80.5, 5],
     ["白血病", 84.8, 20],
     ["肝癌", 95.1, 85],
     ["肺癌", 91.1, 88],
     ["骨髓瘤", 79, 2],
     ["食道癌", 94, 47],
     ["卵巢癌", 62.1, 12],
     ["胃癌", 81.6, 72],
 ];
 var data2 = [
     ["甲状腺癌", 33.6, 108],
     ["淋巴瘤", 44.8, 24],
     ["前列腺癌", 66, 37],
     ["口腔癌", 54.3, 108],
     ["结直肠癌", 62.4, 398],
     ["肾癌", 55.5, 58],
     ["子宫颈癌", 58.6, 245],
     ["乳腺癌", 44, 374],
     ["膀胱癌", 60.6, 100],
     ["舌咽癌", 74.1, 48],
     ["脑癌", 75.3, 113],
     ["白血病", 78, 262],
     ["肝癌", 93.7, 1566],
     ["肺癌", 87.5, 1264],
     ["骨髓瘤", 80.9, 25],
     ["食道癌", 81.3, 788],
     ["卵巢癌", 61, 80],
     ["胃癌", 80.1, 1762],
 ];
 var data3 = [
     ["甲状腺癌", 23.6, 164],
     ["淋巴瘤", 42.1, 67],
     ["前列腺癌", 46.7, 321],
     ["口腔癌", 48.9, 144],
     ["结直肠癌", 60.4, 705],
     ["肾癌", 54, 192],
     ["子宫颈癌", 48.2, 436],
     ["乳腺癌", 38.7, 754],
     ["膀胱癌", 45.9, 194],
     ["舌咽癌", 68.3, 84],
     ["脑癌", 80.5, 183],
     ["白血病", 76.5, 414],
     ["肝癌", 92.9, 279],
     ["肺癌", 91.8, 1468],
     ["骨髓瘤", 76, 77],
     ["食道癌", 93.4, 242],
     ["卵巢癌", 54.5, 187],
     ["胃癌", 81.2, 1249],
 ]
 var data4 = [
     ["甲状腺癌", 10.1, 3392],
     ["淋巴瘤", 17.6, 1432],
     ["前列腺癌", 22.5, 23647],
     ["口腔癌", 27.5, 3929],
     ["结直肠癌", 41.4, 32264],
     ["肾癌", 39.2, 5465],
     ["子宫颈癌", 32.6, 2249],
     ["乳腺癌", 23.9, 27263],
     ["膀胱癌", 26.7, 8081],
     ["舌咽癌", 42.4, 2573],
     ["脑癌", 65.5, 4171],
     ["白血病", 58.8, 13175],
     ["肝癌", 91.2, 8349],
     ["肺癌", 83.3, 50074],
     ["骨髓瘤", 65.7, 4100],
     ["食道癌", 84.8, 5181],
     ["卵巢癌", 54.8, 4650],
     ["胃癌", 58.3, 16503],
 ]
 var schema = [{
     name: 'cancer',
     index: 0,
     text: '癌症'

 }, {
     name: 'fatality',
     index: 1,
     text: '死亡率'

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
         x: '10%',
         x2: '10%',
         y: '16%',
         y2: '16%',
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
                 schema[0].text + '：' + value[0] + '<br>' +
                 schema[1].text + '：' + value[1] + '<br>' +
                 schema[2].text + '：' + value[2] + '<br>'

         }
     },
     xAxis: {
         type: 'category',
         name: '癌症类型',
         data: ["肝癌", "食道癌", "肺癌", "骨髓瘤", "脑癌", "卵巢癌", "白血病", "胃癌", "舌咽癌", "结直肠癌", "肾癌", "子宫颈癌", "口腔癌", "膀胱癌", "乳腺癌", "前列腺癌", "淋巴瘤", "甲状腺癌"],
         nameGap: 2,
         nameTextStyle: {
             color: '#000',
             fontSize: 13,
         },
         // max: 31,
         splitLine: {
             show: true,
             linecolor: "#eceff1",
             lineStyle: {
                 type: "solid",
                 color: ["#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#eceff1", "#b71c1c", "#eceff1", "#eceff1", , "#eceff1", "#eceff1", "#eceff1", "#eceff1"]
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
                 fontSize: 10,
                 color: "black",
             },
             rotate: 60,
         }
     },
     yAxis: {
         type: 'value',
         name: "死亡率",
         nameLocation: 'end',
         nameGap: 10,
         nameTextStyle: {
             color: '#000',
             fontSize: 13
         },
         axisLine: {
             lineStyle: {
                 color: '#000'
             }
         },
         splitLine: {
             show: false,
             lineColor: "#eceff1",
             lineStyle: {
                 type: "solid",
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
         text: ['圆形大小：癌症治疗支出'],
         textGap: 20,
         textStyle: {
             color: '#000',
             fontSize: 14
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
                 color: ['#C29400']
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