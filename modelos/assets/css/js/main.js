//capturar evento de submit do forumalario
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;

    }
    
    if (!altura) {
        setResultado('Altura invalida', false)
        return;
        
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu Imc é ${imc} ${nivelImc}.`; 

    setResultado(mensagem, true)

});

function getNivelImc(imc) {

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {

    const imc = peso / altura **2;
    return imc.toFixed(2);

}

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValide){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criarP();

    if(isValide) {p.classList.add('paragrafo-resultado')
} else  {
    p.classList.add('paragrafo-resultado');
}
    p.innerHTML = mensagem
    resultado.appendChild(p);

}