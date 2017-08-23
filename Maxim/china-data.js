var mycharts = echarts.init(document.getElementById('n'));
option3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        x: '14%',
        x2: '4%',
        y: '20%',
        y2: '20%'
    },
    legend: {
        data: ['ASR Incidence', 'ASR Mortality', '1-M/I']
    },
    xAxis: [{
        type: 'category',
        data: ['华北', '东北', '华东', '华中', '华南', '西南', '西北'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'ASR Rate',
            min: 100,
            max: 250,
            interval: 25,
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: false
        },
        {
            type: 'value',
            name: '1-M/I',
            min: 20,
            max: 50,
            interval: 5,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [{
            name: 'ASR Incidence',
            type: 'bar',
            data: [213.2, 189.2, 193.7, 185.5, 202.4, {
                    value: 226.7,
                    itemStyle: { normal: { color: '#ef9a9a' } }
                },
                207.9
            ],
            itemStyle: {
                normal: {
                    color: "#cce8f0"
                }
            }
        },
        {
            name: 'ASR Mortality',
            type: 'bar',
            data: [134.5, 116.4, 115.6, 109.4, 122.4, {
                value: 170.2,
                itemStyle: { normal: { color: "#c62828" } }
            }, 133.2],
            itemStyle: {
                normal: {
                    color: "#048cb7"
                }
            }
        },
        {
            name: '1-M/I',
            type: 'line',
            yAxisIndex: 1,
            data: [36.9, 38.5, 40.3, 41, 39.5, 24.9, 36]
        }
    ]
};
mycharts.setOption(option3)