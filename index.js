const button = document.getElementById("colorButton");

let isBlue = true;

button.addEventListener("click", () => {
    if (isBlue) {
        button.style.backgroundColor = "red";
    } else {
        button.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;
});
