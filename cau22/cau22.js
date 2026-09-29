function multiply() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    
    if (n1 === "" || n2 === "") {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }
    document.getElementById("result").innerText = Number(n1) * Number(n2);
}

function divide() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    
    if (n1 === "" || n2 === "") {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }
    if (Number(n2) === 0) {
        document.getElementById("result").innerText = "Không thể chia cho 0!";
        return;
    }
    document.getElementById("result").innerText = Number(n1) / Number(n2);
}
