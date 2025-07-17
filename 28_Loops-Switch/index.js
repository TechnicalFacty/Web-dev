//switch
let day = 3;

switch (day) {
  case 1:
    console.log("📅 Monday");
    break;
  case 2:
    console.log("📅 Tuesday");
    break;
  case 3:
    console.log("📅 Wednesday");
    break;
  case 4:
    console.log("📅 Thursday");
    break;
  case 5:
    console.log("📅 Friday");
    break;
  default:
    console.log("📆 Weekend");
}


//for loop
for (let i = 1; i <= 5; i++) {
  console.log("⭐ Count: " + i);
}


for (let e = 1; e <= 10; e++) {
    console.log(e)
}

//while loop
let i = 1;

while (i <= 3) {
  console.log("🔁 While loop count: " + i);
  i++;
}


//do while loop
let a = 1;

do {
  console.log("🌀 Do-While loop count: " + a);
  a++;
} while (a <= 3);
