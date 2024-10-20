function doortellen(getal, printOneven) {
  for (let i = getal; i < 100; i++) {
    if (printOneven) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    } else {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}
doortellen(15, false);
