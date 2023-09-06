// the dark mode toggle

const toggla = document.querySelector('#toggla');

toggla.addEventListener('click', () => {
    if (toggla.checked) {
        document.documentElement.setAttribute('data-theme', "black");
    } else {
        document.documentElement.setAttribute('data-theme', "lofi");
    }
});

//    the Lockdown Mode

const toggleDim = document.getElementById("toggleDim");
const disableOverlayBtn = document.getElementById("disableOverlayBtn");
const body = document.body;

toggleDim.addEventListener("change", () => {
    if (toggleDim.checked) {
        body.classList.add("dimmed");
        body.classList.add("dim-overlay");
        disableOverlayBtn.classList.remove("hidden"); // Show the button
    } else {
        body.classList.remove("dimmed");
        body.classList.remove("dim-overlay");
        disableOverlayBtn.classList.add("hidden"); // Hide the button
    }
});

disableOverlayBtn.addEventListener("click", () => {
    toggleDim.checked = false;
    body.classList.remove("dimmed");
    body.classList.remove("dim-overlay");
    disableOverlayBtn.classList.add("hidden"); // Hide the button
});

