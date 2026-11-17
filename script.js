// Interaksi JavaScript DOM: mode gelap dan validasi form.
const themeButton = document.querySelector("#themeToggle");
if (themeButton) {
  const savedTheme = localStorage.getItem("tipszone-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  themeButton.textContent = document.body.classList.contains("dark") ? "Mode Terang" : "Mode Gelap";
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem("tipszone-theme", dark ? "dark" : "light");
    themeButton.textContent = dark ? "Mode Terang" : "Mode Gelap";
  });
}
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    if (!name || !email || !message) {
      alert("Semua kolom wajib diisi.");
      return;
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      alert("Format email belum benar. Periksa kembali email kamu.");
      return;
    }
    alert("Terima kasih, " + name + "! Formulir berhasil divalidasi.");
    contactForm.reset();
  });
}