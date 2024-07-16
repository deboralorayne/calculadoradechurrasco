document.getElementById('calcular').addEventListener('click', function(){
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carne = (homens * 500 + mulheres * 300 + criancas *200) / 1000;
    const frango = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    const linguica = (homens * 200 + mulheres * 200 + criancas * 200) / 1000;
    const refrigerante = (homens * 300 + mulheres * 400 + criancas * 200) / 1000;
    const cerveja = (homens * 800 + mulheres * 500) / 1000;

    document.getElementById('resultado').innerHTML = `
        <h2>Quantidade necessária:</h2>
        <p>Carne bovina: ${carne.toFixed(2)} kg</p>
        <p>Frango: ${frango.toFixed(2)} kg</p>
        <p>Linguiça: ${linguica.toFixed(2)} kg</p>
        <p>Refrigerante: ${refrigerante.toFixed(2)} litros</p>
        <p>Cerveja: ${cerveja.toFixed(2)} litros</p>
    `
    
});