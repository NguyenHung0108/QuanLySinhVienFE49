var SinhVienService = function () {
    this.xoaSinhVien = function (maSV) {
        return axios({
            url:'http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/' + maSV,
            method:'DELETE',
        }) 
    };
    this.layThongTinSV = function(maSV) {
        return axios({
            url: 'http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/' + maSV,
            method: 'GET'
        })
    }
    this.capNhatSV = function (sinhVienUpdate) {
        return axios ({
            url: 'http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien',
            method: 'PUT',
            data: sinhVienUpdate
        })
    }
}