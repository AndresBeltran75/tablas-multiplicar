let contador = 1;
let numero;
let salida;
let fecha = new Date().getFullYear();

document.querySelector('#autor').innerHTML = `&copy; ${fecha} Andrés Beltrán`;

const datos = (resultado) => {
    document.querySelector('#imagenes').innerHTML = '';
    for (let i = 0; i < resultado; i++) {
        let imagen = document.createElement('img');
        imagen.src = 'feliz.png';
        imagen.style.height = '50px';
        imagen.style.width = '70px';
        document.querySelector('#imagenes').appendChild(imagen);
        document.querySelector('#validar').style.display = 'block';
        document.querySelector('#siguiente').style.display = 'block';
        document.querySelector('#salida').style.display = 'block';
        document.querySelector('#imagenes').style.display = 'block';
    }
};

document.querySelector('#calcular').addEventListener('click', (evento) => {
    evento.preventDefault();
    numero = document.querySelector('#numero').value;
    salida = numero * contador;
    document.querySelector('#contador').innerHTML = `${numero} X ${contador}`;
    datos(salida);
});

document.querySelector('#validar').addEventListener('click', (evento) => {
    evento.preventDefault();
    let anterior = contador;
    const res = document.querySelector('#result').value;
    salidaActual = numero * anterior;
    if (res == salidaActual) {
        document.querySelector('#contador').innerHTML = `${numero} X ${contador} = ${salidaActual}`;
        document.querySelector('#mal').style.display = 'none';
        document.querySelector('#bien').style.display = 'block';
        document.querySelector('#result').value = '';
    } else {
        document.querySelector('#bien').style.display = 'none';
        document.querySelector('#mal').style.display = 'block';
        document.querySelector('#result').value = '';
    }
});

document.querySelector('#siguiente').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#bien').style.display = 'none';
    document.querySelector('#mal').style.display = 'none';
    let anterior = contador;
    const res = document.querySelector('#result').value;
    salidaActual = numero * anterior;
    if (res == salidaActual) {
        contador++;
        document.querySelector('#contador').innerHTML = `${numero} X ${contador}`;
        if (contador <= 10) {
            salida = numero * contador;
            datos(salida);
        } else {
            let actual = numero++;
            alert(`!Excelente completaste la tabla de multiplicar del ${actual}, ahora continua con la del ${numero}!`);
            contador = 1;
            salida = numero * contador;
            datos(salida);
            document.querySelector('#contador').innerHTML = `${numero} X ${contador}`;
            document.querySelector('#numero').value = numero;
            document.querySelector('#mal').style.display = 'none';
            document.querySelector('#bien').style.display = 'none';
        }
    } else {
        document.querySelector('#mal').style.display = 'block';
    }
    document.querySelector('#result').value = '';
});

document.querySelector('#limpiar').addEventListener('click', (e) => {
    e.preventDefault();
    contador = 1;
    document.querySelector('#contador').innerHTML = '';
    document.querySelector('#imagenes').innerHTML = '';
    document.querySelector('#numero').value = '';
    document.querySelector('#result').value = '';
    document.querySelector('#salida').style.display = 'none';
    document.querySelector('#imagenes').style.display = 'none';
    document.querySelector('#validar').style.display = 'none';
    document.querySelector('#siguiente').style.display = 'none';
    document.querySelector('#bien').style.display = 'none';
    document.querySelector('#mal').style.display = 'none';
});