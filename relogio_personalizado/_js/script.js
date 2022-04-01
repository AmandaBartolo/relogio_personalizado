//Horário
let hora = new Date()
let minuto = new Date()

let horaAgora = hora.getHours()
let minutoAgora = minuto.getMinutes()

let horario = document.querySelector("#horario")

horario.textContent = `Agora são ${horaAgora} horas e ${minutoAgora} minutos`

//Data
let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

let dia = new Date()
let ano = new Date()

let diaHoje = dia.getDate()
let mesHoje = meses[new Date().getMonth()]
let anoHoje = ano.getFullYear()

let data = document.querySelector("#data")

data.textContent = `Hoje é dia ${diaHoje} de ${mesHoje} de ${anoHoje}`

//Imagem
let img = document.querySelector("#imagem")

if (horaAgora >= 6 && horaAgora < 12)
{
    img.src="_images/manha.png"
    document.body.style.background = "#cba544"
    document.body.style.color = "#cba544"
}
else if (horaAgora >=12 && horaAgora < 18)
{
    img.src="_images/tarde.png"
    document.body.style.background = "#bb98a7"
    document.body.style.color = "#bb98a7"
}
else
{
    img.src="_images/noite.png"
    document.body.style.background = "#394d55"
    document.body.style.color = "#394d55"
}