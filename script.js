const display = document.getElementById("display");

function start(){
    let quantidade = Number(document.getElementById("quantidade_input").value);

    let rodadas = Number(document.getElementById("rodadas_input").value);

    // bloquear numeros negativos
    if (rodadas < 0 || quantidade < 0) {
    alert("Digite apenas números positivos!");
    return;
    }
    // se algum estiver sem valor
    if (rodadas == 0 && quantidade == 0) {
    alert("Digite algum valor!");
    return;
    }
    // para avisar algum input vazio
    if (rodadas == 0){
        alert("digite algum valor na quantidade de rodadas!");
        return;
    }else if (quantidade == 0){
        alert("Digite o tamanho das opções!");
        return;
    }

    console.log(quantidade);
    console.log(rodadas);

    let sorteados = [];

    for(let i = 0; i < rodadas; i++){
        let sorteio = Math.floor(Math.random() * quantidade) + 1;
        sorteados.push(sorteio);
    }
    display.innerText = `Números sorteados: ${sorteados.join(", ")}`;
}