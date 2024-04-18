let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

const arrAvaliar= []


console.log(btn);

function cadastrar() {
    //códigos
    let timeInput = document.getElementById('time').value
    let nomeInput = document.getElementById('nome').value
    let posicaoInput = document.getElementById('posicao').value
    let idadeInput = document.getElementById('idade').value
    let notaInput = document.getElementById('nota').value

   


    const avaliar = {
        time: timeInput,
        nome: nomeInput,
        posicao: posicaoInput,
        idade: idadeInput,
        nota: notaInput,
      
    }

    arrAvaliar.push(avaliar)

    imprimir()

    console.log(arrAvaliar)

   /* console.log(nome, sobrenome, categoria, peso, altura)*/

    /*div.innerHTML = "NOME: " + nome + "SOBRENOME: " + sobrenome + "CATEGORIA: " + categoria;*/
    /*
    div.innerHTML = `
    <strong>NOME:</strong> ${nome} 
    <strong>SOBRENOME:</strong> ${sobrenome} 
    <strong>CATEGORIA:</strong> ${categoria}
    <strong>IMC:</strong> ${imc} - ${categoriaImc}
    `*/
}



function imprimir(){

    div.innerHTML = ''

    for (let i = 0; i < arrAvaliar.length; i++) {
    
        
 
    div.innerHTML += `

    <tr>
    <th scope="row">${i+1}</th>
    <td>${arrAvaliar[i].time}</td>
    <td>${arrAvaliar[i].nome}</td>
    <td>${arrAvaliar[i].posicao}</td>
    <td>${arrAvaliar[i].idade}</td>
    <td>${arrAvaliar[i].nota}</td>
    </tr> 

    `
   }

}

btn.addEventListener('click', cadastrar)