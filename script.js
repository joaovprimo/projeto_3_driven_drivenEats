
function selecionarBorda(elemento){
const opcaoClicada = document.querySelector(".selecionado")
if (opcaoClicada !== null){
    opcaoClicada.classList.remove("selecionado");
    }
elemento.classList.add("selecionado");
console.log (opcaoClicada);
}


