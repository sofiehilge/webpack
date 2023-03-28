# webpack

1. opret en mappe og åben mappen i vs code
2. åben terminal og åben npm med "npm init -y"
3. package json betyder at du har gjort det rigtigt
3a. opret index.html
4. installer webpack og webpack-cli (command line interface)
......
npm i webpack webpack-cli -D
......

//npm install webpack webpack-cli debt-dependency

4. -D står for Dev Dependency: Dev dependencies are modules which are only required during development whereas dependencies are required at runtime. Dependency er når projektet er afhængigt af det for at fungere. DevDependency er når udviklingsmiljøet er afhængigt af det, men ikke når appen køre.

5. efter installationen er der masser af filer i nodemodules - som skal i vores .gitignore -> skriv nodemodules

6. src mappe i roden af projektet til js-filerne og så en build mappe: denne rør vi aldrig ved!! det der ligger i denne fil er det der bliver skubbet ud til browseren, som browseren kan læste. 

7. opret filen index.js i src mappen.

8. opret mappe dist/build til index.html link til javascript fil <script src="./main.js"></script>, da main.js er navnet på den fil som ligger i build, og som vil være den fil hvor build oversætter koden til en syntax som browseren forstår.

9. vi skal nu bruge weboack til at flytte filen, og dels omdøbe filen index.js til main.js

10. boiler plate kode skal smides ind i webpack.config.js

11. indsæt "web-pack --mode production" i package.json

12. I terminalen køres nu 'npx webpack --config webpack.config.js' // det skal være med config.js fordi denne komando sætter en config, og får fortalt at den sætter den nede i denne her fil. 

13. kør istedet dette fra terminalen med 'npm run build"

Springer fra trin 2 til trin 6:

14. babbel installeres således at vores JS kan læses af alle webbrowsere. Skriv i terminalen: 
- npm i babel-loader -D
- npm i @babel/core -D

15. installer: npm i @babel/preset-env -D

16. tilføj nu følgende i webpack.config.js:

module: {
    rules: [

    {

      test: /\.js$/i,

      exclude: /(node_modules)/,

      use: {

        loader: "babel-loader",

        options: {

          presets: ["@babel/preset-env"],

        },

      },

    },

  ],
}

17. lav test på hvordan babel sættes op i webpack.
18. skriv arrow funktion index.js
19. i terminal skriv run npm build -> den vil kigge i vores build fill inde i package.json
20. vi kan se at build har omskrevet koden inde i main.js i build mappen, arrow function er omskrevet til en IFFE og har minificeret koden og omskrevet koden som er supporteret af alle browsere!

21. nu konfigurere vi webpack til at web serveren åbner automatisk når vi køre npm run build i terminalen. dette er istedet for at bruge liveserver


21a. i package.json tilføjes: "dev": "webpack serve --mode development"

22.a først installeres: npm i webpack-dev-server -D

22. Invokeres ved at skrive: npx webpack serve

23. sæt mode: "development" inde i webpack.config.js under module.exports

24. i mellem output og module indsættes følgende:

devServer: {

    open: true,

    static: {

      directory: path.join(__dirname, "build"),

    },

    port: 3000,

  },
24a. køre igen kommandoen: npx webpack serve

24b. package.json sørg for at der står webpack serve både i build og dev.

24c. tilføj mode: "development" til webpack.config.js - det referere til om du køre i development eller produktion mode. 


25. man kan teste ved at skrive npm run og så navnet på pakken vi har hentet.

26. HVIS du bare har hentet filen ned, så har den ikke nodemodules med da denne er for stor til at blive uploadet og ligger i .gitignore

åben projektet:
- kør: npm install

-> dette vil oprette nodemodules og hente alle filerne.

---Opfølgning på i går:

Vi kan ikke blive ved med at; udvikle webapplikationer ved at modulere vores kode med flere scripts og alternativt samle det hele i et script,
- DRY: dont repeat yourself
- Oprette variabler i det globale scope

Fordi;
-	Mange scripts vil skabe en bottleneck effekt, som vil gøre vores webapplikation langsommere
-	Det er hurtigere at loade et script med samme mængde kode, men dette vil gøre vores kode uoverskuelig og øge risikoen for naming collision.
-	Det vil være sværere at maintaine
-	Hvis vi importere pakker, så vil der være meget kode og evt. også meget kode som vi ikke bruger. -> Vi bliver nødt til at purge
- da vi skulle installere pakken axios var det svært for os hvor filen ligger henne, det skulle vi finde ud af manuelt. Dette vil blive gjort automatisk med webpack.

---- transpile vs. compile:

-- eg. man har noget fra JS og vil have det over til C sharp - fra et sprog til et helt andet sprog er compiling
-- transpiling er fra et sprog til en anden variation af et sprog e.g css og sass
-- konvertering: at ændre syntaxen fra en syntax til en anden ---> kan godt være det i virkeligheden er at compile.


---BROWSEREN-----

- Browseren kan kun læse js, css og HTML derfor er det nødvendigt at transpile filer således at browseren kan læse dem
- Den bedste webaplikation består af en statisk HTML fil fordi det er det hurtigste at loade
-Vi skal bruge en bagud kompatibel JS - eg. arrow functions, async await, disse nye funktioner skal kunne fortolkes af browseren. Den er dog ikke lige så hurtig til at forstå det som dem der udvikler sproget. Derfor er der brug for en konverter fra en syntax til en anden syntax e.g fra async fetch() til et helt almindeligt fetch(), således at browseren kan forstå det. 

---webpack---
- er en bundler, den kan konfigureres således at den køre med babbel som kan konvertere vores js (Sikker js) så browseren kan læse den og også køre en transpiler der kan oversætte vores filer til en syntax.

OPGAVE:
1. installer axios i webpack projektet: npm i axios
2. brug axios: import axios from "axios" -> skrives i index.js filen.
3. den vil formentlig autocomplete linjen, da vi har webpack installeret.
4. i index.js har vi noget innerHTMl: "Hello webpack", skal være lig med APIdata (icanhazdadjoke.com)
5. se footer med api link icanhazdadjoke.com/api
6. fecth a random joke -> viser link til et endpoint med tilfældig joke.
7. Der skal laves en header for at få api Dataen tilbage i et format vi kan bruge.
7a. se insomnia, indsæt link, vælg header, application/json -> får data i et format der virker.
8. se i Axios documentation hvordan tilføjer Accept header til axiosget() "How to add headers to axios call"

    accept: application/json

----HUSK: altid bare et key:value pair, se hvordan syntaxen er i json, se hvordan den er anderledes i javascript.

9. husk hvis du ikke kan se resultatet i browseren så køre npm run dev så at det kan ses i browseren.
