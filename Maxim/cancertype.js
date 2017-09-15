 var myChar = echarts.init(document.getElementById('mai'));
 var myData = {
     "中国": ["肺癌", "肝癌", "胃癌", "乳腺癌", "食管癌", "结直肠癌", "子宫颈癌", "子宫体癌", "白血病", "前列腺癌", "--"], //中国
     "美国": ["前列腺癌", "乳腺癌", "肺癌", "结直肠癌", "子宫体癌", "黑色素瘤", "非霍奇金淋巴瘤", "肾癌", "胰腺癌", "膀胱癌", "--"], //美国
     "亚洲": ["肺癌", "乳腺癌", "胃癌", "肝癌", "结直肠癌", "子宫颈癌", "食管癌", "前列腺癌", "卵巢癌", "子宫体癌", "--"], //亚洲
     "欧洲": ["乳腺癌", "前列腺癌", "肺癌", "结直肠癌", "子宫体癌", "胃癌", "卵巢癌", "子宫颈癌", "胰腺癌", "膀胱癌", "--"], //欧洲
     "美洲": ['前列腺癌', '乳腺癌', '肺癌', '结直肠癌', '子宫颈癌', '子宫体癌', '胃癌', '胰腺癌', '非霍奇金淋巴瘤', '卵巢癌', "--"], //美洲
     "非洲": ['乳腺癌', '子宫颈癌', '前列腺癌', '肝癌', '结直肠癌', '肺癌', '食管癌', '卵巢癌', '非霍奇金淋巴瘤', '卡波济肉瘤', "--"], //非洲
     "大洋洲": ['前列腺癌', '乳腺癌', '结直肠癌', '肺癌', '黑色素瘤', '子宫颈癌', '非霍奇金淋巴瘤', '子宫体癌', '卵巢癌', '白血病', "--"], //大洋洲
     "世界": ['乳腺癌', '肺癌', '前列腺癌', '结直肠癌', '胃癌', '子宫颈癌', '肝癌', '食管癌', '子宫体癌', '卵巢癌', "--"], //世界
 }
 var dataMortality = {
     "中国": [32.5, 21.4, 17.9, 5.4, 10.9, 7.4, 3.4, 1.9, 3.6, 2.5, 100],
     "美国": [9.8, 14.9, 28.6, 9.2, 2.2, 1.9, 3.5, 2.6, 7, 2.4, 100],
     "亚洲": [20.7, 10.2, 11.7, 12.6, 7.2, 6.4, 6.7, 3.8, 3, 1.5, 100],
     "欧洲": [16.1, 11.3, 24, 12.5, 2.6, 6.9, 5.4, 3.8, 6.6, 2.8, 100],
     "美洲": [9.8, 14.9, 28.6, 9.2, 2.2, 1.9, 3.5, 2.6, 7, 2.4, 100],
     "非洲": [17.3, 17.5, 17, 8.5, 4.6, 4.5, 4.2, 3.8, 3.6, 3.4, 100],
     "大洋洲": [13, 15.6, 9.7, 18.3, 3.8, 4.5, 3.3, 1.9, 4.9, 3.8, 100],
     "世界": [12.9, 19.7, 7.8, 8.3, 8.9, 6.8, 9.5, 5, 1.8, 3.7, 100]
 };
 var dataIncidence = {
     "中国": [36.1, 22.3, 22.7, 22.1, 12.5, 14.2, 7.5, 8.6, 4.3, 5.3, 100],
     "美国": [98.2, 92.9, 38.4, 25, 19.5, 14.3, 12.3, 12, 7.5, 11.6, 100],
     "亚洲": [23.4, 29.1, 15.8, 13.3, 13.7, 12.7, 7.7, 9.4, 5, 5.9, 100],
     "欧洲": [69.9, 61.3, 29, 29.5, 13.9, 9.4, 9.9, 11.4, 6.8, 9.6, 100],
     "美洲": [98.2, 92.9, 38.4, 25, 19.5, 14.3, 12.3, 12, 7.5, 11.6, 100],
     "非洲": [36.2, 27.6, 23.2, 8.9, 6.3, 5, 4.5, 4.8, 4.6, 4.1, 100],
     "大洋洲": [101.9, 79.2, 34.8, 25.3, 29.8, 10.2, 11.3, 12.3, 8, 8.4, 100],
     "世界": [43.1, 23.1, 30.6, 17.2, 12.1, 14, 10.1, 5.9, 8.2, 6.1, 100]
 };
 var timeLineData = ["中国", "美国", "亚洲", "欧洲", "美洲", "非洲", "大洋洲", "世界"];

 option7 = {
     baseOption: {
         backgroundColor: '#f2f2f2',
         timeline: {
             show: true,
             axisType: 'category',
             right: 0,
             left: 0,
             tooltip: {
                 show: true,
                 formatter: function(params) {
                     console.log(params);
                     return params.name + '数据统计';
                 }
             },
             lineStyle: { width: 4 },
             autoPlay: true,
             currentIndex: 0,
             playInterval: 3000,
             label: {
                 normal: {
                     show: true,
                     interval: 0,
                     formatter: '{value}',
                     textStyle: {
                         color: "#000"
                     }
                 },
             },
             data: [],
         },
         title: {
             textStyle: {
                 color: '#000',
                 fontSize: 16,
             },
             top: 20
         },
         legend: {
             data: ["发病率", '死亡率'],
             top: 20,
             orient: "vertical",
             right: 0,
             textStyle: {
                 color: '#000',
             },
         },
         tooltip: {
             show: true,
             trigger: 'axis',
             formatter: '{b}<br/>{a}: {c}',
             axisPointer: {
                 type: 'shadow',
             }
         },



         grid: [{
             show: false,
             left: "2%",
             top: 65,
             bottom: 50,
             containLabel: true,
             width: '50%',
             backgroundColor: "transparent"
         }, {
             show: false,
             left: '50%',
             top: 80,
             bottom: 50,
             width: '0%',
         }, {
             show: false,
             right: "2%",
             top: 65,
             bottom: 50,
             containLabel: true,
             width: '50%',
         }, ],

         xAxis: [{
                 type: 'value',
                 inverse: true,
                 axisLine: {
                     show: false,
                 },
                 axisTick: {
                     show: false,
                 },
                 position: 'top',
                 axisLabel: {
                     show: true,
                     textStyle: {
                         color: '#000',
                         fontSize: 12,
                     },
                 },
                 splitLine: {
                     show: true,
                     lineStyle: {
                         color: '#fff',
                         width: 1,
                         type: 'solid',
                     },
                 },
             },
             {
                 gridIndex: 1,
                 show: false,
             },
             {
                 gridIndex: 2,
                 type: 'value',
                 axisLine: {
                     show: false,
                 },
                 axisTick: {
                     show: false,
                 },
                 position: 'top',
                 axisLabel: {
                     show: true,
                     textStyle: {
                         color: '#000',
                         fontSize: 12,
                     },
                 },
                 splitLine: {
                     show: true,
                     lineStyle: {
                         color: '#fff',
                         width: 1,
                         type: 'solid',
                     },
                 },
             },
         ],
         yAxis: [{
             type: 'category',
             inverse: true,
             position: 'right',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false,
                 margin: 8,
                 textStyle: {
                     color: '#000',
                     fontSize: 12,
                 },
             }
         }, {
             gridIndex: 1,
             type: 'category',
             inverse: true,
             position: 'left',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: true,
                 textStyle: {
                     color: '#000',
                     fontSize: 12,
                 },

             }
         }, {
             gridIndex: 2,
             type: 'category',
             inverse: true,
             position: 'left',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false,
                 textStyle: {
                     color: '#000',
                     fontSize: 12,
                 },

             }
         }, ],
         series: [],

     },

     options: [],


 };

 for (var i = 0; i < timeLineData.length; i++) {
     option7.baseOption.timeline.data.push(timeLineData[i]);
     option7.options.push({
         title: {
             text: timeLineData[i] + '前十癌症类型发病率与死亡率（ASR) ',
         },
         yAxis: [{
                 data: myData[timeLineData[i]]
             },
             {
                 gridIndex: 1,
                 data: myData[timeLineData[i]].map(function(value) {
                     return {
                         value: value,
                         textStyle: {
                             align: 'center',
                         }
                     }
                 }),
             }, {
                 gridIndex: 2,
                 data: myData[timeLineData[i]],
             },
         ],
         series: [{
                 name: "发病率",
                 type: 'bar',
                 barGap: 15,
                 barWidth: 20,
                 label: {
                     normal: {
                         show: false,
                     },
                     emphasis: {
                         show: true,
                         position: 'left',
                         offset: [0, 0],
                         textStyle: {
                             color: '#000',
                             fontSize: 14,
                         },
                     },
                 },
                 itemStyle: {
                     normal: {
                         color: '#c29400',
                     },
                     emphasis: {
                         color: 'yellow',
                     },
                 },
                 data: dataIncidence[timeLineData[i]],
             },


             {
                 name: '死亡率',
                 type: 'bar',
                 barGap: 20,
                 barWidth: 20,
                 xAxisIndex: 2,
                 yAxisIndex: 2,
                 label: {
                     normal: {
                         show: false,
                     },
                     emphasis: {
                         show: true,
                         position: 'right',
                         offset: [0, 0],
                         textStyle: {
                             color: '#000',
                             fontSize: 14,
                         },
                     },
                 },
                 itemStyle: {
                     normal: {
                         color: '#005365',
                     },
                     emphasis: {
                         color: '#00b8d4',
                     },
                 },
                 data: dataMortality[timeLineData[i]],
             }
         ]
     });
 }

 myChar.setOption(option7)