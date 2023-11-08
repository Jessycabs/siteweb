function btn1() {
    document.getElementById("saida").innerHTML += "<p>cliquei no botão 1</p>"
}

function btn2() {
    document.getElementById("saida").innerHTML += "<p>cliquei no botão 2</p>"
}

function btn3() {
    document.getElementById("saida").innerHTML += "<p>cliquei no botão 3</p>"
}

function btn4() {
    document.getElementById("saida").innerHTML += "<p>cliquei no botão 4</p>"
}

function getDia() {
    var dataInput = document.getElementById("dia");
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    // document.getElementById("dia").value = dataAtual.getDate()
    dataInput.value = dia;
}

function exibirDataAtual() {
    var dataAtual = new Date();
    document.getElementById("dia").value = dataAnual.toLocaleDatestring('pt-BR');
}

function exibirDataFormatada(){
    var dataAtual = new date();
    var dia, mes, ano;
    dia = String(dataAtual.getDate()).padStart(2,0)
    mes = dataAtual.getmonth()
    ano = dataAtual.getfullyear()
    var data = dia +"/"+ mes +"/"+ ano;
    document.getElementById("dataFormatada").innerHTML = data;

// document.getElementById("dataFormatada").value = dataFormatada.getday();
// document.getElementById("dataFormatada").value += dataFormatada.getmonth();
// document.getElementById("dataFormatada").value += dataFormatada.getfullyear();

}

function calcularDiferenca(){
    var data1 = new Date(document.getElementById("data1").value);
    var data1 = new Date(document.getElementById("data2").value);
    var dierenca = Math.abs(data1 - data2) / (1000 * 60 * 60 * 24);
    document.getElementById("diferenca").textContent = "Diferença em dias" + diferenca
}