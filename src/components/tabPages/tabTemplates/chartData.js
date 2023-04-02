import * as echarts from "echarts";

export { frontData, frontDataNew }

const barMaxData = 5;
const pieMaxData = 60;
const drop_url = 'image://https://s1.ax1x.com/2022/05/19/OqSwp6.png';
const graduate_url = 'image://http://localhost:8080/hat32.png'

const hourInDay = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23
];

const tideData = [
    [2.35, 2.19, 2.02, 1.88, 1.74, 1.59, 1.46, 1.39, 1.45, 1.70, 1.89, 1.89,
        1.81, 1.70, 1.59, 1.51, 1.45, 1.38, 1.32, 1.32, 1.54, 2.05, 2.46, 2.65],
    [1.54, 1.33, 1.12, 0.92, 0.77, 0.69, 0.80, 1.10, 1.36, 1.40, 1.31, 1.15,
        1.00, 0.89, 0.78, 0.71, 0.62, 0.65, 0.91, 1.44, 1.89, 2.18, 2.26, 2.19],
    [0.48, 0.26, 0.18, 0.37, 0.75, 1.03, 1.18, 1.18, 0.99, 0.73, 0.52, 0.35,
        0.23, 0.17, 0.19, 0.42, 0.90, 1.37, 1.74, 1.94, 1.95, 1.80, 1.60, 1.37],
    [0.83, 2.48, 3.59, 4.00, 3.75, 3.18, 2.63, 2.26, 1.90, 1.55, 1.20, 0.94,
        0.80, 1.05, 2.95, 3.35, 3.30, 2.75, 2.30, 1.94, 1.60, 1.30, 1.00, 0.71]
];

const riverSection = [
    {
        x: [-17.2, -6.1, 71.7, 126.3, 148.5, 169.9, 195.8, 197.7, 212.0, 231.7, 247.6, 259.8, 273.0, 288.4, 307.1, 326.1, 345.8, 365.4, 384.5, 401.0, 418.7, 437.6, 457.3, 477.3, 498.8, 517.6, 537.2, 559.1, 576.6, 596.2, 616.5, 636.6, 656.8, 676.4, 696.0, 716.1, 736.7, 755.4, 774.9, 795.1, 816.0, 834.8, 854.5, 875.1, 894.5, 914.2, 933.1, 952.9, 967.2, 989.1, 1032.5, 1132.9, 1253.3, 1295.2, 1319.3],
        y: [7.00, 3.30, 2.50, 1.40, -0.56, -10.61, -19.32, -20.32, -20.92, -21.22, -21.72, -21.52, -21.22, -21.32, -20.92, -20.82, -21.02, -22.12, -21.72, -21.63, -21.53, -21.53, -21.73, -21.83, -21.83, -21.43, -21.13, -20.03, -19.33, -18.83, -18.43, -17.73, -16.83, -15.73, -14.53, -13.23, -12.53, -11.53, -11.03, -10.43, -9.93, -9.93, -10.03, -9.73, -8.93, -8.53, -8.43, -7.23, -2.13, -0.69, 0.80, 1.50, 2.50, 3.00, 6.90]
    },
    {
        x: [293.4, 322.0, 482.9, 560.3, 627.0, 649.0, 668.6, 687.3, 700.1, 706.8, 723.8, 743.9, 764.1, 782.7, 801.4, 821.9, 840.8, 860.9, 880.6, 899.9, 918.2, 937.2, 956.3, 976.1, 996.2, 1021.9, 1035.0, 1055.0, 1074.9, 1094.5, 1114.8, 1134.7, 1154.0, 1175.3, 1194.7, 1212.5, 1231.9, 1252.6, 1273.3, 1292.2, 1311.6, 1331.2, 1350.1, 1368.9, 1388.4, 1408.0, 1428.0, 1447.7, 1468.9, 1487.6, 1507.8, 1528.7, 1546.9, 1567.2, 1588.7, 1606.8, 1627.7, 1646.8, 1667.0, 1687.9, 1707.0, 1726.7, 1746.6, 1766.9, 1789.2, 1806.8, 1826.4, 1848.1, 1867.0, 1886.6, 1906.1, 1927.3, 1946.1, 1965.7, 1985.3, 2005.8, 2025.1, 2045.6, 2064.9, 2085.4, 2106.0, 2125.5, 2145.4, 2164.9, 2185.1, 2205.3, 2226.2, 2245.5, 2265.7, 2286.6],
        y: [6.20, 2.40, 1.80, 1.40, -0.03, -0.33, -0.64, -0.84, -0.87, -0.97, -1.37, -1.67, -1.96, -2.07, -2.27, -2.57, -2.96, -3.46, -4.26, -5.36, -7.26, -10.26, -13.46, -19.66, -26.76, -31.76, -32.66, -35.76, -38.06, -37.96, -34.76, -33.66, -32.96, -31.56, -31.16, -29.96, -29.76, -29.56, -28.46, -28.56, -28.06, -27.46, -26.96, -26.66, -26.16, -25.26, -25.26, -24.46, -23.96, -23.76, -23.16, -22.16, -21.86, -21.56, -20.76, -20.66, -20.86, -20.56, -20.06, -20.46, -19.96, -19.06, -18.76, -18.46, -18.36, -17.86, -17.96, -16.96, -17.36, -16.26, -16.06, -15.66, -15.16, -14.96, -14.96, -14.36, -13.76, -13.46, -12.86, -12.46, -12.36, -12.06, -11.76, -11.16, -10.66, -10.26, -10.56, -9.96, -9.96, -9.16]
    },
    {
        x: [-128.3, -84.1, -36.7, 7.0, 46.9, 69.5, 80.1, 98.7, 118.6, 137.6, 159.6, 175.2, 176.2, 195.9, 215.8, 235.5, 256.1, 275.5, 295.8, 315.9, 336.0, 355.3, 375.6, 395.3, 415.6, 435.3, 454.5, 473.7, 493.7, 513.8, 533.3, 553.1, 573.2, 592.7, 612.6, 632.9, 652.7, 672.8, 692.8, 712.9, 732.5, 752.8, 781.6, 792.3, 812.4, 832.2, 852.3, 872.8, 892.1, 926.9, 932.0, 952.5, 972.5, 992.5, 1012.0, 1032.4, 1052.3, 1072.3, 1092.0, 1111.5, 1132.2, 1151.7, 1171.9, 1191.9, 1211.4, 1231.5, 1251.2, 1271.9, 1291.8, 1311.4],
        y: [5.20, 0.00, -5.00, -10.00, -15.00, -23.40, -28.42, -30.82, -31.88, -36.24, -38.10, -38.11, -38.01, -37.51, -37.61, -37.71, -38.11, -37.51, -37.21, -36.61, -35.91, -33.51, -31.81, -30.81, -30.41, -29.91, -29.61, -28.31, -28.31, -27.71, -26.11, -24.71, -23.11, -21.91, -21.51, -20.61, -20.11, -19.31, -20.11, -17.61, -15.92, -14.12, -14.12, -15.12, -11.92, -12.52, -12.02, -11.72, -11.92, -12.42, -12.32, -11.02, -11.42, -11.62, -20.11, -19.31, -20.11, -17.61, -15.92, -14.12, -14.12, -15.12, -11.92, -12.52, -12.02, -11.72, -11.92, -12.42, -12.32, -11.02, -11.42, -11.62]
    },
];

