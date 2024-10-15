function uitlegBijTypeVanParameter(parameter) {
  if (typeof parameter === "boolean") {
    console.log("De mogelijke waarden zijn: false en true");
  } else if (typeof parameter === "number") {
    console.log("Mogelijke waarden zijn: 1, 69, 3.141592");
  } else if (typeof parameter === "string") {
    console.log('Mogelijke waarden zijn: "a", "Bart", "3"');
  } else if (typeof parameter === "object") {
    if (parameter === null) {
      console.log("De waarde is: null");
    } else {
      console.log('Mogelijke waarden zijn: [1, 2], {naam: "Bart"}, null');
    }
  } else if (typeof parameter === "undefined") {
    console.log("De waarde is: undefined");
  } else if (typeof parameter === "function") {
    console.log("De waarde is een functie, bv: function hihi() {}");
  } else {
    console.log("Geen informatie over dit type");
  }
}

// Voorbeelden
uitlegBijTypeVanParameter(5); // Mogelijke waarden zijn: 1, 69, 3.141592
uitlegBijTypeVanParameter(true); // De mogelijke waarden zijn: false en true
uitlegBijTypeVanParameter("Bart"); // Mogelijke waarden zijn: "a", "Bart", "3"
uitlegBijTypeVanParameter({ naam: "Bart" }); // Mogelijke waarden zijn: [1, 2], {naam: "Bart"}, null
uitlegBijTypeVanParameter(null); // De waarde is: null
uitlegBijTypeVanParameter(undefined); // De waarde is: undefined
uitlegBijTypeVanParameter(function () {}); // De waarde is een functie, bv: function hihi() {}
