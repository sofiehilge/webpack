// test ved at omskrive funktionen med const component = () => {}  // det er en test af babel, da dette ikke er en syntax browsere forstår, 
//derfor kan vi på den måde teste om babel virker ved at skrive det sådan
// vi bruger axios pakken til at foretage HTTP-requestet
//WEBPACK hjælper os med at finde stien hen til axios dokumentet hvorfor det ikke skal defineres, som i POKE API opgaven

import axios from "axios";
//når vi skriver import axios from "axios" kan vi se i package JSON at axios er blevet lagt som en dependency til vores projekt
// i icanhazdadjoke.com kan vi se at endpointet skal komme med en header pga. -H
// $ curl er en backend command..som er en anden syntax end den vi bruger
/* 
axios.get('https://icanhazdadjoke.com/',{headers :{accept:"application/JSON"}})
.then((response) => {

    const jokeComponent =() => {//denne her funktion returnere et element nede i bunden
         const element = document.createElement("div");
    element.innerHTML= `${response.data.joke}`;
    return element;
    }
document.body.appendChild(jokeComponent());//står inde i {} fordi ellers prøver den at appende inden der er kommet et response.
    })  */


// axios er FEDT fordi - bedre syntax og bedre fejlmeddelelser

const jokeComponent =() => {} 
    axios.get('https://icanhazdadjoke.com/',{headers :{accept:"application/JSON"}})
.then((response) => {
    const element = document.createElement("div");
    element.innerHTML += `${response.data.joke}`;
    document.querySelector("main").append(element);
    
});
export default jokeComponent();

/* component(); invokeres nu i index.js*/


/* 
function component () {
    const element = document.createElement("div");
    element.innerHTML= "Hello, webpack!";
    return element;
}; */



// hvorfor er det nødvendigt at lægge oprettelsen af en div ind i en funktion?
//fordi så kan den genbruges
// og det er smart at have oprettelsen af elementer i et scope