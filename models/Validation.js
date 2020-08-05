var Validation = function () {

    this.kiemTraRong = function(value,selectorError){
            //trim(): phương thức loại bỏ khoảng trống đầu và cuối của chuỗi
        if(value.trim() === ""){
            document.querySelector(selectorError).innerHTML = 'Không được bỏ trống';
            document.querySelector(selectorError).style.display='block';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display='none';
        return true;
    }
    this.kiemTraTatCaLaChuoi = function (value,selectorError) {
        var regexAllLetter = /^[a-z A-Z]+$/;
        if(regexAllLetter.test(value.trim())){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display='none';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Không được nhập số và ký tự đặc biệt';
        document.querySelector(selectorError).style.display='block';
        return false;
    }
    this.kiemTraEmail = function (value,selectorError) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value.trim())){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display='none';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Email không đúng định dạng!';
        document.querySelector(selectorError).style.display='block';
        return false;
    }
    this.kiemTraTatCaLaSo = function(value,selectorError){
        var regexNumber = /^[0-9.]+$/;
        if(regexNumber.test(value.trim())){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display='none';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Không được nhập chữ và ký tự đặc biệt!';
        document.querySelector(selectorError).style.display='block';
        return false;
    }
    this.kiemTraGiaTri = function(value,selectorError,minValue,maxValue){

        var valid = this.kiemTraTatCaLaSo(value,selectorError);
        //Nếu nhỏ hơn giá trị nhỏ nhất hoặc lớn hơn giá trị lớn nhất thì báo lỗi
        if(Number(value.trim())< minValue || Number(value.trim()) > maxValue || !valid ){
            document.querySelector(selectorError).innerHTML = `Giá trị từ ${minValue} - ${maxValue} !`;
            document.querySelector(selectorError).style.display='block';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display='none';
        return true;
    }

    this.kiemTraDoDaiChuoi = function(value,selectorError,minLength,maxLength) {
        if(value.length< minLength || value.length>maxLength){
            document.querySelector(selectorError).innerHTML = `Độ dài từ ${minLength} - ${maxLength} !`;
            document.querySelector(selectorError).style.display='block';
            return false;
        }else {
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display='none';
            return true;
        }
    }

}