function mergeXY(xList, yList) {
    let resultList = [];
    for (let i = 0; i < xList.length; i++) {
        resultList.push([xList[i], yList[i]]);
    }
    return resultList;
}

function generateY(num, randNum) {
    let resList = [];
    for (let i = 0; i < num; i++) {
        resList.push(+((Math.random() * randNum) - (randNum / 2)).toFixed(2));
    }
    // console.log(resList)
    return resList;
}

function random(maxData, fixed) {
    return + (Math.random() * (maxData)).toFixed(fixed);
}

const barDynamicChange = (barChartFst) => {
    const dynamicData = [random(barMaxData, 2), random(barMaxData, 2), random(barMaxData, 2), random(barMaxData, 2)];
    barChartFst.setOption({
        series: [
            {
                data: dynamicData.slice()
            },
            {
                data: dynamicData.slice()
            }
        ]
    });
}



const pieDynamicChange = (pieChartFst) => {
    const dynamicData = [random(pieMaxData, 0), random(pieMaxData, 0), random(pieMaxData, 0), random(pieMaxData, 0)];
    pieChartFst.setOption({
        series: [
            {
                data: [{ value: 10 + dynamicData[3], name: 'A' },
                { value: 10 + dynamicData[1], name: 'B' },
                { value: 10 + dynamicData[0], name: 'C' },
                { value: 10 + dynamicData[2], name: 'D' },
                ].sort(function (a, b) {
                    return b.value - a.value;
                })
            },
        ],
    });
}

function dynamicMap1(map) {
    let tick = 1.0;
    setInterval(() => {
        map.setPaintProperty('tidestations', 'circle-blur', 0.6 + tick / 20);
        tick = (tick + 1.0) % 10;
    }, 100);
}

