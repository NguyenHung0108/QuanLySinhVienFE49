//Khai báo prototype (Gần giống với class (lớp đối tượng) bên java,C# ,C++,...)
var SinhVien = function () {
    this.maSV = '';
    this.tenSV = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen = '';
    this.loaiSV = '';
    this.email ='';
    this.tinhDiemTrungBinh = function () {
        //this đại diện cho đối tượng sinh viên (chứa 7 thuộc tính maSV,tenSV, ...)
        return (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan)) / 3;
    };
    this.xepLoai = function () {
        var diemTrungBinh = this.tinhDiemTrungBinh();
        if (this.diemRenLuyen < 5) {
            return 'Yếu';
        } else if (this.diemRenLuyen >= 5) {
            if (diemTrungBinh < 5) {
                return 'Yếu'
            } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
                return 'Trung bình!';
            } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
                return 'Khá';
            } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
                return 'Giỏi';
            } else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
                return 'Xuất sắc';
            } else {
                return 'Điểm trung bình không hợp lệ !';
            }
        } else {
            return 'Điểm rèn luyện không hợp lệ !'
        }
    }
}
