
/* =====================================
   1. MODE GELAP DAN MODE TERANG
===================================== */

const themeButton = document.querySelector("#themeToggle");

// Memeriksa apakah tombol mode tersedia
if (themeButton) {

    // Mengambil tema yang pernah disimpan
    const savedTheme = localStorage.getItem("tipszone-theme");

    // Mengaktifkan tema yang tersimpan
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Mengatur tulisan tombol
    themeButton.textContent =
        document.body.classList.contains("dark")
            ? "Mode Terang"
            : "Mode Gelap";

    // Mengganti tema ketika tombol diklik
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const dark = document.body.classList.contains("dark");

        // Menyimpan pilihan tema
        localStorage.setItem(
            "tipszone-theme",
            dark ? "dark" : "light"
        );

        // Mengubah tulisan tombol
        themeButton.textContent = dark
            ? "Mode Terang"
            : "Mode Gelap";

    });
}


/* =====================================
   2. MENU NAVIGASI RESPONSIF
===================================== */

const menuButton = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");

// Memeriksa tombol dan menu navigasi
if (menuButton && navMenu) {

    // Mengatur kondisi awal menu
    menuButton.setAttribute("aria-expanded", "false");

    // Membuka dan menutup menu
    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const menuTerbuka = navMenu.classList.contains("show");

        menuButton.setAttribute(
            "aria-expanded",
            menuTerbuka
        );

        menuButton.textContent = menuTerbuka ? "✕" : "☰";

    });

    // Menutup menu setelah salah satu tautan diklik
    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰";

        });

    });

}


/* =====================================
   3. VALIDASI FORMULIR KONTAK
===================================== */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Mencegah halaman dimuat ulang
        event.preventDefault();

        // Mengambil isi formulir
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");

        // Memeriksa apakah semua elemen tersedia
        if (!nameInput || !emailInput || !messageInput) {
            alert("Formulir belum lengkap.");
            return;
        }

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Memeriksa kolom kosong
        if (!name || !email || !message) {

            alert("Semua kolom wajib diisi.");
            return;

        }

        // Memeriksa format email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Format email belum benar. Periksa kembali email kamu.");
            return;

        }

        // Menampilkan pesan berhasil
        alert(
            "Terima kasih, " + name +
            "! Formulir berhasil divalidasi."
        );

        // Mengosongkan formulir
        contactForm.reset();

    });

}
