console.log("Todos os nomes \n ==============================================================");

feminino.forEach(

   (e) => {

        console.log(e.nome_completo);

   }

)

console.log("Todos as alturas \n ==============================================================");


let count = 0; 
while (count < feminino.length){
   console.log(feminino[count].altura);
   count++;
}

console.log("Todos as posições \n ==============================================================");
for(let outroCount = 0; outroCount < feminino.length; outroCount++){
   console.log(`Posição de ${feminino[outroCount].nome} ${feminino[outroCount].posicao}`);
}


console.log("Valor");

console.log("Descrições \n ==============================================================");
for (const about of feminino){
    console.log(`Descrição de ${about.nome} - ${about.descricao}`);
}

function exibirDados() {
   var id = parseInt(document.getElementById("idPessoa").value);
   var pessoa = feminino[id];

       if (pessoa) {
           document.getElementById("nome").textContent = pessoa.nome;
           document.getElementById("posicao").textContent = pessoa.posicao;
           document.getElementById("nascimento").textContent = pessoa.nascimento;
           document.getElementById("imagem").src = pessoa.imagem;
           document.getElementById("descricao").textContent = pessoa.descricao;

       } else {
           alert ('Id invalido')
       }

}
