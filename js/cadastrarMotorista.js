import { Motorista } from "./Motorista.js";

function cadastrarMotorista(e) {
    e.preventDefault();
    const nome = document.getElementById("nomeUserMotorista").value;
    const sobrenome = document.getElementById("sobrenomeUserMotorista").value;
    const dtNasc = document.getElementById('dtNascUserMotorista').value;
    const cpf = document.getElementById('cpfUserMotorista').value;
    const cnh = document.getElementById('cnhUserMotorista').value;
    const idiomas = document.getElementById('idiomasUserMotorista').value;
    const nacionalidade = document.getElementById('nacionalidadeUserMotorista').value;
    const descricao = document.getElementById('descUserMotorista').value;

    const nomeCarro = document.getElementById('nomeCarro').value;
    const modelo = document.getElementById("modeloCarro").value;
    const ano = document.getElementById('anoCarro').value;
    const cor = document.getElementById('corCarro').value;
    const placa = document.getElementById('placaCarro').value;

/*     const opcoesInput = document.querySelector('.possuiCarro-input').value; */

    const motorista = new Motorista (nome, sobrenome, dtNasc, cpf, cnh, idiomas, nacionalidade, descricao);
    const id = motorista.gerarId()
    motorista.cadastrarMotorista(motorista)
    motorista.cadastrarCarro(id, 'motorista', nomeCarro, modelo, ano, cor, placa);

    //idUsuario, categUsuario, nome, modelo, ano, cor, placa

    console.log(motorista);

    alert("Motorista cadastrado com sucesso!");

    const motoristaObj = {
        nomeMotorista : nome,
        sobrenomeMotorista : sobrenome,
        dtNascMotorista : dtNasc,
        cpfMotorista : cpf,
        cnhMotorista : cnh,
        idiomasMotorista : idiomas,
        nacionalidadeMotorista : nacionalidade,
        descricaoMotorista : descricao,
        nomeCarroMotorista : nomeCarro,
        modeloCarroMotorista : modelo,
        anoCarroMotorista : ano,
        placaCarroMotorista : placa

    }

    localStorage.setItem("motoristaObj", JSON.stringify(usuario));

    //window.location.href = "outraPagina.html";
}

const cadastrarMotoristaBtn = document.getElementById('cadastrarMotorista')
cadastrarMotoristaBtn.addEventListener('click', cadastrarMotorista)