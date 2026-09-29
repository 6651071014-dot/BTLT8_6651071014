function xuatThu() {
    let ngay = parseInt(document.getElementById("ngay").value);
    let thang = parseInt(document.getElementById("thang").value);
    let nam = parseInt(document.getElementById("nam").value);

    if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
        document.getElementById("ketQua").innerText = "Vui lòng nhập đủ thông tin!";
        return;
    }

    let date = new Date(nam, thang - 1, ngay);
    let dsThu = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    let tenThu = dsThu[date.getDay()];

    document.getElementById("ketQua").innerText = `${tenThu} Ngày ${ngay} tháng ${thang} năm ${nam}`;
}
