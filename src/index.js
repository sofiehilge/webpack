// denne her fil er webpacks entry point, den den kigger på for at finde kode som skal omskrives der er bredt supporteret i alle browsere
import "./style.scss";
import headerComponent from "./headerComponent.js";
import jokeComponent from "./jokeComponent.js";
import buttonComponent from "./buttonComponent";
import footerComponent from "./footerComponent.js";

headerComponent();
jokeComponent(); // da funktionen invokeres uden for sit scope, bliver vi nødt til at invokere funktionen efter at have importeret den.
//delay så componenterne bliver vist i den rækkefølge de bliver kaldt
/* setTimeout(() => {
    headerComponent();
}, 1000) */
//headerComponent();
// dette er dog ikke den gode løsning.
/* buttonComponent(); */
footerComponent();

//MANGLER AT INSTALLERE INLINE SOURCE MAP LOAder
//OBS vi veed ikke endnu hvordan man configurere webpack til at håndtere img-filer.