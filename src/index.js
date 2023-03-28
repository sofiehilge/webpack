// test ved at omskrive funktionen med const component = () => {}  // det er en test af babel, da dette ikke er en syntax browsere forstår, 
//derfor kan vi på den måde teste om babel virker ved at skrive det sådan

import axios from "axios";

axios.get('https://icanhazdadjoke.com/',{headers :{accept:"application/JSON"}})
.then((response) => {
  /*   fetch('https://icanhazdadjoke.com/') */

  console.log(response)

    const component =() => {
         const element = document.createElement("div");
    element.innerHTML= `${response.data.joke}`;
    return element;
    }
document.body.appendChild(component());
    }) 


/* 
function component () {
    const element = document.createElement("div");
    element.innerHTML= "Hello, webpack!";
    return element;
}; */



// hvorfor er det nødvendigt at lægge oprettelsen af en div ind i en funktion?
//fordi så kan den genbruges
// og det er smart at have oprettelsen af elementer i et scope