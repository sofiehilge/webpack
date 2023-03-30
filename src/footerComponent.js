const footerComponent = () => {
    const element = document.createElement("footer");
    element.innerHTML += "Did you laugh?";
    document.querySelector("footer").append(element);
};

export default footerComponent(); // her eksporteres vores componenet, for at kunne importerer den i index.js