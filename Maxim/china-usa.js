var myChart1 = echarts.init(document.getElementById('mmm'));
var colors = ['#cfd8dc ', '#90a4ae', '#01579b', "#00026d", "#00695c "];
option4 = {
    color: colors,

    tooltip: {
        alwaysShowContent: true,
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    legend: {
        data: ['人均癌症支出', '人均GDP', '癌症负担指数', "医疗支出个人自费比例", "公共医疗支出占政府支出比例"],
        bottom: 0

    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['中国', '美国']
    }],
    yAxis: [{
            type: 'value',
            name: '人均癌症支出/GDP',
            min: 0,
            max: 10000,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} $'
            }
        },
        {
            type: 'value',
            name: '癌症负担指数',
            min: 0,
            max: 10,
            position: 'right',
            offset: 90,
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
        },
        {
            type: 'value',
            name: "医疗支出占比",
            min: 0,
            max: 50,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '人均癌症支出',
            type: 'bar',
            barWidth: 30,
            data: [9739, 9045.2],
        },
        {
            name: '人均GDP',
            type: 'bar',
            barWidth: 30,
            data: [4837.39, 8123.2],
        }, {
            name: '癌症负担指数',
            type: 'bar',
            barWidth: 30,
            yAxisIndex: 1,
            data: [0.8, 5.3]
        },
        {
            name: '医疗支出个人自费比例',
            type: 'line',
            yAxisIndex: 2,
            symbol: "circle",
            showSymbol: true,
            data: [32, 11]
        },
        {
            name: '公共医疗支出占政府支出比例',
            type: 'line',
            yAxisIndex: 2,
            data: [10.43, 21.29]
        }
    ]
};
myChart1.setOption(option4)