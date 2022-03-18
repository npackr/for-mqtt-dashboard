  $(function() {
        var data1 = [];
        var totalPoints = 300;
        function GetData() {
        data1.shift();
        while (data1.length < totalPoints) {
        var prev = data1.length > 0 ? data1[data1.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        y = y < 0 ? 0 : (y > 100 ? 100 : y);
        data1.push(y);
        }
    var result = [];
    for (var i = 0; i < data1.length; ++i) {
        result.push([i, data1[i]])
        }
    return result;
    }
    var updateInterval = 100;
    var plot = $.plot($("#reatltime-chart #reatltime-chartContainer"), [
            GetData()], {
            series: {
                lines: {
                    show: true,
                    fill: true
                },
                shadowSize: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                ticks: 10
            },
            xaxis: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#79D1CF"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }
        });
        function update() {
            plot.setData([GetData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();
    });

    $(function() {
        var data = [{
            label: "Paid Signup",
            data: 60
        }, {
            label: "Free Signup",
            data: 30
        }, {
            label: "Guest Signup",
            data: 10
        }];
        var options = {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                show: true
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: ["#79D1CF", "#D9DD81", "#E67A77"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }
        };
        $.plot($("#pie-chart #pie-chartContainer"), data, options);
    });

    $(function() {
        var data = [{
            label: "Premium Member",
            data: 40
        }, {
            label: "Gold Member",
            data: 20
        }, {
            label: "Platinum Member",
            data: 10
        }, {
            label: "Silver Member",
            data: 30
        }];
        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5,
                    show: true
                }
            },
            legend: {
                show: true
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: ["#79D1CF", "#D9DD81", "#E67A77","#9972B5"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }
        };
        $.plot($("#pie-chart-donut #pie-donutContainer"), data, options);
    });

    $(function() {
        var data24Hours = [
            [0, 601],
            [1, 520],
            [2, 337],
            [3, 261],
            [4, 157],
            [5, 78],
            [6, 58],
            [7, 48],
            [8, 54],
            [9, 38],
            [10, 88],
            [11, 214],
            [12, 364],
            [13, 449],
            [14, 558],
            [15, 282],
            [16, 379],
            [17, 429],
            [18, 518],
            [19, 470],
            [20, 330],
            [21, 245],
            [22, 358],
            [23, 74]
        ];
        var data48Hours = [
            [0, 445],
            [1, 592],
            [2, 738],
            [3, 532],
            [4, 234],
            [5, 143],
            [6, 147],
            [7, 63],
            [8, 64],
            [9, 43],
            [10, 86],
            [11, 201],
            [12, 315],
            [13, 397],
            [14, 512],
            [15, 281],
            [16, 360],
            [17, 479],
            [18, 425],
            [19, 453],
            [20, 422],
            [21, 355],
            [22, 340],
            [23, 801]
        ];
        var dataDifference = [
            [23, 727],
            [22, 18],
            [21, 110],
            [20, 92],
            [19, 17],
            [18, 93],
            [17, 50],
            [16, 19],
            [15, 1],
            [14, 46],
            [13, 52],
            [12, 49],
            [11, 13],
            [10, 2],
            [9, 5],
            [8, 10],
            [7, 15],
            [6, 89],
            [5, 65],
            [4, 77],
            [3, 271],
            [2, 401],
            [1, 72],
            [0, 156]
        ];
        var ticks = [
            [0, "22h"],
            [1, ""],
            [2, "00h"],
            [3, ""],
            [4, "02h"],
            [5, ""],
            [6, "04h"],
            [7, ""],
            [8, "06h"],
            [9, ""],
            [10, "08h"],
            [11, ""],
            [12, "10h"],
            [13, ""],
            [14, "12h"],
            [15, ""],
            [16, "14h"],
            [17, ""],
            [18, "16h"],
            [19, ""],
            [20, "18h"],
            [21, ""],
            [22, "20h"],
            [23, ""]
        ];
        var data = [{
            label: "Last 24 Hours",
            data: data24Hours,
            lines: {
                show: true,
                fill: true
            },
            points: {
                show: true
            }
        }, {
            label: "Last 48 Hours",
            data: data48Hours,
            lines: {
                show: true
            },
            points: {
                show: true
            }
        }, {
            label: "Difference",
            data: dataDifference,
            bars: {
                show: true
            }
        }];
        var options = {
            xaxis: {
                ticks: ticks
            },
            series: {
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#79D1CF", "#E67A77"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            legend: {
                labelBoxBorderColor: "#000000",
    container: $("#legendcontainer26"),
                noColumns: 0
            }
        };
        var plot = $.plot($("#combine-chart #combine-chartContainer"),
                data, options);
    });

   