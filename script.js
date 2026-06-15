document.addEventListener("DOMContentLoaded", function() {

    const botao = document.querySelector(".btn");
    const secaoCards = document.querySelector(".cards-section");

    botao.addEventListener("click", function(event) {
        event.preventDefault();

        secaoCards.scrollIntoView({
            behavior: "smooth"
        });
    });

});
