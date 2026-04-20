if (localStorage.getItem("dark-mode") === "true") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}