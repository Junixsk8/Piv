// SENHA
const SECRET = "3105";

// ELEMENTOS
const openAccess = document.getElementById("openAccess");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const confirmPass = document.getElementById("confirmPass");
const passwordInput = document.getElementById("password");
const gallery = document.getElementById("gallery");
const hero = document.getElementById("hero");
const logout = document.getElementById("logout");
const musicBtn = document.getElementById("musicBtn");
const bgm = document.getElementById("bgm");

// abrir modal
openAccess.addEventListener("click", () => {
    modal.classList.remove("hidden");
    passwordInput.focus();
});

// fechar modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// confirmar senha
confirmPass.addEventListener("click", () => {
    const val = passwordInput.value.trim();
    if (val === SECRET) {
        modal.classList.add("hidden");
        hero.classList.add("hidden");
        gallery.classList.remove("hidden");
        bgm.play().catch(() => {});
        musicBtn.textContent = "⏸ Pausar";
    } else {
        alert("Senha incorreta");
        passwordInput.value = "";
        passwordInput.focus();
    }
});

// botão sair
logout.addEventListener("click", () => {
    gallery.classList.add("hidden");
    hero.classList.remove("hidden");
    bgm.pause();
    bgm.currentTime = 0;
});

// música
musicBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
        musicBtn.textContent = "⏸ Pausar";
    } else {
        bgm.pause();
        musicBtn.textContent = "▶ Música";
    }
});
