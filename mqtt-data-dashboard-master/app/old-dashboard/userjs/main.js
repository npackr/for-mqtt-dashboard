/* alert('Hello World!'); */

/* Lập hàm

    CÁC THUỘC TÍNH SỰ KIỆN
    '.' bắt Class
    '#' bắt ID
*/
// AJAX URL Local
var urllocal='http://viennhagroup.com/test/data.php';
// AJAX Post method
function queryDataPost(url,dataSend,callback){
    
    $.ajax({
        type: 'post',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'json',
        success: callback
    });
}
// AJAX Get method
function queryDataGet(url,dataSend,callback){
    
    $.ajax({
        type: 'get',
        url: url,
        data: dataSend,
        async: true,
        dataType: 'text',
        success: callback
    });
}
// AJAX Example
function HelloWorld() {
    var dataSend = { event: 'guitext' }
    queryDataGet(urllocal)
}
// Ẩn các form chưa cần thiết
function swapMain(showing_form) {
    console.log('Function swapMain is started');
    $('.form_thongtintheloai').addClass('is-hidden');
    $('.form_thongtintacgia').addClass('is-hidden');
    $('.form_thongtinnhaxuatban').addClass('is-hidden');
    $('.form_dondathang').addClass('is-hidden');
    $('.' + showing_form).removeClass('is-hidden');
    console.log('Function swapMain have finished');
}
// Kiểm tra độ dài của trường textBox
function checkTextBoxLength(object, needlength) {
    // Lấy giá trị từ object đưa vào value
    value = $(object).val();
    console.log('Độ dài của trường' + object + ' là ' + value.length);
    // Kiểm tra độ dài của giá trị trong value
    if (value.length != needlength) {
        return false;
    } else {
        return true;
    }
}

// Kiểm tra trường có phải toàn là số hay không
function isNumber(n) {
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
}

//Kiểm tra trường có phải là email hay không
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

/* Bắt sự kiện click */

// Bắt sự kiện click menu thể loại
$('.menu_theloai').click(function () {
    console.log('.menu_theloai is clicked');
    swapMain('form_thongtintheloai');
    breadcrumbcode = '<li><a href="#"><i class="fa fa-home"></i> Danh mục</a></li>' +
        '<li class="active"><a href="#">Thể loại</a></li>';
    $('.titlebreadcrumb').html(breadcrumbcode);
});
// Bắt sự kiện click menu tác giả
$('.menu_tacgia').click(function () {
    console.log('.menu_tacgia is clicked');
    swapMain('form_thongtintacgia');
    breadcrumbcode = '<li><a href="#"><i class="fa fa-home"></i> Danh mục</a></li>' +
        '<li class="active"><a href="#">Tác giả</a></li>';
    $('.titlebreadcrumb').html(breadcrumbcode);
});
//Bắt sự kiện click menu nhà xuất bản
$('.menu_nxb').click(function () {
    console.log('.menu_nxb is clicked');
    swapMain('form_thongtinnhaxuatban');
    breadcrumbcode = '<li><a href="#"><i class="fa fa-home"></i> Danh mục</a></li>' +
        '<li class="active"><a href="#">Nhà xuất bản</a></li>';
    $('.titlebreadcrumb').html(breadcrumbcode);
});
// Bắt sự kiện click menu sách
$('.menu_sach').click(function () {
    console.log('.menu_sach is clicked');
    swapMain('form_thongtinsach');
    breadcrumbcode = '<li><a href="#"><i class="fa fa-home"></i> Danh mục</a></li>' +
        '<li class="active"><a href="#">Sách</a></li>';
    $('.titlebreadcrumb').html(breadcrumbcode);
});
// Bắt sự kiện click menu đơn đặt hàng
$('.menu_dondathang').click(function () {
    console.log('.menu_dondathang is clicked');
    swapMain('form_dondathang');
    breadcrumbcode = '<li><a href="#"><i class="fa fa-home"></i> Danh mục</a></li>' +
        '<li class="active"><a href="#">Đơn đặt hàng</a></li>';
    $('.titlebreadcrumb').html(breadcrumbcode);
})
//Bắt sự kiện click button Xử lý đơn hàng trên form Đơn đặt hàng
$('.form_dondathang').on('click', '.btn_XuLyDonHang', function () {
    console.log('.btn_XuLyDonHang is clicked');
    $('#modal_XuLyDonHang').modal("show");
});
//Bắt sự kiện click button Xóa trên form Đơn đặt hàng
$('.form_dondathang').on('click', '.btn_Xoa', function () {
    console.log('.btn_Xoa in .form_DonDatHang is clicked');
    bootbox.confirm('Bạn có chắc muốn xóa đơn hàng này không?', function (result) {
        if (result == true) {
            console.log('User selected OK')
        } else {
            console.log('User selected Cancel')
        }
    })
});

/* Thông báo alert */

// Thông báo thất bại
function alert_unsuccessful(msg) {
    bootbox.alert({
        size: 'small',
        title: '<span style="color: red;">Unsucessful</style>',
        message: msg,
        callback: function () { }
    })
}
// Thông báo thành công
function alert_successful(msg) {
    bootbox.alert({
        size: 'small',
        title: '<span style="color: green;">Sucessful</style>',
        message: msg,
        callback: function () { }
    })
}
// Thông báo thông tin
function alert_information(msg) {
    bootbox.alert({
        size: 'small',
        title: '<span style="color: blue;">Information</style>',
        message: msg,
        callback: function () { }
    })
}
// Thông báo lỗi
function alert_erorr(msg) {
    bootbox.alert({
        size: 'small',
        title: '<span style="color: blue;">Erorr</style>',
        message: msg,
        callback: function () { }
    })
}