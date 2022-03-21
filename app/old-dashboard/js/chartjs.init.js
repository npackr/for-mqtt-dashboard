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
            labels : ["Monday","Tuesday","Wenesday","Thurstday","Friday","Saturday","Sunday"],
            datasets : [
                {
                    fillColor : "#4dd1a1",
                    strokeColor : "#4dd1a1",
                    data : [28,48,40,19,54,27,38]
                },
                {
                    fillColor : "#c75052",
                    strokeColor : "#c75052",
                    data : [34,45,54,43,56,55,65]
                },
                {
                    fillColor : "#755ad6",
                    strokeColor : "#755ad6",
                    data : [32,23,36,34,29,38,42]
                }
                
            ]

        }

        var myLine = new Chart(document.getElementById("bar-chart-js").getContext("2d")).Bar(barChartData);


        var Linedata = {
            labels : ["Monday","Tuesday","Wenesday","Thurstday","Friday","Saturday","Sunday"],
            datasets : [
                {
                    fillColor : "#4dd1a1",
                    strokeColor : "#4dd1a1",
                    pointColor : "#4dd1a1",
                    pointStrokeColor : "#fff",
                    data : [100,159,190,281,156,155,140]
                },
                {
                    fillColor : "#755ad6",
                    strokeColor : "#755ad6",
                    pointColor : "#755ad6",
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
                color:"#c75052"
            },
            {
                value : 50,
                color : "#D9DD81"
            },
            {
                value : 100,
                color : "#755ad6"
            }

        ];

        var myPie = new Chart(document.getElementById("pie-chart-js").getContext("2d")).Pie(pieData);



        var donutData = [
            {
                value: 30,
                color:"#c75052"
            },
            {
                value : 50,
                color : "#D9DD81"
            },
            {
                value : 100,
                color : "#755ad6"
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
if (top.location != location) {
    top.location.href = document.location.href ;
}
$(function(){
    window.prettyPrint && prettyPrint();
    $('.default-date-picker').datepicker({
        format: 'mm-dd-yyyy'
    });
    $('.dpYears').datepicker();
    $('.dpMonths').datepicker();


    var startDate = new Date(2012,1,20);
    var endDate = new Date(2012,1,25);
    $('.dp4').datepicker()
        .on('changeDate', function(ev){
            if (ev.date.valueOf() > endDate.valueOf()){
                $('.alert').show().find('strong').text('The start date can not be greater then the end date');
            } else {
                $('.alert').hide();
                startDate = new Date(ev.date);
                $('#startDate').text($('.dp4').data('date'));
            }
            $('.dp4').datepicker('hide');
        });
    $('.dp5').datepicker()
        .on('changeDate', function(ev){
            if (ev.date.valueOf() < startDate.valueOf()){
                $('.alert').show().find('strong').text('The end date can not be less then the start date');
            } else {
                $('.alert').hide();
                endDate = new Date(ev.date);
                $('.endDate').text($('.dp5').data('date'));
            }
            $('.dp5').datepicker('hide');
        });

    // disabling dates
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    var checkin = $('.dpd1').datepicker({
        onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
            if (ev.date.valueOf() > checkout.date.valueOf()) {
                var newDate = new Date(ev.date)
                newDate.setDate(newDate.getDate() + 1);
                checkout.setValue(newDate);
            }
            checkin.hide();
            $('.dpd2')[0].focus();
        }).data('datepicker');
    var checkout = $('.dpd2').datepicker({
        onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function(ev) {
            checkout.hide();
        }).data('datepicker');
});



$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

$(".form_datetime-component").datetimepicker({
    format: "dd MM yyyy - hh:ii"
});

$(".form_datetime-adv").datetimepicker({
    format: "dd MM yyyy - hh:ii",
    autoclose: true,
    todayBtn: true,
    startDate: "2013-02-14 10:00",
    minuteStep: 10
});

$(".form_datetime-meridian").datetimepicker({
    format: "dd MM yyyy - HH:ii P",
    showMeridian: true,
    autoclose: true,
    todayBtn: true
});


$('.timepicker-default').timepicker();


$('.timepicker-24').timepicker({
    autoclose: true,
    minuteStep: 1,
    showSeconds: true,
    showMeridian: false
});

//timepicker end

//colorpicker start

$('.colorpicker-default').colorpicker({
    format: 'hex'
});
$('.colorpicker-rgba').colorpicker();




$('#my_multi_select1').multiSelect();
$('#my_multi_select2').multiSelect({
    selectableOptgroup: true
});

$('#my_multi_select3').multiSelect({
    selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
    selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
    afterInit: function (ms) {
        var that = this,
            $selectableSearch = that.$selectableUl.prev(),
            $selectionSearch = that.$selectionUl.prev(),
            selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
            selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

        that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
            .on('keydown', function (e) {
                if (e.which === 40) {
                    that.$selectableUl.focus();
                    return false;
                }
            });

        that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
            .on('keydown', function (e) {
                if (e.which == 40) {
                    that.$selectionUl.focus();
                    return false;
                }
            });
    },
    afterSelect: function () {
        this.qs1.cache();
        this.qs2.cache();
    },
    afterDeselect: function () {
        this.qs1.cache();
        this.qs2.cache();
    }
});


$('#spinner1').spinner();
$('#spinner2').spinner({disabled: true});
$('#spinner3').spinner({value:0, min: 0, max: 10});
$('#spinner4').spinner({value:0, step: 5, min: 0, max: 200});

$('.wysihtml5').wysihtml5();

function onAddTag(tag) {
    alert("Added a tag: " + tag);
}
function onRemoveTag(tag) {
    alert("Removed a tag: " + tag);
}

function onChangeTag(input,tag) {
    alert("Changed a tag: " + tag);
}

$(function() {

    $('#tags_1').tagsInput({width:'auto'});
    $('#tags_2').tagsInput({
        width: '250',
        onChange: function(elem, elem_tags)
        {
            var languages = ['php','ruby','javascript'];
            $('.tag', elem_tags).each(function()
            {
                if($(this).text().search(new RegExp('\\b(' + languages.join('|') + ')\\b')) >= 0)
                    $(this).css('background-color', 'yellow');
            });
        }
    });
});
