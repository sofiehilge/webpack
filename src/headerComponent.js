const headerComponent = () => {
    const element = document.createElement("h1");
    element.innerHTML += "Challeng try no to laugh";
    document.querySelector("header").append(element);
};

export default headerComponent(); // her eksporteres vores componenet, for at kunne importerer den i index.js