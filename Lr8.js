let userName = prompt("Введіть ваше ім'я:");
document.getElementById("username").textContent = userName;
let U = 0;
let C = 0;
function play() {
    const user = Math.floor(Math.random() * 10) + 1;
    const computer = Math.floor(Math.random() * 10) + 1;
    document.getElementById("user").textContent = user;
    document.getElementById("computer").textContent = computer;
    if (user > computer) {
        U += 1;
    } else if (computer > user) {
        C += 1;
    }
    document.getElementById("userO").textContent = U;
    document.getElementById("computerO").textContent = C;
    if (U === 3 || C === 3) {
        document.getElementById("genBtn").disabled = true;
        alert(U === 3 ? userName + " переміг!" : "Computer переміг!");
    }
}
document.getElementById("genBtn").addEventListener("click", play);