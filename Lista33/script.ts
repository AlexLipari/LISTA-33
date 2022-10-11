// let letra:string
// letra = "Alexandre"
// console.log(ProcurarVogais(letra))
// function ProcurarVogais(letra:string):number{
     
//    let resultado = letra.match(/[aeiou]/ig)
//     return resultado.length
// }

// let numero:string = ""
// numero = "45694329"
// console.log(OrganizarDigitos(numero))
// function OrganizarDigitos(numero:string){
//     let resultado = numero.split("")
//     resultado.sort((a,b) => parseInt (b)-parseInt(a))
//     return parseInt( resultado.join(""))
// }

let palavra: string =""
palavra = "parametros"
console.log(PosicaoDoMeio(palavra))
function PosicaoDoMeio(palavra:string):void{
let tamanho :number = palavra.length
console.log(tamanho)
if(tamanho %2==0){
    console.log(palavra[(tamanho/2)-1],palavra[(tamanho/2)])
}else{
    console.log(palavra[Math.floor(tamanho/2)])
}

}