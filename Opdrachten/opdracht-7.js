function doortellen(getal, printOneven) {
  for (let i = getal; i < 100; i++) {
    if (printOneven === true) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    } else if (printOneven === false) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}
doortellen(15, false);
