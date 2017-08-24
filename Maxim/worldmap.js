var myChart = echarts.init(document.getElementById('main'));
$.getJSON("data-incidence-2012.json", function(res) {
    console.log(res)
    option = {
        title: {
            text: "Incidence and Mortality of cancer (ASR)",
            subtext: 'both sexes combined, number per 10,000',
            left: 'center',
            top: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
                    '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },

        visualMap: {
            min: 50,
            max: 400,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#ffebee', "#e57373", '#b71c1c ']
            }
        },
        series: [{
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle: {
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: res
        }]
    }
    myChart.setOption(option)
    $("#in").click(function() {
        myChart.setOption(option)
    })
})
$.getJSON("data-mortality-2012.json", function(res) {
    option2 = {
        title: {
            text: "Incident cases and deaths of Cancer (ASR) worldwide",
            subtext: 'both sexes combined, number per 10,000',
            left: 'center',
            top: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
                    '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 50,
            max: 170,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ["#e3f2fd", "#0d47a1", '#0d47a1']
            }
        },
        series: [{
            name: 'World Population (2010)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle: {
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: res
        }]
    }
    $("#mo").click(function() {
        myChart.setOption(option2);
    })

})