function getVirtulData(year) {
    year = year || '2022';
    const date = +echarts.number.parseDate(year + '-01-01');
    const end = +echarts.number.parseDate(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
}

const workData = [
    [46.33,9.12,6.49,5.88,5.81,5.45,4.28,3.24,2.82,2.5,2.39].reverse(), 
    [37.6,14.48,9.5,2.4,2.49,6,4.89,4.03,3.45,3.36,4.12].reverse(), 
    [38.32,10.51,7.66,3.86,3.93,9.88,5,4.18,2.6,3.74,5.57].reverse()
]
let currentWorkDataIndex = 0;
const yearsList = ['2020', '2021', '2022'];
let currentWorkYearIndex = 0;
let currentWorkFlowYearIndex = 0;

function dynamicWorkData(workChart) {
    currentWorkDataIndex = (currentWorkDataIndex + 1)%(workData.length);
    currentWorkYearIndex = (currentWorkYearIndex + 1)%yearsList.length;
    workChart.setOption({
        title: {
            text: '2020-22届毕业生落实变化情况-' + yearsList[currentWorkYearIndex]
        }, 
        series: [
            {
                data: workData[currentWorkDataIndex]
            },
        ],
    });
}

const workFlowCountryData = [
    [65.28,5.49,5.43,2.5,1.59,19.71], 
    [71.31,4.14,3.67,2.4,2.12,16.36], 
    [69.51,4.42,4.17,3.09,2.06,16.75]
]

const workFlowCountryName = [
    '江苏','浙江','上海','广东','贵州','其他'
]

let currentWorkFlowIndex = 0;

const workFlowPieChange = (pieChartFst) => {
    currentWorkFlowIndex = (currentWorkFlowIndex + 1) % workFlowCountryData.length;
    currentWorkFlowYearIndex = (currentWorkFlowYearIndex + 1)%yearsList.length;
    let dynamicData = workFlowCountryData[currentWorkDataIndex];
    pieChartFst.setOption({
        title: {
            text: '2020-22届毕业生国内就业流向-' + yearsList[currentWorkFlowYearIndex]
        }, 
        series: [
            {
                data: [
                    { value: dynamicData[0], name: workFlowCountryName[0] },
                    { value: dynamicData[1], name: workFlowCountryName[1] },
                    { value: dynamicData[2], name: workFlowCountryName[2] },
                    { value: dynamicData[3], name: workFlowCountryName[3] },
                    { value: dynamicData[4], name: workFlowCountryName[4] },
                    { value: dynamicData[5], name: workFlowCountryName[5] },
                ].sort(function (a, b) {
                    return b.value - a.value;
                })
            },
        ],
    });
}

const workPlaceData = [
    [40.02,32.44,12.37,3.7,3.52], 
    [56.08,26.38,9.8,2.64,1.92], 
    [43.35,30.36,14.26,3.19,3.18]
];
let workPlaceIndex = 0;
const workPlaceBarChange = (barChart) => {
    workPlaceIndex = (workPlaceIndex + 1) % workPlaceData.length;
    let currentPlaceData = workPlaceData[workPlaceIndex];
    barChart.setOption({
        title: {
            text: '2020-22届毕业生就业单位情况-' + yearsList[workPlaceIndex]
        }, 
        series: [
            {
                data: [
                    { value: currentPlaceData[0],  itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3DF2F2' },
                            { offset: 0.5, color: '#2995D9' },
                            { offset: 1, color: '#074E8C' }
                        ])
                    }},
                    { value: currentPlaceData[1],  itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#F2CB05' },
                            { offset: 0.5, color: '#F28705' },
                            { offset: 1, color: '#D95204' }
                        ])
                    }},
                    { value: currentPlaceData[2], itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#DEF2B3' },
                            { offset: 0.5, color: '#55A605' },
                            { offset: 1, color: '#488C04' },

                        ])
                    }},
                    { value: currentPlaceData[3], itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#F24405' },
                            { offset: 0.5, color: '#F25C05' },
                            { offset: 1, color: '#F27405' },

                        ])
                    } },
                    { value: currentPlaceData[4], itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#66CAF2' },
                            { offset: 0.5, color: '#0388A6' },
                            { offset: 1, color: '#03658C' },
                        ])
                    }},
                ]
            },
        ],
    });
}

