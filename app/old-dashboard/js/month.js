/**
 * Created by westilian on 1/19/14.
 */

 (function(){
    var t;
    function size(animate){
        if (animate == undefined){
            animate = false;
        }
        clearTimeout(t);
        t = setTimeout(function(){
            $("canvas").each(function(i,el){
                $(el).attr({
                    "width":$(el).parent().width(),
                    "height":$(el).parent().outerHeight()
                });
            });
            redraw(animate);
            var m = 0;
            $(".chartJS").height("");
            $(".chartJS").each(function(i,el){ m = Math.max(m,$(el).height()); });
            $(".chartJS").height(m);
        }, 30);
    }
    $(window).on('resize', function(){ size(false); });


    function redraw(animation){
        var options = {};
        if (!animation){
            options.animation = false;
        } else {
            options.animation = true;
        }


        var barChartData = {
            labels : ["WEEK 1","WEEK 2","WEEK 3","WEEK 4" ],
            datasets : [
                {
                    fillColor : "#4dd1a1",
                    strokeColor : "#4dd1a1",
                    data : [111,134,123,145]
                },
                {
                    fillColor : "#c75052",
                    strokeColor : "#c75052",
                    data : [223,256,276,249]
                },
                {
                    fillColor : "#755ad6",
                    strokeColor : "#755ad6",
                    data : [90,87,88,64]
                }
                
            ]

        }

        var myLine = new Chart(document.getElementById("bar-chart-js").getContext("2d")).Bar(barChartData);


        var Linedata = {
            labels : ["Monday","Tuesday","Wenesday","Thurstday","Friday","Saturday","Sunday"],
            datasets : [
                {
                    fillColor : "#E67A77",
                    strokeColor : "#E67A77",
                    pointColor : "#E67A77",
                    pointStrokeColor : "#fff",
                    data : [100,159,190,281,156,155,140]
                },
                {
                    fillColor : "##755ad6",
                    strokeColor : "##755ad6",
                    pointColor : "##755ad6",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,181,56,55,40]
                },
                {
                    fillColor : "#D9DD81",
                    strokeColor : "#D9DD81",
                    pointColor : "#D9DD81",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }

            ]
        }
        var myLineChart = new Chart(document.getElementById("line-chart-js").getContext("2d")).Line(Linedata);


        var pieData = [
            {
                value: 30,
                color:"#E67A77"
            },
            {
                value : 50,
                color : "#D9DD81"
            },
            {
                value : 100,
                color : "##755ad6"
            }

        ];

        var myPie = new Chart(document.getElementById("pie-chart-js").getContext("2d")).Pie(pieData);



        var donutData = [
            {
                value: 30,
                color:"#E67A77"
            },
            {
                value : 50,
                color : "#D9DD81"
            },
            {
                value : 100,
                color : "##755ad6"
            },
            {
                value : 40,
                color : "#95D7BB"
            },
            {
                value : 120,
                color : "#4D5360"
            }

        ]
        var myDonut = new Chart(document.getElementById("donut-chart-js").getContext("2d")).Doughnut(donutData);
    }




    size(true);

}());
