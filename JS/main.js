alert ("Bizning saytga xush kelibsiz, saytimizga kirish uchun quyidagi so'rovnomadan o'tshingiz kerak.!");
var userName = prompt("Ismingiz");
var userAge = prompt("Yoshingiz");
var userAddres = prompt("Manzilingiz");
var userDegree = prompt("Ma'lumotingiz","O'rta")
var userWork = prompt("Ish joyingiz", "Vaqtincha ishsiz");
var userWorkExperience = prompt("Ish stajinfiz","0")
var userMale = prompt("Jinsingiz", "Erkak");
var userMarred = prompt("Oilalimiz", "Ha");
var userHobby = prompt("Hobbyingiz", "Futbol");
var userGoal = prompt("Bu satyga kirishdan maqsadingiz");

console.log("Foydalanuvchi ismi: " + userAddres + "\n" +
            "Foydalanuvchi yoshi:" + userAge + "\n" +
            "Foydalanuvchi manzili: " + userAddres + "\n" +
            "Foydalanuvchi ma'lumoti: " + userDegree + "\n" +
            "Foydalanuvchi Ish joyi: " + userWork + "\n" +
            "Foydalanuvchi Ish staji: " + userWorkExperience + "\n" +
            "Foydalanuvchi Jinsi: " + userMale + "\n" +
            "Foydalanuvchi Turmush qurganligi: " + userMarred + "\n" +
            "Foydalanuvchi Hobbysi: " + userHobby + "\n" +
            "Foydalanuvchi maqsadi: " + userGoal + "\n" );
