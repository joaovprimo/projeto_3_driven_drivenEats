function opcaoPrato(elemento){
const opcaoClicada = document.querySelector(".pratos .selecionado");
if (opcaoClicada !== null){
    opcaoClicada.classList.remove("selecionado");
    }
elemento.classList.add("selecionado");
}

function opcaoBebida(elemento){
    const opcaoClicada = document.querySelector(".bebidas .selecionado");
    if (opcaoClicada !== null){
        opcaoClicada.classList.remove("selecionado");
        }
    elemento.classList.add("selecionado");
    }

    function opcaoDoces(elemento){
        const opcaoClicada = document.querySelector(".doces .selecionado");
        if (opcaoClicada !== null){
            opcaoClicada.classList.remove("selecionado");
            }
        elemento.classList.add("selecionado");
        }