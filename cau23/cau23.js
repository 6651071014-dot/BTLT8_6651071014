function tinhLuong() {
    let luong = parseFloat(document.getElementById("luong").value) || 0;
    let heSo = parseFloat(document.getElementById("heSo").value) || 0;
    
    let ketQua = luong * heSo;
    document.getElementById("luongThang").value = ketQua;
}
