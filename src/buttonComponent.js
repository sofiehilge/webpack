import jokeComponent from "./jokeComponent";

const buttonComponent = () => {
    const element = document.createElement("button");
    element.addEventListener('click', buttonComponent)
    element.innerHTML += jokeComponent;
    document.querySelector("main").append(element);
};

export default buttonComponent();
//VIrker ikke men ok! :)