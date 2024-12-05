// #1

function hello() {
  return "Hello World!";
}
console.log(hello());

// #2

function max(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}
console.log(max(1, 2));

// #3

function nombremasalgo(nombre) {
  return "Hola, " + nombre;
}
console.log(nombremasalgo("tuti"));

// #4

function suma(numero) {
  var resultado = 0;
  for (i = 1; i <= numero; i++) {
    resultado += i;
  }
  return resultado;
}
console.log(suma(5));

// #5

function reverse(name) {
  odatluser = "";
  for (i = name.length - 1; i >= 0; i--) {
    odatluser += name[i];
  }
  return odatluser;
}
console.log(reverse("Hola"));
