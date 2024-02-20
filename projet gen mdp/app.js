const minuscules = []; //initialisation de l'alphabet
const majuscules = [];
const chiffres = [];
const symboles = [];

for (let i = 33; i < 48; i++) {
  symboles.push(String.fromCharCode(i));
}
for (let i = 58; i < 65; i++) {
  symboles.push(String.fromCharCode(i));
}
for (let i = 48; i < 58; i++) {
  chiffres.push(String.fromCharCode(i));
}
for (let i = 65; i < 91; i++) {
  majuscules.push(String.fromCharCode(i));
}
for (let i = 97; i < 123; i++) {
  minuscules.push(String.fromCharCode(i));
}
const min = document.getElementById("min");
const maj = document.getElementById("maj");
const chif = document.getElementById("chif");
const symb = document.getElementById("symb");
const input = document.getElementById("MyPass");
const jauge = document.getElementById("jauge");
let str = '';

function genaratepassword() {
  str = '';
  if (maj.checked === true && chif.checked === true && symb.checked === true && min.checked === true) {
    for (let i = 0; i < jauge.value; i++) {
    let minMajChiffSymb = chiffres.concat(majuscules, minuscules, symboles)
    let indexHasard = Math.floor(Math.random() * minMajChiffSymb.length);
    let value = minMajChiffSymb[indexHasard];
    str = str.concat('', value)
    }
    input.value = str
  }

  else if (min.checked === true && maj.checked === true && chif.checked === true) {
    for (let i = 0; i < jauge.value; i++) {
    let minMajChiff = minuscules.concat(majuscules, chiffres)
    let indexHasard = Math.floor(Math.random() * minMajChiff.length);
    let value = minMajChiff[indexHasard];
    str = str.concat('', value)
    }
    input.value = str
  }
  else if (min.checked === true && maj.checked === true && symb.checked === true) {
    for (let i = 0; i < jauge.value; i++) {
    let minMajSymb = minuscules.concat(majuscules, symboles)
    let indexHasard = Math.floor(Math.random() * minMajSymb.length);
    let value = minMajSymb[indexHasard];
    str = str.concat('', value)
    }
    input.value = str
  }
  else if (min.checked === true && chif.checked === true && symb.checked === true) {
    for (let i = 0; i < jauge.value; i++) {
    let minChiffSymb = minuscules.concat(chiffres, symboles)
    let indexHasard = Math.floor(Math.random() * minChiffSymb.length);
    let value = minChiffSymb[indexHasard];
    str = str.concat('', value)
    }
    input.value = str
  }
  else if (maj.checked === true && chif.checked === true && symb.checked === true) {
    for (let i = 0; i < jauge.value; i++) {
    let majChiffSymb = majuscules.concat(chiffres, symboles)
    let indexHasard = Math.floor(Math.random() * majChiffSymb.length);
    let value = majChiffSymb[indexHasard];
    str = str.concat('', value)
    }
    input.value = str
  }
//2 options
else if (min.checked === true && maj.checked === true) {
  let minMaj = minuscules.concat(majuscules);
  for (let i = 0; i < jauge.value; i++) {
  let indexHasard = Math.floor(Math.random() * minMaj.length);
  let value = minMaj[indexHasard];
  str = str.concat('', value)
  }
  console.log(input.value)
  input.value = str
}
else if (min.checked === true && chif.checked === true) {
  for (let i = 0; i < jauge.value; i++) {
  let minChiff = minuscules.concat(chiffres)
  let indexHasard = Math.floor(Math.random() * minChiff.length);
  let value = minChiff[indexHasard];
  str = str.concat('', value)
  }
  input.value = str
}
else if (min.checked === true && symb.checked === true) {
  for (let i = 0; i < jauge.value; i++) {
  let minSymb = minuscules.concat(symboles)
  let indexHasard = Math.floor(Math.random() * minSymb.length);
  let value = minSymb[indexHasard];
  str = str.concat('', value)
  }
  input.value = str
}
else if (maj.checked === true && chif.checked === true) {
  for (let i = 0; i < jauge.value; i++) {
  let majChiff = majuscules.concat(chiffres)
  let indexHasard = Math.floor(Math.random() * majChiff.length);
  let value = majChiff[indexHasard];
  str = str.concat('', value)
  }
  input.value = str
}
else if (maj.checked === true && symb.checked === true) {
  for (let i = 0; i < jauge.value; i++) {
  let majSymb = symboles.concat(majuscules)
  let indexHasard = Math.floor(Math.random() * majSymb.length);
  let value = majSymb[indexHasard];
  str = str.concat('', value)
  }
  input.value = str
}
else if (chif.checked === true && symb.checked === true) {
  for (let i = 0; i < jauge.value; i++) {
  let chiffSymb = chiffres.concat(symboles)
  let indexHasard = Math.floor(Math.random() * chiffSymb.length);
  let value = chiffSymb[indexHasard];
  str = str.concat('', value)
  }
  input.value = str
}
//4 options
else if (min.checked === true) {
  for (let i = 0; i < jauge.value; i++) {
    let indexHasard = Math.floor(Math.random() * minuscules.length);
    let value = minuscules[indexHasard];
    str = str.concat('', value);
}
input.value = str;
}
else if (maj.checked === true) {
for (let i = 0; i < jauge.value; i++) {
let indexHasard = Math.floor(Math.random() * majuscules.length);
let value = majuscules[indexHasard];
str = str.concat('', value)
}
input.value = str
}
else if (chif.checked === true) {
for (let i = 0; i < jauge.value; i++) {
let indexHasard = Math.floor(Math.random() * chiffres.length);
let value = chiffres[indexHasard];
str = str.concat('', value)
}
input.value = str
}
else if (symb.checked === true) {
for (let i = 0; i < jauge.value; i++) {
let indexHasard = Math.floor(Math.random() * symboles.length);
let value = symboles[indexHasard];
str = str.concat('', value)
}
input.value = str
}
}
