var toggle_btn;
var wrapper;
var hamburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    wrapper = document.querySelector(".wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}
const main = document.querySelector(".main");
    declare();

let dark = false;

function toggleAnimation(){
    //clone the wrapper
    dark = !dark;
    let clone = wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy"); 
    document.body.classList.add("stop-scrolling");
    main.appendChild(clone);
    clone.addEventListener("animationend", ()=>{
        document.body.classList.remove("stop-scrolling");
        wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });

}

function events(){
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
}
events();

// Função para computar os votos
var votosAprovar = 0;
var votosReprovar = 0;

function votar() {
    var voto = document.querySelector('input[name="voto"]:checked').value;
    var resultDiv = document.getElementById('result');
    var reportDiv = document.getElementById('report');

    if (voto === 'Aprovar') {
    votosAprovar++;
    } else if (voto === 'Reprovar') {
    votosReprovar++;
    }

    resultDiv.innerHTML = "Você votou em: " + voto;
    reportDiv.innerHTML = "Relatório:<br>Aprovações: " + votosAprovar + "<br>Reprovações: " + votosReprovar;

    var totalVotos = votosAprovar + votosReprovar;
    var percentAprovar = (votosAprovar / totalVotos * 100).toFixed(2);
    var percentReprovar = (votosReprovar / totalVotos * 100).toFixed(2);

    reportDiv.innerHTML += "<br>Percentual de Aprovação: " + percentAprovar + "%";
    reportDiv.innerHTML += "<br>Percentual de Reprovação: " + percentReprovar + "%";
}

//Graficos
const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');


new Chart(earning, {
    type: 'doughnut',
    data: data = {
        labels: [
          'Aprovado',
          'Reprovado',
          
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [70, 30],
          backgroundColor: [
            'rgb(63, 228, 41)',
            'rgb(252, 27, 27)'
          ],
          hoverOffset: 4
        }]
    },
    options: {
        Responsive: true
    }
});
