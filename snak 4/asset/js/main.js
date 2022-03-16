let container = document.getElementById("container");

let grupOne = ["pinco"];
let grupTwo = ["giulio", "cesare", "tizio", "caio", "sempronio"];
let proxy;


if (grupOne.length > grupTwo.length) {
    proxy = grupOne.length - grupTwo.length;
    for (i = 0; i < proxy; i++) {
        grupTwo.push("ancora")
    }
} else if (grupOne.length < grupTwo.length) {
    proxy =  grupTwo.length - grupOne.length;
    for (i = 0; i < proxy; i++) {
        grupOne.push("ancora")
    }
}


container.innerHTML = `<div>${grupOne}</div><div>${grupTwo}</div>`

