var btnFbOpen = document.querySelector(".contacts .btn");
var modalFbW = document.querySelector(".modal-feedback-wrapper");
var modalFb = document.querySelector(".modal-feedback");
var btnFbClose1 = document.querySelector(".modal-feedback .modal-exit");

btnFbOpen.addEventListener("click", function(event) {
    event.preventDefault();
    modalFbW.classList.add("visible");
    modalFb.classList.add("ajs-modal-feedback");
});

btnFbClose1.addEventListener("click", function(event) {
    event.preventDefault();
    modalFbW.classList.remove("visible");
    modalFb.classList.remove("ajs-modal-feedback");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (modalFbW.classList.contains("visible")) {
            event.preventDefault();
            modalFbW.classList.remove("visible");
            modalFb.classList.remove("ajs-modal-feedback");
        }
    }
});