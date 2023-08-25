// Задание 1

let greetings = "Привет!";
for (let i = 1; i<=2 ; i++) {
   alert(greetings);
}
// Задание 2

let i = 1;
while (i<6) {
   console.log(i);
   i++;
}

// Задание 3

let n = 7;

while(n < 23) {
   console.log(n);
   n++;
}

// Задание 4

const obj = {
   Коля: 200,
   Вася: 300,
   Петя: 400,
};
for (let key in obj) {
   console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

// Задание 5

let a = 1000;
let num = 0;

for (; a/2>50; a /= 2) {
   num++;
}
console.log(a);
console.log(num);

// Задание 6

for (let firstFriday = 5; firstFriday <= 31; firstFriday += 7) {
   console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
}