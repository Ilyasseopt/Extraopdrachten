function kleineletters(tekst) {
  if (tekst === tekst.toLowerCase()) return true;
  else {
    return false;
  }
}

console.log(kleineletters("Hallo"));
console.log(kleineletters("hallo"));
