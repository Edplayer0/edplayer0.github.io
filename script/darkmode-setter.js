const toggle = document.getElementById("dark-mode");

if (localStorage.getItem("dark-mode") === "true") {
    toggle.checked = true;
}

function applyMode() {
    if (localStorage.getItem("dark-mode") === "true") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

toggle.addEventListener("change", () => {
    localStorage.setItem("dark-mode", toggle.checked);
    applyMode();
});