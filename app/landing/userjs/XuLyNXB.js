// Kiểm tra độ dài trường MaNXB
$('.btn_ThemNXB').click(function () {
    console.log('.tbox_MaNXB is clicked');
    console.log(isNaN($('.tbox_SDTNXB').val()));
    console.log(isNaN($('.tbox_EmailNXB').val()));
    // Kiểm tra độ dài mã nhà xuất bản
    if ((checkTextBoxLength('.tbox_MaNXB', 5) == true)) {
        if (isNaN($('.tbox_SDTNXB').val()) == false) {
            if (validateEmail($('.tbox_EmailNXB').val() == false)) {
                alert_successful('Thêm nhà xuất bản thành công')
            } else {
                alert_erorr('Email đã nhập không hợp lệ')
            }
        } else {
            alert_unsuccessful('Số điện thoại phải là số')
        }
    } else {
        alert_erorr('Mã nhà xuất bản phải có 5 ký tự')
    }
})

