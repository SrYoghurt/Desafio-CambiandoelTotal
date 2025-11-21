let precio = 0;
let valorunidad = 400000;
const btnSumar = document.querySelector('.btn-sumar');
const btnRestar = document.querySelector('.btn-restar');
let valorTotal = document.querySelector('.valor-total');
let cantidad = document.querySelector('.cantidad');

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = valorunidad;


btnSumar.addEventListener('click', function() {
    precio = precio + valorunidad;
    valorTotal.innerHTML = precio;
    cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1;
});

btnRestar.addEventListener('click', function() {
    precio = precio -valorunidad;
    valorTotal.innerHTML = precio;
    cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1;
});