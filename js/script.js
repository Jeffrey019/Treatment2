// Fungsi Ambil & Simpan Ke LocalStorage
function getData() {
    return JSON.parse(localStorage.getItem("dataMahasiswa")) || [];
}

function saveData(data) {
    localStorage.setItem("dataMahasiswa", JSON.stringify(data));
}

// ====================
// LOGIKA FORM INPUT
// ====================
function initForm() {
    const form = document.getElementById("formData");
    if (!form) return; // Satpam pengaman agar tidak error di halaman lain

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Mengambil data dari form input
        const data = {
            nama: document.getElementById("nama").value,
            nim: document.getElementById("nim").value,
            layanan: document.getElementById("layanan").value,
            keterangan: document.getElementById("keterangan").value
        };

        let semuaData = getData();
        semuaData.push(data);
        saveData(semuaData);
        alert("Data berhasil disimpan");
        form.reset();
        window.location.href = 'riwayat.html'
    });
}

// ====================
// LOGIKA TAMPIL TABEL
// ====================
function renderTabel() {
    const tableBody = document.getElementById("tableBody");
    if (!tableBody) return; // Satpam pengaman agar tidak error di halaman lain

    let semuaData = getData();
    tableBody.innerHTML = ""; // Bersihkan isi tabel lama sebelum loop

    semuaData.forEach(function(item, index) {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.nim}</td>
                <td>${item.layanan}</td>
                <td>${item.keterangan}</td>
            </tr>
        `;
    });
}

// ====================
// INISIALISASI UTAMA
// ====================
document.addEventListener("DOMContentLoaded", function() {
    initForm();
    renderTabel();
});
