hora = document.getElementById("hora");
minuto = document.getElementById("minutos");
segundo = document.getElementById("segundos")


let relogio = setInterval(()=>{
    hora.textContent = new Date().getHours() < 10?"0"+new Date().getHours(): new Date().getHours();

    minuto.textContent = new Date().getMinutes() < 10?"0"+new Date().getMinutes(): new Date().getMinutes();

    segundo.textContent = new Date().getSeconds() < 10?"0"+new Date().getSeconds(): new Date().getSeconds();

},100)