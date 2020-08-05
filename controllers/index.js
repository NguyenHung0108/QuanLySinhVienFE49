
//mangSinhVien: Chứa thông tin tất cả sinh viên được thêm từ form
var mangSinhVien = [];
var validate = new Validation();

document.getElementById('btnThemSinhVien').onclick = function () {
    //Lấy thông tin sinh viên thêm vào đối tượng sinh viên
    var sinhVien = new SinhVien();
    sinhVien.maSV = document.getElementById('maSinhVien').value;
    sinhVien.tenSV = document.getElementById('tenSinhVien').value;
    sinhVien.email = document.getElementById('email').value;
    sinhVien.loaiSV = document.getElementById('loaiSinhVien').value;
    sinhVien.diemHoa = document.getElementById('diemHoa').value;
    sinhVien.diemLy = document.getElementById('diemLy').value;
    sinhVien.diemToan = document.getElementById('diemToan').value;
    sinhVien.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    console.log(sinhVien);


    //Kiểm tra dữ liệu hợp lệ trước khi thêm vào mảng
    //----------Kiểm tra rổng ------------
    var valid = validate.kiemTraRong(sinhVien.maSV, '#error_maSinhVien') & validate.kiemTraRong(sinhVien.tenSV, '#error_tenSinhVien') & validate.kiemTraRong(sinhVien.email, '#error_email') & validate.kiemTraRong(sinhVien.diemHoa, '#error_diemHoa') & validate.kiemTraRong(sinhVien.diemToan, '#error_diemToan') & validate.kiemTraRong(sinhVien.diemLy, '#error_diemLy') & validate.kiemTraRong(sinhVien.diemRenLuyen, '#error_diemRenLuyen');

    //--------Kiểm tra tên là ký tự ------
    valid &= validate.kiemTraTatCaLaChuoi(sinhVien.tenSV, '#error_all_letter_tenSinhVien');

    //--------Kiểm tra email ---------
    valid &= validate.kiemTraEmail(sinhVien.email, '#error_format_email');

    //-------- Kiểm tra nhập số điểm toán lý hóa rèn luyện ----------------
    valid &= validate.kiemTraTatCaLaSo(sinhVien.diemToan, '#error_all_number_diemToan') & validate.kiemTraTatCaLaSo(sinhVien.diemLy, '#error_all_number_diemLy') & validate.kiemTraTatCaLaSo(sinhVien.diemHoa, '#error_all_number_diemHoa') & validate.kiemTraTatCaLaSo(sinhVien.diemRenLuyen, '#error_all_number_diemRenLuyen');

    //----------Kiểm tra giá trị -------------------
    valid &= validate.kiemTraGiaTri(sinhVien.diemToan, '#error_min_max_value_diemToan', 0, 10) & validate.kiemTraGiaTri(sinhVien.diemLy, '#error_min_max_value_diemLy', 0, 10) & validate.kiemTraGiaTri(sinhVien.diemHoa, '#error_min_max_value_diemHoa', 0, 10) & validate.kiemTraGiaTri(sinhVien.diemRenLuyen, '#error_min_max_value_diemRenLuyen', 0, 10);
    //-----------Kiểm tra độ dài -----
    valid &= validate.kiemTraDoDaiChuoi(sinhVien.maSV, "#error_min_max_length_maSinhVien", 4, 6);



    if (!valid) { //Nếu như valid === false => không hợp lệ
        return;
    }

    //push(): phương thức thêm 1 phần tử vào mangSinhVien
    mangSinhVien.push(sinhVien);
    console.log(mangSinhVien);
    renderTableSinhVien(mangSinhVien);
    luuLocalStorage();

}



var renderTableSinhVien = function (mangSV) {
    //Từ dữ liệu mảng tạo ra các thẻ tr tương ứng
    var chuoiTr = '';
    for (var index = 0; index < mangSV.length; index++) {
        //Mỗi lần duyệt lấy ra dữ liệu của 1 sinh viên trong mảng
        var sinhVien = mangSV[index];
        //Tạo object mới lấy dữ liệu từ mangSV[i] gán qua
        var sv =  new SinhVien(); 
        sv.maSV = sinhVien.maSV;
        sv.tenSV = sinhVien.tenSV;
        sv.email = sinhVien.email;
        sv.diemHoa = sinhVien.diemHoa;
        sv.diemToan = sinhVien.diemToan;
        sv.diemLy = sinhVien.diemLy;
        sv.diemRenLuyen = sinhVien.diemRenLuyen;
        //Từ dữ liệu sinh viên tạo ra từng dòng <tr> tương ứng
        chuoiTr += `
                <tr>
                    <td>${sv.maSV}</td>
                    <td>${sv.tenSV}</td>
                    <td>${sv.email}</td>
                    <td>${sv.xepLoai()}</td>
                    <td>${sv.tinhDiemTrungBinh()}</td>
                    <td>${sv.diemRenLuyen}</td>
                    <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')">Xóa</button></td>
                </tr>
        `
    }
    //Thoát ra vòng lặp
    document.getElementById('tableSinhVien').innerHTML = chuoiTr;
}

var xoaSinhVien = function (maSV) {
    //Từ mã sinh viên sẽ tìm ra thằng sinhVien cần xóa
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        //Mỗi lần duyệt lấy ra 1 sinhVien
        var sinhVien = mangSinhVien[index];
        if (sinhVien.maSV === maSV) //Nếu sinhVien trong mảng có mã = maSinhVien được click
        {
            //Tại vị trí đó mình sẽ xóa phần đó đi
            mangSinhVien.splice(index, 1);
        }
    }
    //Sau khi xóa xong tạo lại tableSinhVien
    renderTableSinhVien(mangSinhVien);
    luuLocalStorage();
    console.log(mangSinhVien)
}



var luuLocalStorage = function () {
    //Biến mangSinhVien => chuỗi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    //Lưu vào localstorage 
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}


var layDuLieuLocalStorage = function () {
    if (localStorage.getItem('mangSinhVien')) {
        //Lấy dữ liệu từ localstorage
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //Chuyển chuỗi localstrorage về mảng (object) và gán cho mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        //Gọi hàm render mangSinhVien => render lại table
        renderTableSinhVien(mangSinhVien);
        // console.log(mangSinhVien);
    }
}

layDuLieuLocalStorage();

