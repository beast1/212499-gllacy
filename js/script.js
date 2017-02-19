var btnFbOpen = document.querySelector(".contacts .btn");
var modalFb = document.querySelector(".modal-feedback-wrapper");
var btnFbClose1 = document.querySelector(".modal-feedback .modal-exit");

btnFbOpen.addEventListener("click", function(event) {
    event.preventDefault();
    modalFb.classList.add("visible");
});

btnFbClose1.addEventListener("click", function(event) {
    event.preventDefault();
    modalFb.classList.remove("visible");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (modalFb.classList.contains("visible")) {
            event.preventDefault();
            modalFb.classList.remove("visible");
        }
    }
});