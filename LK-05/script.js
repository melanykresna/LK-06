//Ambil elemen
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");

//event submit
form.addEventListener("submit", function (e) {
    e.preventDefault();


//mengambil data input dari form
const nama = document.getElementById("nama").value;
const email = document.getElementById("email").value;
const nohp = document.getElementById("nohp").value;
const kategori = document.getElementById("kategori").value;
const pesan = document.getElementById("pesan").value;

//validasi form
if (nama === "" || email ==="" || nohp ===""|| kategori ==="") {
    alert("Semua field wajib diisi");
    return;
}

if (!email.includes("@")) {
    alert("Email tidak valid!");
    return;
}

//menampilkan data (manipulasi DOM)
hasil.innerHTML = `
    <div style="margin-top:20px; padding:15px; background:#f1f5f9; border-radius:10px;">
        <h3>Data Berhasil Dikirim 💘</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No HP:</strong> ${nohp}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
        </div>
`;

//menampilkan notifikasi berhasil terkirim
alert("Pesan berhasil dikirim!!");

//mengosongkan form setelah digunakan
form.reset();
});

//interaktivitas tambahan
document.getElementById("nama").addEventListener("input", function (){
    console.log("User sedang mengetik nama....");
});