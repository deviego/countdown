import contagem from "./countdown.js";

const countdown = new contagem("17 january 2022 08:00:00 GMT-0300")
  
const time = document.querySelectorAll("[data-time]")
function mostrarTempo(){time.forEach((tempo, index) => {
  tempo.innerHTML = countdown.total[index]
});

}
mostrarTempo()
setInterval(mostrarTempo, 1000)



