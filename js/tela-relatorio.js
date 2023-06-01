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


//Graficos

const earning = document.getElementById('earning');

new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Reprovação', 'Aprovação', 'Alunos', 'Professores', '', ''],
        datasets: [{
            label: '',
            data: [7, 20, 27, 7, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        Responsive: true
    }
});