const frontDataNew = {
    'maps': [], 
    'charts': [
        // 0 -> line type chart 1
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生落实变化情况',
                    textAligh: 'center',
                    x:'center', 
                    top: '1%', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 24,
                    }
                },
                legend: {
                    right: '1%', 
                    y: 'center', 
                    orient: 'vertical', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)', 
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 'bold',
                        // fontSize: 16,
                    }, 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 10,
                    padding: 5, 
                    itemGap: 32, 
                },
                grid: {
                    top: '20%',
                    left: '2%',
                    right: '16%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2020', '2021', '2022'],
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: 16
                    }
                },
                yAxis: [
                    {
                        type: 'value', 
                        name: '人数',
                        alignTicks: true,
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            formatter: '{value} 人', 
                        }
                    }, 
                    {
                        type: 'value', 
                        name: '人数比例',
                        position: 'right', 
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            formatter: '{value} %'
                        }
                    }
                ],
                series: [
                    {
                        name: '就业',
                        type: 'bar',
                        stack: 'total',
                        barWidth: '28%',
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        itemStyle: {
                            opacity: 0.75
                        }, 
                        data: [1649, 2133, 2028]
                    },
                    {
                        name: '国内升学',
                        type: 'bar',
                        stack: 'total',
                        barWidth: '28%',
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        itemStyle: {
                            opacity: 0.75
                        }, 
                        data: [1263, 1438, 1547]
                    },
                    {
                        name: '国外升学',
                        type: 'bar',
                        stack: 'total',
                        barWidth: '28%',
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        itemStyle: {
                            opacity: 0.75
                        }, 
                        data: [332, 317, 312]
                    },
                    {
                        name: '毕业落实率',
                        type: 'line', 
                        data: [77.24, 91.72, 89.69],
                        emphasis: {
                            focus: 'series'
                        },
                        // symbol: 'diamond', 
                        symbolSize: 8,
                        lineStyle: {
                            width: 4
                        }, 
                        yAxisIndex: 1
                    }, 
                    {
                        name: '国内升学率',
                        type: 'line', 
                        data: [30.07, 33.92, 36.07],
                        emphasis: {
                            focus: 'series'
                        },
                        // symbol: 'diamond', 
                        symbolSize: 8,
                        lineStyle: {
                            width: 4
                        }, 
                        yAxisIndex: 1
                    }, 
                    {
                        name: '出境升学率',
                        type: 'line', 
                        data: [7.91, 7.48, 7.15],
                        emphasis: {
                            focus: 'series'
                        },
                        // symbol: 'diamond', 
                        symbolSize: 8,
                        lineStyle: {
                            width: 4
                        }, 
                        yAxisIndex: 1
                    }, 
                ]
            }
        },
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生就业行业分布-2020',
                    textAligh: 'center',
                    x:'center', 
                    top: '1%', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 24,
                    }
                },
                grid: {
                    top: '8%',
                    left: '4%',
                    right: '16%',
                    bottom: '2%',
                    containLabel: true
                },
                yAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 16, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 14, 
                        },
                        data: [
                            '教育', '信息软件', '文体娱乐', '金融业', '公共管理', '制造', '电热燃水', 
                            '批发零售', '租赁商务', '建筑', '科研技术'
                        ].reverse()
                    }
                ],
                xAxis: [
                    {
                        type: 'value',
                        max: 50, 
                        name: '人数比例', 
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            formatter: '{value} %', 
                        }
                    }
                ],
                series: [
                    {
                        // current data
                        type: 'pictorialBar',
                        symbol: graduate_url,
                        symbolRepeat: 'fixed',
                        symbolMargin: '5%',
                        symbolClip: true,
                        symbolSize: 30,
                        symbolBoundingData: 50,
                        data: [46.33, 9.12, 6.49, 5.88, 5.81, 5.45, 4.28, 3.24, 2.82, 2.5, 2.39].reverse(),
                        label: {
                            show: true,
                            formatter: '{c} %',
                            position: 'right',
                            offset: [10, 0],
                            color: 'rgba(41, 156, 187, 0.9)',
                            fontSize: 16
                        },
                        z: 10
                    }, 
                    {
                        // full data
                        type: 'pictorialBar',
                        itemStyle: {
                          opacity: 0.2
                        },
                        
                        symbolRepeat: 'fixed',
                        symbolMargin: '5%',
                        symbol: graduate_url,
                        symbolSize: 30,
                        symbolBoundingData: 50,
                        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50 ,50],
                        z: 5
                    }
                ]
            },
            'dynamicFunc': dynamicWorkData
        }, 
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生国内就业流向-2020',
                    x: 'center',
                    top: '2%',
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 26,
                    }
                },
                legend: {
                    orient: 'horizontal',
                    bottom: '7%',
                    x:'center', 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    show: true,
                    padding: 10,
                    textStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18
                    }
                },
                visualMap: {
                    show: false,
                    min: 1.5,
                    max: 72,
                    inRange: {
                        // colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '国内就业流向',
                        type: 'pie',
                        radius: ['20%','70%'],
                        center: ['50%', '46%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        label: {
                            show: true,
                            position: 'inside', 
                            formatter: '{c} %', 
                            fontSize: 16, 
                            fontWeight: 'bold'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '24',
                                fontWeight: 'bold',
                                borderColor: 'black',
                                color: 'white',
                            }
                        },
                        data: [
                            { value: 65.28, name: '江苏' },
                            { value: 5.49, name: '浙江' },
                            { value: 5.43, name: '上海' },
                            { value: 2.5, name: '广东' },
                            { value: 1.59, name: '贵州' },
                            { value: 19.71, name: '其他' },
                        ].sort(function (a, b) {
                            return b.value - a.value;
                        }),
                    }
                ]
            },
            'dynamicFunc': workFlowPieChange
        },
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生就业单位情况-2020',
                    textAligh: 'center',
                    x:'center', 
                    top: '2%', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 24,
                    }
                },
                grid: {
                    top: '10%',
                    left: '4%',
                    right: '4%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['其他企业', '中初教育', '国有企业', '三资企业', '机关单位'],
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: 14,
                        fontWeight: 'bold'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        formatter: '{value} %'
                    }
                },
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                }, 
                series: [
                    {
                        name: 'Forest',
                        type: 'bar',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [
                            {
                                value: 40.02,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#3DF2F2' },
                                        { offset: 0.5, color: '#2995D9' },
                                        { offset: 1, color: '#074E8C' }
                                    ])
                                }
                            }, 
                            {
                                value: 32.44,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#F2CB05' },
                                        { offset: 0.5, color: '#F28705' },
                                        { offset: 1, color: '#D95204' }
                                    ])
                                }
                            }, 
                            {
                                value: 12.37,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#DEF2B3' },
                                        { offset: 0.5, color: '#55A605' },
                                        { offset: 1, color: '#488C04' },

                                    ])
                                }
                            }, 
                            {
                                value: 3.7,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#F24405' },
                                        { offset: 0.5, color: '#F25C05' },
                                        { offset: 1, color: '#F27405' },

                                    ])
                                }
                            }, 
                            {
                                value: 3.52,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#66CAF2' },
                                        { offset: 0.5, color: '#0388A6' },
                                        { offset: 1, color: '#03658C' },
                                    ])
                                }
                            }, 
                        ],
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder',
                            formatter: '{c} %',
                            color: 'rgb(255, 255, 255)'
                        },
                    },
                ]
            },
            'dynamicFunc': workPlaceBarChange
        },
    ]
}

