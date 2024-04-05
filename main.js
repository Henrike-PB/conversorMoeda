function calcular() {
    const valor = document.getElementById('valor').value;
    const calculo = valor * 5.04;
    document.getElementById('dolar').textContent = 'dolar é:' + calculo.toFixed(2);
}
