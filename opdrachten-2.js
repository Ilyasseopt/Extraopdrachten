function kleineletters(tekst) {
  return tekst === tekst.toLowerCase();
}

console.log(kleineletters("hallo wereld"));
console.log(kleineletters("Hallo Wereld"));
console.log(kleineletters("123abc"));
console.log(kleineletters("ABC"));
