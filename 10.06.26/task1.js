// 7. Joriy oyda nechta kun borligini aniqlang.

function daysInMonth(){
    const kunlar = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,0).getDate();
      return kunlar
}


console.log(daysInMonth());
