
// =====================================
// UMKM SHELLA - SCRIPT JAVASCRIPT
// =====================================

// Nomor WhatsApp UMKM Shella
const nomorWhatsApp = "6283165143560";

// Menampilkan tahun otomatis di footer
const tahunElement = document.getElementById("tahun");

if (tahunElement) {
    tahunElement.textContent = new Date().getFullYear();
}

// Tombol pesan setiap produk
const tombolPesan = document.querySelectorAll(".pesan-btn");

tombolPesan.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const namaProduk = tombol.dataset.produk;

        const pesan =
            "Halo UMKM Shella, saya ingin memesan:\n" +
            "Produk: " + namaProduk + "\n" +
            "Harga: Rp8.000\n" +
            "Alamat usaha: Naga Harjo 1\n" +
            "Mohon informasi cara pemesanannya. Terima kasih.";

        const linkWhatsApp =
            "https://wa.me/" +
            nomorWhatsApp +
            "?text=" +
            encodeURIComponent(pesan);

        window.open(linkWhatsApp, "_blank");
    });
}

// Menutup menu navigasi setelah diklik di HP
const menuLinks = document.querySelectorAll("#menuNavbar .nav-link");
const menuNavbar = document.getElementById("menuNavbar");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            menuNavbar &&
            menuNavbar.classList.contains("show") &&
            typeof bootstrap !== "undefined"
        ) {
            bootstrap.Collapse
                .getOrCreateInstance(menuNavbar)
                .hide();
        }
    });
});
