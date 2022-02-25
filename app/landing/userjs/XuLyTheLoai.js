$('.btn_ThemTheLoai').click(function () {
    console.log('.btn_ThemTheLoai is clicked');
    var MaTL = $('.input_MaTL').val();
    var TenTL = $('.input_TenTL').val();

    if (MaTL == '') {
        alert_unsuccessful('Mã thể loại không thể để trống');
    } else if (TenTL == '') {
        alert_unsuccessful('Tên thể loại không thể để trống');
    } else {
        alert_successful('Đã thêm thể loại ' + TenTL + ' có mã ' + MaTL + ' vào cơ sở dữ liệu');
    }
})

$('.btn_LuuTheLoai').click(function () {
    console.log('.btn_LuuTheLoai is clicked');
    var MaTL = $('.input_MaTL').val();
    var TenTL = $('.input_TenTL').val();

    if (MaTL == '') {
        alert_unsuccessful('Mã thể loại không thể để trống');
    } else if (TenTL == '') {
        alert_unsuccessful('Tên thể loại không thể để trống');
    } else {
        alert_successful('Đã lưu thể loại ' + TenTL + ' có mã ' + MaTL + ' vào cơ sở dữ liệu');
    }
})

$('.btn_LamLaiTheLoai').click(function () {
    console.log('.btn_LamLaiTheLoai is clicked');
    
    $('.input_MaTL').val('');
    $('.input_TenTL').val('');

    alert_successful('Tạo mới thành công!');
})
