// ローディング
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// ダークモード切替
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ハンバーガーメニュー
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("active");
});

// スクロールアニメーション
const faders = document.querySelectorAll(".fade-in, .article");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
