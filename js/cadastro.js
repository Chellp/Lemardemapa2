import { Motorista } from "./Motorista.js";
import { GuiaTuristico } from "./GuiaTuristico.js"

const tipoCadastro = document.getElementById('tipoCadastro');
tipoCadastro.addEventListener('change', ()=>{

    if(tipoCadastro.value === 'motoristaOption'){
        const formGuiaTur = document.getElementById('cadastro-guia');
        formGuiaTur.style.display= 'none';
        const formMotorista = document.getElementById('cadastro-motorista');
        formMotorista.style.display= 'inherit';
        const cadastrarMotoristaBtn = document.getElementById('cadastrarMotorista')
        cadastrarMotoristaBtn.style.display = 'none';
       
    }
    else if(tipoCadastro.value === 'guiaTurOption'){
        const formMotorista = document.getElementById('cadastro-motorista');
        formMotorista.style.display= 'none';
    }
})


    /* const possuiCarro = document.getElementsByName('possuiCarro');
    possuiCarro.addEventListener('change', ()=>{

        if(possuiCarro.value === 'sim'){
            alert('ok')
        }
    }) */



const cadastrarCarroBtn = document.getElementById('CadastrarCarro-btn');
cadastrarCarroBtn.addEventListener('click', cadastrarCarro)



function cadastrarCarro(id, e){
    e.preventDefault();



    const carro = new Carro
}
