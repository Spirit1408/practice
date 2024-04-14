let modalButton = document.getElementById("modal-btn");
let modalWindow = document.getElementById("modal-window");
let modalCloseButton = document.getElementById("modal-close-btn");

modalButton.addEventListener("click", function () {
    modalWindow.classList.toggle("is-open");
});

modalCloseButton.addEventListener("click", function () {
    modalWindow.classList.toggle("is-open");
});