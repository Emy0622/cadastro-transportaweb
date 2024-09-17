const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// Função para atualizar a navegação
function updateNavigation() {
    slidePage.style.marginLeft = `${-25 * (current - 1)}%`;
}

// Função para atualizar o progresso (aplicar `active` apenas no botão "Continuar")
function updateProgress() {
    bullet.forEach((b, index) => {
        b.classList.toggle("active", index < current);
    });
    progressCheck.forEach((c, index) => {
        c.classList.toggle("active", index < current);
    });
}

// Navegação para o próximo passo (marcar o check do passo atual)
function handleNextButton() {
    if (current < 4) {
        // Marca o check e bullet para o passo atual
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        current += 1;
        updateNavigation();
    }
}

// Adiciona um evento de clique para o botão de próximo do primeiro passo
nextBtnFirst.addEventListener("click", function(event) {
    event.preventDefault();
    handleNextButton(); // Atualiza a navegação e o progresso
});

// Adiciona um evento de clique para o botão de próximo do segundo passo
nextBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    handleNextButton(); // Atualiza a navegação e o progresso
});


// Concluir o passo atual e marcar o check
submitBtn.addEventListener("click", function() {
    if (current < 3) {
        // Marcar o check e bullet para o passo atual
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        current += 1;
        updateNavigation();
    } else {
        setTimeout(function() {
            alert("Seu cadastro foi concluído!");
            location.reload();
        }, 800);
    }
});

// Navegação para o passo anterior
prevBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    if (current > 1) {
        current -= 1;
        updateNavigation();
    }
});

prevBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    if (current > 1) {
        current -= 1;
        updateNavigation();
    }
});

prevBtnFourth.addEventListener("click", function(event) {
    event.preventDefault();
    if (current > 1) {
        current -= 1;
        updateNavigation();
    }
});



