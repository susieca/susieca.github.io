var myCha = echarts.init(document.getElementById('m'));
var data = [
    { name: '华东地区', value: 403 },
    { name: '西南地区', value: 249 },
    { name: '华南地区', value: 395 },
    { name: '西北地区', value: 360 },
    { name: '华中地区', value: 403 },
    { name: '华北地区', value: 369 },
    { name: '东北地区', value: 385 }
];
var geoCoordMap = {
    '华东地区': [121.48, 31.22],
    '西南地区': [102.73, 25.04],
    '华南地区': [114.07, 22.62],
    '华北地区': [116.46, 39.92],
    '西北地区': [103.73, 36.03],
    '华中地区': [112.239741, 30.335165],
    '华北地区': [116.7, 39.53],
    '东北地区': [125.03, 46.58]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option6 = {
    backgroundColor: '',
    title: {
        text: '中国不同地区癌症生存率对比',
        subtext: 'data from Cancer Statistics in China,2015',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#000',
            fontSize: 20
        },
        top: "2%"
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}'
    },
    legend: {
        orient: 'vertical',
        y: '14%',
        x: 'right',
        data: ['癌症生存率'],
        textStyle: {
            color: '#000'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#eceff1',
                borderColor: '#111',
                borderWidth: 0.5
            },
            emphasis: {
                areaColor: '#01579b'
            },
            shadowColor: 'rgba(0, 0, 0, 0.2)'
        }
    },
    series: [{
            name: '癌症生存率',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 16;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#0d47a1'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 10)),
            symbolSize: function(val) {
                return val[2] / 15;
            },

            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    textStyle: { color: "#000" }
                }
            },
            itemStyle: {
                normal: {
                    color: "#0d47a1",
                    shadowBlur: 3,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myCha.setOption(option6)