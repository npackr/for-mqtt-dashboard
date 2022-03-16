
$(function () {
var chart = c3.generate({
    bindto: '#combine-chart',
    data: {
        columns: [
            ['amthanh', 30, 20, 50, 40, 60, 50,40],
            ['dien', 200, 130, 90, 240, 130, 220,180],
            ['Khac', 130, 120, 150, 140, 160, 150,120]
        ],
        types: {
            amthanh: 'bar',
            dien: 'bar',
            Khac: 'bar'
        },
        groups: [
            ['amthanh','dien']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});
});