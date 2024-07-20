let text1 = prompt(`Ismingizni kiriting`);
let text2 = prompt(`Harf kiriting`);
let Kichik = text1.toLowerCase();
let Katta = text1.toUpperCase();

if (Kichik.includes(text2.toLowerCase()) || Katta.includes(text2.toUpperCase())) {
    alert(`${text1} da ${text2} bor`);
} else {
    alert(`${text1} da ${text2} yo'q`);
}