let arrayNombres = [];

document.getElementById("buttonAdd").addEventListener("click", function () {
  let nombreAgregar = document.getElementById("amigo").value.trim();
  let listaAmigos = document.getElementById("listaAmigos");
  let nuevaLista = document.createElement("li");

  if (nombreAgregar == "") {
    alert("Escribe un nombre...");
  } else {
    nuevaLista.textContent = nombreAgregar;
    nuevaLista.style.color = "black";

    arrayNombres.push(nuevaLista.textContent);

    listaAmigos.appendChild(nuevaLista);
    console.log(arrayNombres);
  }

  document.getElementById("amigo").value = "";
});

document.getElementById("buttonDraw").addEventListener("click", function () {
  document.getElementById("listaAmigos").innerHTML = "";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let resultado = document.getElementById("resultado");
  let listaCreada = document.createElement("li");

  resultado.innerHTML = "";

  listaCreada.textContent = `El amigo secreto sorteado es: ${
    arrayNombres[getRandomInt(arrayNombres.length)]
  }`;
  listaCreada.style.color = "green";

  resultado.appendChild(listaCreada);
});
