function tinhTien() {
    let selectThucAn = document.getElementById("thucAn");
    let selectNuocUong = document.getElementById("nuocUong");
    let danhSachMon = document.getElementById("danhSachMon");
    let tongTienSpan = document.getElementById("tongTien");

    danhSachMon.innerHTML = "";
    let tongTien = 0;

    for (let option of selectThucAn.options) {
        if (option.selected) {
            let ten = option.text;
            let gia = parseInt(option.value);
            tongTien += gia;
            danhSachMon.innerHTML += `<tr><td>${ten}</td><td>${gia}</td></tr>`;
        }
    }

    for (let option of selectNuocUong.options) {
        if (option.selected) {
            let ten = option.text;
            let gia = parseInt(option.value);
            tongTien += gia;
            danhSachMon.innerHTML += `<tr><td>${ten}</td><td>${gia}</td></tr>`;
        }
    }

    let thoiDiem = document.querySelector('input[name="thoiDiem"]:checked').value;
    if (thoiDiem === "night") {
        tongTien = tongTien * 1.1;
    }

    tongTienSpan.innerText = tongTien.toLocaleString() + " đồng";
}