const frontData = {
    'maps': [
        {
            'initStyle': {
                container: 'map',
                style: 'mapbox://styles/johnnyt/cl39v9pcv009614qp3gnmcpos',
                center: [120.907,31.72],
                zoom: 8.8,
            },
            'dynamicFunc': dynamicMap1, 
        },
        
        {
            'initStyle': {
                container: 'map', 
                style: 'mapbox://styles/johnnyt/cl39v9pcv009614qp3gnmcpos', 
                center: [121.180, 31.723], 
                zoom: 10.5,
            },
             
        },
        {
            'initStyle': {},
            'dynamicFunc': {},
        },
    ],

    'charts': [
        {
            'chartOpt': {
                title: {
                    text: '潮位站潮位',
                    left: 15,
                    top: 10,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 32,
                    }
                },
                tooltip: {
                    show: true,
                },
                xAxis: {
                    max: barMaxData,
                    splitLine: { show: false },
                    offset: -10,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        margin: 4,
                        fontSize: 14
                    },
                    z: 25
                },
                yAxis: {
                    data: ['A', 'B', 'C', 'D'],
                    inverse: true,
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: {
                        margin: 10,
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'Microsoft YaHei'
                    },
                },
                grid: {
                    top: 65,
                    height: 150,
                    left: 50,
                    right: 100
                },
                series: [
                    {
                        z: 10,
                        // current data
                        type: 'pictorialBar',
                        symbol: drop_url,
                        symbolRepeat: true,
                        symbolMargin: '5%',
                        symbolClip: true,
                        symbolSize: 24,
                        symbolBoundingData: barMaxData,
                        data: [2.35, 2.17, 1.56, 1.03],
                        markLine: {
                            z: 15,
                            symbol: 'none',
                            label: {
                                formatter: 'max: {c}',
                                position: 'end',
                                shadowBlur: 0,
                                color: 'white',
                                textBorderColor: 'white',
                                fontSize: 12,
                                distance: 6,
                            },
                            lineStyle: {
                                color: 'white',
                                type: 'dotted',
                                opacity: 1,
                                width: 2
                            },
                            data: [
                                {
                                    type: 'max'
                                }
                            ]
                        },
                    },
                    {
                        // full data
                        type: 'pictorialBar',
                        itemStyle: {
                            opacity: 0.3
                        },
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value;
                            },
                            position: 'right',
                            offset: [10, 0],
                            color: 'white',
                            fontSize: 16
                        },
                        animationDuration: 0,
                        symbolRepeat: 'fixed',
                        symbolMargin: '5%',
                        symbol: drop_url,
                        symbolSize: 24,
                        symbolBoundingData: barMaxData,
                        data: [2.35, 2.17, 1.56, 1.03],
                        z: 5
                    }
                ]
            },
            'dynamicFunc': barDynamicChange
        },
        {
            'chartOpt': {
                title: {
                    text: '测站统计',
                    left: 10,
                    top: 10,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 32,
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    bottom: 16,
                    right: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    show: true,
                    padding: 10,
                    textStyle: {
                        color: 'white',
                        fontWeight: 'bold'
                    }
                },
                visualMap: {
                    show: false,
                    min: 5,
                    max: 90,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '潮位站统计',
                        type: 'pie',
                        radius: [25, 150],
                        center: ['45%', '52%'],
                        roseType: 'radius',
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            color: '#415CC2',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '24',
                                fontWeight: 'bold',
                                borderColor: 'black',
                                color: 'white'
                            }
                        },
                        data: [
                            { value: 60, name: 'A' },
                            { value: 36, name: 'B' },
                            { value: 47, name: 'C' },
                            { value: 29, name: 'D' },
                        ].sort(function (a, b) {
                            return b.value - a.value;
                        }),
                    }
                ]
            },
            'dynamicFunc': pieDynamicChange
        },
        {
            'chartOpt': {
                title: {
                    text: '2022年4月数据',
                    left: 10,
                    top: 10,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 32,
                    }
                },
                tooltip: {
                    position: 'top',
                },
                visualMap: {
                    min: 0,
                    max: 1000,
                    calculable: true,
                    orient: 'vertical',
                    inverse: true,
                    seriesIndex: [0],
                    inRange: {
                        color: ['#2146AD', '#89AAE0'],
                        symbolSize: [3, 30]
                    },
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.9)'
                    },
                    textGap: 0,
                    right: 2,
                    bottom: 20,
                    align: 'top',
                    itemHeight: 180,
                    itemWidth: 30
                },
                calendar: [{
                    orient: 'vertical',
                    yearLabel: {
                        show: false,
                    },
                    monthLabel: {
                        margin: 6,
                        fontSize: 18,
                        color: "rgba(255, 255, 255, 0.9)",
                    },
                    dayLabel: {
                        firstDay: 1,
                        margin: 4,
                        nameMap: 'cn',
                        color: "rgba(255, 255, 255, 0.9)",
                    },
                    itemStyle: {
                        color: 'rgba(6, 31, 71, 0.75)',
                    },
                    cellSize: 45,
                    range: '2022-4',
                    right: 84,
                    bottom: 20
                }],
                series: {
                    type: 'effectScatter',
                    coordinateSystem: 'calendar',
                    calendarIndex: 0,
                    symbolSize: function (val) {
                        return val[1] / 40;
                    },
                    itemStyle: {
                        color: '#415CC2',
                    },
                    data: getVirtulData('2022')
                }
            }
        },
        {
            'chartOpt': {
                title: {
                    text: '2022-4-20测站潮位值',
                    left: 10,
                    top: 10,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 32,
                    }
                },
                legend: {
                    orient: 'horizontal',
                    top: 8,
                    right: 28,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    show: true,
                    padding: 10,
                    textStyle: {
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold'
                    },
                    data: [
                        { name: 'A', lineStyle: { color: '#C72212' }, itemStyle: { color: '#C72212' } },
                        { name: 'B', lineStyle: { color: '#08C719' }, itemStyle: { color: '#08C719' } },
                        { name: 'C', lineStyle: { color: '#D6C100' }, itemStyle: { color: '#D6C100' } },
                        { name: 'D', lineStyle: { color: '#123CC7' }, itemStyle: { color: '#123CC7' } },
                    ]
                },
                visualMap: [
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: Math.min.apply(null, tideData[0]),
                        max: Math.max.apply(null, tideData[0]),
                        inRange: {
                            color: ['#FFE1DE', '#C72212']
                        }
                    },
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 1,
                        min: Math.min.apply(null, tideData[1]),
                        max: Math.max.apply(null, tideData[1]),
                        inRange: {
                            color: ['#D4FFD0', '#08C719']
                        }
                    },
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 2,
                        min: Math.min.apply(null, tideData[2]),
                        max: Math.max.apply(null, tideData[2]),
                        inRange: {
                            color: ['#FFF9C3', '#D6C100']
                        }
                    },
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 3,
                        min: Math.min.apply(null, tideData[3]),
                        max: Math.max.apply(null, tideData[3]),
                        inRange: {
                            color: ['#49A6FF', '#123CC7']
                        }
                    },
                ],
                tooltip: {
                    show: true,
                },
                xAxis: {
                    data: hourInDay,
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.6)'
                        }
                    },
                    axisLabel: {
                        margin: 8,
                        fontSize: 14,
                        color: '#fff'
                    },
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    axisLabel: {
                        margin: 4,
                        fontSize: 16
                    },
                },
                grid: {
                    bottom: 30,
                    left: 45,
                    right: 30
                },
                series: [
                    {
                        name: 'A',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        data: tideData[0]
                    },
                    {
                        name: 'B',
                        type: 'line',
                        symbol: 'triangle',
                        symbolSize: 6,
                        data: tideData[1]
                    },
                    {
                        name: 'C',
                        type: 'line',
                        symbol: 'diamond',
                        symbolSize: 6,
                        data: tideData[2]
                    },
                    {
                        name: 'D',
                        type: 'line',
                        symbol: 'rect',
                        symbolSize: 6,
                        data: tideData[3]
                    },
                ]
            }
        },
        {
            'chartOpt': {
                title: {
                    text: '河道剖面图',
                    left: 15,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 24
                    },
                    top: 5
                },
                grid: {
                    top: 45
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    }
                },
                legend: {
                    data: ['riverSection'],
                    right: 10,
                    top: 8,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)'
                    }
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 85
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 85
                    }
                ],
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.85)',
                            }
                        },
                        // prettier-ignore
                        data: riverSection[0].x
                    },
                ],
                yAxis: [
                    {
                        name: '断面高度(米)',
                        nameLocation: 'middle',
                        nameGap: 30,
                        alignTicks: true,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.85)'
                            }
                        },
                        type: 'value',
                    }
                ],
                series: [
                    {
                        name: 'riverSection',
                        type: 'line',
                        yAxisIndex: 0,
                        xAxisIndex: 0,
                        areaStyle: {
                            origin: Math.max(...riverSection[0].y),
                            opacity: 0.8
                        },
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: riverSection[0].y
                    }
                ]
            }
        },
        {
            'chartOpt': {
                title: {
                    text: '剖面对比图',
                    left: 15,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 24
                    },
                    top: 5
                },
                grid: {
                    top: 45
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    }
                },
                legend: {
                    data: ['1', '2'],
                    right: 10,
                    top: 8,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)'
                    }
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 5,
                        end: 85
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 5,
                        end: 85
                    }
                ],
                xAxis: [
                    {
                        type: 'value',
                        boundaryGap: false,
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.85)'
                            }
                        },
                    },
                ],
                yAxis: [
                    {
                        name: '断面高度(米)',
                        nameLocation: 'middle',
                        nameGap: 30,
                        alignTicks: true,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.85)'
                            }
                        },
                        type: 'value',
                    }
                ],
                series: [
                    {
                        name: '1',
                        type: 'line',
                        yAxisIndex: 0,
                        xAxisIndex: 0,
                        lineStyle: {
                            width: 3
                        },
                        areaStyle: {
                            origin: Math.max(...riverSection[0].y),
                            opacity: 0.6
                        },
                        color: '#3A62CC',
                        emphasis: {
                            focus: 'series'
                        },
                        data: mergeXY(riverSection[0].x, riverSection[0].y)
                    },
                    {
                        name: '2',
                        type: 'line',
                        yAxisIndex: 0,
                        xAxisIndex: 0,
                        lineStyle: {
                            width: 3
                        },
                        areaStyle: {
                            origin: Math.max(...riverSection[0].y),
                            opacity: 0.5
                        },
                        color: '#F89837',
                        emphasis: {
                            focus: 'series'
                        },
                        data: mergeXY(riverSection[2].x, riverSection[2].y)
                    },
                ]
            }
        },
        {
            'chartOpt': {
                title: {
                    text: '断面冲於',
                    left: 15,
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontSize: 24
                    },
                    top: 5
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: 50,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.85)',
                        }
                    },
                    data: riverSection[1].x
                },
                yAxis: {
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.85)',
                        }
                    },
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 25,
                        end: 55
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 25,
                        end: 55
                    }
                ],
                visualMap: {
                    right: 30, 
                    top: 10, 
                    orient: 'horizontal', 
                    textStyle: {
                        fontSize: 16
                    }, 
                    pieces: [
                        {
                            gt: 0,
                            color: '#FF4B26', 
                            label: '淤积'
                        },
                        {
                            lte: -0.01,
                            color: '#3978CC', 
                            label: '冲刷'
                        },
                    ],
                },
                series: {
                    name: '断面冲於',
                    type: 'line',
                    lineStyle: {
                        width: 2.4
                    },
                    areaStyle: {
                        origin: 0,
                        opacity: 0.4
                    },
                    smooth: true, 
                    data: generateY(riverSection[1].x.length, 5, 2), 
                }
            }
        }, 
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生落实变化情况',
                    textAligh: 'center',
                    x:'center', 
                    top: '1%', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 24,
                    }
                },
                legend: {
                    right: '1%', 
                    y: 'center', 
                    orient: 'vertical', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)', 
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 'bold',
                        // fontSize: 16,
                    }, 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 10,
                    padding: 5, 
                    itemGap: 32, 
                },
                grid: {
                    top: '20%',
                    left: '2%',
                    right: '16%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2020', '2021', '2022'],
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: 16
                    }
                },
                yAxis: [
                    {
                        type: 'value', 
                        name: '人数',
                        alignTicks: true,
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            formatter: '{value} 人', 
                        }
                    }, 
                    {
                        type: 'value', 
                        name: '人数比例',
                        position: 'right', 
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            formatter: '{value} %'
                        }
                    }
                ],
                series: [
                    {
                        name: '就业',
                        type: 'bar',
                        stack: 'total',
                        barWidth: '28%',
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        itemStyle: {
                            opacity: 0.75
                        }, 
                        data: [1649, 2133, 2028]
                    },
                    {
                        name: '国内升学',
                        type: 'bar',
                        stack: 'total',
                        barWidth: '28%',
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        itemStyle: {
                            opacity: 0.75
                        }, 
                        data: [1263, 1438, 1547]
                    },
                    {
                        name: '国外升学',
                        type: 'bar',
                        stack: 'total',
                        barWidth: '28%',
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        itemStyle: {
                            opacity: 0.75
                        }, 
                        data: [332, 317, 312]
                    },
                    {
                        name: '毕业落实率',
                        type: 'line', 
                        data: [77.24, 91.72, 89.69],
                        emphasis: {
                            focus: 'series'
                        },
                        // symbol: 'diamond', 
                        symbolSize: 8,
                        lineStyle: {
                            width: 4
                        }, 
                        yAxisIndex: 1
                    }, 
                    {
                        name: '国内升学率',
                        type: 'line', 
                        data: [30.07, 33.92, 36.07],
                        emphasis: {
                            focus: 'series'
                        },
                        // symbol: 'diamond', 
                        symbolSize: 8,
                        lineStyle: {
                            width: 4
                        }, 
                        yAxisIndex: 1
                    }, 
                    {
                        name: '出境升学率',
                        type: 'line', 
                        data: [7.91, 7.48, 7.15],
                        emphasis: {
                            focus: 'series'
                        },
                        // symbol: 'diamond', 
                        symbolSize: 8,
                        lineStyle: {
                            width: 4
                        }, 
                        yAxisIndex: 1
                    }, 
                ]
            }
        },
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生就业行业分布-2020',
                    textAligh: 'center',
                    x:'center', 
                    top: '1%', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 24,
                    }
                },
                grid: {
                    top: '8%',
                    left: '4%',
                    right: '16%',
                    bottom: '2%',
                    containLabel: true
                },
                yAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 16, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 14, 
                        },
                        data: [
                            '教育', '信息软件', '文体娱乐', '金融业', '公共管理', '制造', '电热燃水', 
                            '批发零售', '租赁商务', '建筑', '科研技术'
                        ].reverse()
                    }
                ],
                xAxis: [
                    {
                        type: 'value',
                        max: 50, 
                        name: '人数比例', 
                        nameTextStyle: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: 12, 
                            fontWeight: 'bold'
                        }, 
                        axisLabel: {
                            color: 'rgba(255, 255, 255, 0.9)',
                            formatter: '{value} %', 
                        }
                    }
                ],
                series: [
                    {
                        // current data
                        type: 'pictorialBar',
                        symbol: graduate_url,
                        symbolRepeat: 'fixed',
                        symbolMargin: '5%',
                        symbolClip: true,
                        symbolSize: 30,
                        symbolBoundingData: 50,
                        data: [46.33, 9.12, 6.49, 5.88, 5.81, 5.45, 4.28, 3.24, 2.82, 2.5, 2.39].reverse(),
                        label: {
                            show: true,
                            formatter: '{c} %',
                            position: 'right',
                            offset: [10, 0],
                            color: 'rgba(41, 156, 187, 0.9)',
                            fontSize: 16
                        },
                        z: 10
                    }, 
                    {
                        // full data
                        type: 'pictorialBar',
                        itemStyle: {
                          opacity: 0.2
                        },
                        
                        symbolRepeat: 'fixed',
                        symbolMargin: '5%',
                        symbol: graduate_url,
                        symbolSize: 30,
                        symbolBoundingData: 50,
                        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50 ,50],
                        z: 5
                    }
                ]
            },
            'dynamicFunc': dynamicWorkData
        }, 
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生国内就业流向-2020',
                    x: 'center',
                    top: '2%',
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 26,
                    }
                },
                legend: {
                    orient: 'horizontal',
                    bottom: '7%',
                    x:'center', 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    show: true,
                    padding: 10,
                    textStyle: {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18
                    }
                },
                visualMap: {
                    show: false,
                    min: 1.5,
                    max: 72,
                    inRange: {
                        // colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '国内就业流向',
                        type: 'pie',
                        radius: ['20%','70%'],
                        center: ['50%', '46%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 8,
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        label: {
                            show: true,
                            position: 'inside', 
                            formatter: '{c} %', 
                            fontSize: 16, 
                            fontWeight: 'bold'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '24',
                                fontWeight: 'bold',
                                borderColor: 'black',
                                color: 'white',
                            }
                        },
                        data: [
                            { value: 65.28, name: '江苏' },
                            { value: 5.49, name: '浙江' },
                            { value: 5.43, name: '上海' },
                            { value: 2.5, name: '广东' },
                            { value: 1.59, name: '贵州' },
                            { value: 19.71, name: '其他' },
                        ].sort(function (a, b) {
                            return b.value - a.value;
                        }),
                    }
                ]
            },
            'dynamicFunc': workFlowPieChange
        },
        {
            'chartOpt': {
                title: {
                    text: '2020-22届毕业生就业单位情况-2020',
                    textAligh: 'center',
                    x:'center', 
                    top: '2%', 
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: 'bolder',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 24,
                    }
                },
                grid: {
                    top: '10%',
                    left: '4%',
                    right: '4%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['其他企业', '中初教育', '国有企业', '三资企业', '机关单位'],
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: 14,
                        fontWeight: 'bold'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        color: 'rgba(255, 255, 255, 0.9)',
                        formatter: '{value} %'
                    }
                },
                itemStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                }, 
                series: [
                    {
                        name: 'Forest',
                        type: 'bar',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [
                            {
                                value: 40.02,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#3DF2F2' },
                                        { offset: 0.5, color: '#2995D9' },
                                        { offset: 1, color: '#074E8C' }
                                    ])
                                }
                            }, 
                            {
                                value: 32.44,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#F2CB05' },
                                        { offset: 0.5, color: '#F28705' },
                                        { offset: 1, color: '#D95204' }
                                    ])
                                }
                            }, 
                            {
                                value: 12.37,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#DEF2B3' },
                                        { offset: 0.5, color: '#55A605' },
                                        { offset: 1, color: '#488C04' },

                                    ])
                                }
                            }, 
                            {
                                value: 3.7,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#F24405' },
                                        { offset: 0.5, color: '#F25C05' },
                                        { offset: 1, color: '#F27405' },

                                    ])
                                }
                            }, 
                            {
                                value: 3.52,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#66CAF2' },
                                        { offset: 0.5, color: '#0388A6' },
                                        { offset: 1, color: '#03658C' },
                                    ])
                                }
                            }, 
                        ],
                        label: {
                            show: true, 
                            fontSize: 16, 
                            fontWeight: 'bolder',
                            formatter: '{c} %',
                            color: 'rgb(255, 255, 255)'
                        },
                    },
                ]
            },
            'dynamicFunc': workPlaceBarChange
        },
    ],
    'tables': [
        {
            'tHead': ['Time', 'A', 'B', 'C', 'D'],
            'tBody': [
                { datA: '2.35', datB: '0.48', datC: '2.16', datD: '1.72', index: '0' },
                { datA: '2.19', datB: '0.26', datC: '1.93', datD: '1.51', index: '1' },
                { datA: '2.02', datB: '0.18', datC: '1.72', datD: '1.28', index: '2' },
                { datA: '1.88', datB: '0.37', datC: '1.56', datD: '1.08', index: '3' },
                { datA: '1.74', datB: '0.75', datC: '1.41', datD: '0.92', index: '4' },
                { datA: '1.59', datB: '1.03', datC: '1.30', datD: '0.81', index: '5' },
                { datA: '1.46', datB: '1.18', datC: '1.22', datD: '0.73', index: '6' },
                { datA: '1.39', datB: '1.18', datC: '1.25', datD: '0.96', index: '7' },
                { datA: '1.45', datB: '0.99', datC: '1.46', datD: '1.21', index: '8' },
                { datA: '1.70', datB: '0.73', datC: '1.72', datD: '1.44', index: '9' },
                { datA: '1.89', datB: '0.52', datC: '1.78', datD: '1.42', index: '10' },
                { datA: '1.89', datB: '0.35', datC: '1.70', datD: '1.33', index: '11' },
            ]
        },

    ],
};
