function tinhCanChi() {
    let namInput = document.getElementById("namDuong").value;
    let nam = parseInt(namInput);

    // Validate kiểm tra dữ liệu
    if (isNaN(nam) || nam < 1) {
        alert("Vui lòng nhập năm hợp lệ!");
        document.getElementById("canChi").value = "";
        return;
    }

    let can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    let chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mẹo", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    let tenCan = can[nam % 10];
    let tenChi = chi[nam % 12];

    document.getElementById("canChi").value = `${tenCan} ${tenChi}`;
}
