const arr = ["hola", "Fotosíntesis", "Fusible", "yo"];

function deletreo(palabra) {
  palabra.slice("");
  const array = [];
  for (const letra of palabra.split("")) {
    const primeraLetra = palabra[0];
    array.push(`-${letra}`);
  }
  array[0] = array[0].replace("-", "");

  return array;
}

deletreo(arr[1]);

function analizaPalabras(arrayPalabras) {
  for (const i in arrayPalabras) {
    console.log(`########`);
    console.log(`Palabra ${i}: ${arrayPalabras[i]}`);
    console.log(`Nº de caracteres: ${arrayPalabras[i].length}`);
    console.log(`Deletreo: ${deletreo(arrayPalabras[i]).join("")}`);
    if (
      arrayPalabras[i].length % 2 === 0 &&
      arrayPalabras[i][0] === arrayPalabras[i][0].toUpperCase()
    ) {
      console.log("La palabra es par y empieza por mayúscula");
    } else if (
      arrayPalabras[i].length % 2 !== 0 &&
      arrayPalabras[i][0] === arrayPalabras[i][0].toUpperCase()
    ) {
      console.log("La palabra no es par y empieza por mayúscula");
    } else if (
      arrayPalabras[i].length % 2 === 0 &&
      arrayPalabras[i][0] !== arrayPalabras[i][0].toUpperCase()
    ) {
      console.log("La palabra es par y no empieza por mayúscula");
    } else if (
      arrayPalabras[i].length % 2 !== 0 &&
      arrayPalabras[i][0] !== arrayPalabras[i][0].toUpperCase()
    ) {
      console.log("La palabra no es par y no empieza por mayúscula");
    }
    if (arrayPalabras[i].includes("ble")) {
      console.log('La palabra sí contiene "ble"');
    } else {
      console.log('La palabra no contiene "ble"');
    }
  }
}

analizaPalabras(arr);
