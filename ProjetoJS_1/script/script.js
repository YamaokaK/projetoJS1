//Exercicio 1
function aumento(){
    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);
    var desconto = Number((n2 / 100 ) * n1);
    var valorTotal = Number(desconto + n1);
    document.getElementById('resultado1').innerHTML= "Salário: "+ valorTotal;
}

//Exercicio 2
function areaTriangulo(){
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var area = (base * altura) / 2;
    document.getElementById("areaTotal").value = area;
}

//Exercicio 3
function mediaPonderada(){
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var notaPonderada = (nota1 * 0.3) + (nota2 * 0.7);
    document.getElementById('mediaResultado').innerHTML = notaPonderada.toFixed(2)
}

//Exercicio 4
function calculoIdade(){
    var nascimento = document.getElementById('nascimento').value;
    var dataAtual = new Date();
    var idadeAnos = dataAtual.getFullYear() - nascimento;
    var idadeMeses = idadeAnos * 12;
    var idadeDias = idadeAnos * 365;
    var idadeHoras = idadeDias * 24;
    var idadeMinutos = idadeHoras * 60;
    var idadeSemanas = idadeDias / 7;
    var idade2050 = 2050 - nascimento;

    document.getElementById('idadeAnos').innerHTML = idadeAnos;
    document.getElementById('idadeMeses').innerHTML = idadeMeses; 
    document.getElementById('idadeDias').innerHTML = idadeDias;
    document.getElementById('idadeHoras').innerHTML = idadeHoras;
    document.getElementById('idadeMinutos').innerHTML = idadeMinutos;
    document.getElementById('idadeSemanas').innerHTML = idadeSemanas.toFixed(0);
    document.getElementById('idade2050').innerHTML =  idade2050;
    
}

//Exercicio 5
function calculoGasosa(){
    var distancia = document.getElementById('distancia').value;
    var volume = document.getElementById('gasosa').value;
    var mediaGasosa = distancia / volume;
    document.getElementById('resultadoGasosa').value =  mediaGasosa.toFixed(2) + " Km/L"
}

//Exercicio 6
function calculoTrabalho(){
    var hrTrabalhada = document.getElementById("hrTrabalhadas").value;
    var hrPreco = 30;
    var horaExtra = hrPreco * 3;
    var descontoAlimentacao = 1.50;
    var salarioBruto = 0;
    var alimentacao = 0;
    var salarioLiquido = 0;

    if (hrTrabalhada <= 40){
        salarioBruto = hrTrabalhada * hrPreco;
    }
    else{
        salarioBruto = 40 * hrPreco + (hrTrabalhada - 40) * horaExtra;
    }

    alimentacao = (hrTrabalhada / 8) * descontoAlimentacao;
    salarioLiquido = salarioBruto - alimentacao;

    document.getElementById('salarioBruto').value = "R$ " + salarioBruto.toFixed(2);
    document.getElementById('alimentacao').value = "R$ " + alimentacao.toFixed(2);
    document.getElementById('salarioLiquido').value = "R$ " + salarioLiquido.toFixed(2);
}

//Exercicio 7
function gerarNumero(){
    var numeroAleatorio = Math.floor(Math.random()*100) + 1;
    document.getElementById('number').value = numeroAleatorio;

    if (numeroAleatorio % 2 == 0){
        document.getElementById('msg').innerHTML = "Número Par!";
    }
    else{
        document.getElementById('msg').innerHTML = "Número é Impar!"
    }
}