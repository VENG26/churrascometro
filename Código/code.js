    /*Variaveis globais*/
let quantidadeDeAdultos = document.getElementById("adultos");
let quantidadeDeCriancas = document.getElementById("criancas");
let tempoDeDuracao = document.getElementById("duracao");

let resultado =document.getElementById("resultado")

    /* Funções */
    

function calcular(){ 
    /* reseta o resultado */
    reset();
    /* Variaveis do calculo */

    let duracao = 0;
    let adultos = 0;
    let criancas = 0;

    duracao = 0 + tempoDeDuracao.value;
    adultos = 0 + Math.round(quantidadeDeAdultos.value);
    criancas = 0 + Math.round(quantidadeDeCriancas.value);
    
    let meat = meatFH(duracao);
    let drinks = beerFH(duracao);
    let softDrinks = softDrinksFH(duracao);

     /* Valor de input */
    document.getElementById("adultos").value = null;
    document.getElementById("criancas").value = null;
    document.getElementById("duracao").value = null;
    

    /* Carne */
    carnePorPessoaAdulta = adultos * meat;
    carnePorCrianca = (criancas * meat) / 2;
    let carne = carnePorPessoaAdulta + carnePorCrianca;

    /* Cerveja */
    bebidasPorPessoaAdulta = adultos * drinks;
    let alcolica = bebidasPorPessoaAdulta;



    /* Bebidas não alcólicas */

    let naoAlcolicaPorPessoa = (criancas / 2) + adultos;
    let refri = bebidaNaoAlolica(naoAlcolicaPorPessoa, softDrinks);


    /* Devolver */
    resultado.innerHTML += "<div><h3>" + "Para um churrasco com  " + adultos + " " + plural(adultos) + " e " + criancas + " " +plural2(criancas) + " por um periodo de " + parseFloat(duracao) + " h " +  " você vai precisar de :" + "</h3></div>"
    resultado.innerHTML += "<p id='carne'>" + carne + " Kg" + "  de carne" + " " + "</p>" + "<hr>";
    resultado.innerHTML += "<p id='cerveja'>" + parseInt(alcolica) + " " + plural3(alcolica) + "  de cerveja" + "</p>" + "<hr>";
    resultado.innerHTML += "<p id='refrigerante'>" + parseInt(refri) + " " + plural4(refri) + "  de bebida não alcólica" + "</p>" + "<hr>";
    resultado.innerHTML += "<div id='botao2'><button onclick='reset()'>Resetar</button></div>"
}
 /* Função de texto */
    function bebidaNaoAlolica(naoAlcolicaPorPessoa, softDrinks){
        if (naoAlcolicaPorPessoa < 1 ){
            return 0;
            }else{
                return naoAlcolicaPorPessoa * softDrinks;
            }
    }
    /*Plural */
    function plural(adultos){
        if (adultos >= 2){
            return "adultos"
        }else{
            return "adulto"
        }
    }

    function plural2(criancas){
        if (criancas >= 2){
            return "crianças"
        }else{
            return "criança"
        }
    }
    function plural3(alcolica){
        if (alcolica >= 2){
            return "Latas"
        }else{
            return "Lata"
        }
    }
    function plural4(refri){
        if (refri >= 2){
            return "Litros"
        }else{
            return "Litro"
        }
    }

/* Funções de calculo */
function meatFH(duracao){
    if (duracao > 0 ){
        return 0.2 * duracao;
    }else if (duracao <= 0 ){
        return 0;
    }
}

function beerFH(duracao){
    if (duracao > 0 ){
        return 1 * duracao;
    }else {
        return 0;
    }
}

function softDrinksFH(duracao){
    if (duracao > 0 ){
        return 0.3 * duracao;
    }else{
        return 0;
    }
}

function reset(){
    resultado.innerHTML = null
}