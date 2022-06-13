
let prato;
let bebida;
let doces;
let precoPrato = 0;
let precoBebida = 0;
let precoDoces = 0;
let valorfinal = 0;

function opcaoPrato(elemento){
    prato = elemento.innerHTML;
    const opcaoClicadaprato = document.querySelector(".pratos .selecionado");
if (opcaoClicadaprato !== null){
    opcaoClicadaprato.classList.remove("selecionado");
    }
elemento.classList.add("selecionado");
liberaBotao();
buscaValorprato();
}

function opcaoBebida(elemento){
    bebida = elemento.innerHTML;
   const opcaoClicadabebida = document.querySelector(".bebidas .selecionado");
    if (opcaoClicadabebida !== null){
        opcaoClicadabebida.classList.remove("selecionado");
        }
    elemento.classList.add("selecionado");
    liberaBotao();
    buscaValorbebida();
    }

function opcaoDoces(elemento){
    doces = elemento.innerHTML;  
   const opcaoClicadadoces = document.querySelector(".doces .selecionado");
        if (opcaoClicadadoces !== null){
            opcaoClicadadoces.classList.remove("selecionado");
            }
        elemento.classList.add("selecionado");
        liberaBotao();
        buscaValordoce();
        }

 function liberaBotao(){
   let botaoVerde = document.querySelector(".botao");
   let textobotao = document.querySelector(".botao p");
    if(prato && bebida && doces){
        botaoVerde.classList.add("selecionado-botao");
        textobotao.innerHTML = 'Fechar pedido';
   } 
 }  
 function buscaValorprato (){
    let valorPrato = document.querySelector(".pratos .selecionado .preco p");
    valorPrato = valorPrato.innerHTML;
    precoPrato = Number (valorPrato);
    precoTotal(precoPrato);
 }
 function buscaValorbebida (){
    let  valorBebida = document.querySelector(".bebidas .selecionado .preco p"); 
    valorBebida = valorBebida.innerHTML;
    precoBebida = Number (valorBebida); 
    precoTotal(precoBebida);
 }
 function buscaValordoce (){
    let  valorDoce = document.querySelector(".doces .selecionado .preco p"); 
    valorDoce = valorDoce.innerHTML;
    precoDoces = Number (valorDoce); 
    precoTotal(precoDoces);
 }

 function precoTotal(preco){
valorfinal = valorfinal + preco;
console.log(valorfinal);
 }